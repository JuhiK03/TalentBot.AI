import React, { useState, useCallback, useEffect } from 'react';
import { WebcamComponent } from './components/WebcamComponent';
import { TranscriptionBox } from './components/TranscriptionBox';
import { ChatResponse } from './components/ChatResponse';
import { AlertCircle } from 'lucide-react';
import { GeminiService } from './services/gemini';
import { isGeminiConfigured } from './config/constants';

function App() {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastProcessedText, setLastProcessedText] = useState('');

  useEffect(() => {
    if (!isGeminiConfigured()) {
      setError('Please configure your Gemini API key in the environment variables (VITE_GEMINI_API_KEY)');
    }
  }, []);

  const recognition = useCallback(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      return recognition;
    }
    return null;
  }, []);

  const handleGetAIResponse = async (text: string) => {
    if (!isGeminiConfigured()) {
      setError('Gemini API key is not configured');
      return;
    }

    // Prevent processing duplicate text
    if (text.trim() === lastProcessedText.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await GeminiService.getResponse(text);
      setAiResponse(response);
      setLastProcessedText(text.trim());
      setError('');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Failed to get AI response');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleListening = useCallback(() => {
    const recognitionInstance = recognition();
    if (!recognitionInstance) {
      setError('Speech recognition is not supported in your browser');
      return;
    }

    if (isListening) {
      recognitionInstance.stop();
    } else {
      let interimTranscript = '';
      recognitionInstance.start();
      
      recognitionInstance.onresult = async (event: any) => {
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript = event.results[i][0].transcript;
          }
        }

        if (finalTranscript) {
          setTranscript(prev => {
            const newTranscript = prev ? `${prev}\n${finalTranscript}` : finalTranscript;
            handleGetAIResponse(finalTranscript);
            return newTranscript;
          });
          interimTranscript = '';
        }
      };

      recognitionInstance.onerror = (event: any) => {
        setError(`Speech recognition error: ${event.error}`);
        setIsListening(false);
      };
    }

    setIsListening(!isListening);
  }, [isListening, recognition]);

  const handleClearTranscript = () => {
    setTranscript('');
    setAiResponse('');
    setLastProcessedText('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Real-time Interview Assistant
        </h1>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4 rounded-r shadow-sm">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WebcamComponent onError={setError} />
          <TranscriptionBox
            transcript={transcript}
            isListening={isListening}
            onToggleListening={handleToggleListening}
            onClear={handleClearTranscript}
          />
        </div>

        <ChatResponse response={aiResponse} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { Mic, MicOff } from 'lucide-react';

interface TranscriptionBoxProps {
  transcript: string;
  isListening: boolean;
  onToggleListening: () => void;
  onClear: () => void;
}

export function TranscriptionBox({
  transcript,
  isListening,
  onToggleListening,
  onClear,
}: TranscriptionBoxProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Speech Transcription</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={onClear}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            Clear
          </button>
          <div className="relative">
            <button
              onClick={onToggleListening}
              disabled={isListening === null}
              className={`
                p-3 rounded-full transition-all duration-300 ease-in-out transform
                ${isListening ? 
                  'bg-red-500 text-white hover:bg-red-600 scale-110' : 
                  'bg-emerald-500 text-white hover:bg-emerald-600'
                }
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${isListening ? 'focus:ring-red-500' : 'focus:ring-emerald-500'}
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
              title={isListening ? 'Stop listening' : 'Start listening'}
            >
              <div className="relative w-6 h-6">
                <div 
                  className={`
                    absolute inset-0 transform transition-all duration-300
                    ${isListening ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                  `}
                >
                  <MicOff className="w-6 h-6 animate-pulse" />
                </div>
                <div 
                  className={`
                    absolute inset-0 transform transition-all duration-300
                    ${isListening ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
                  `}
                >
                  <Mic className="w-6 h-6" />
                </div>
              </div>
              {isListening && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 h-[300px] overflow-y-auto bg-gray-50">
        <div className="bg-white rounded-lg p-4 shadow-inner min-h-full">
          {transcript ? (
            transcript.split('\n').map((line, index) => (
              <p key={index} className="text-gray-700 mb-2">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-500 italic">
              Click the microphone button and start speaking...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
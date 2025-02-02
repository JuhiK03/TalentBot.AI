import React from 'react';
import { MessageSquare, Loader } from 'lucide-react';

interface ChatResponseProps {
  response: string;
  isLoading: boolean;
}

export function ChatResponse({ response, isLoading }: ChatResponseProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b flex items-center">
        <MessageSquare className="w-5 h-5 text-gray-600 mr-2" />
        <h2 className="text-lg font-semibold text-gray-800">AI Response</h2>
      </div>
      <div className="p-4 min-h-[200px] bg-gray-50">
        <div className="bg-white rounded-lg p-4 shadow-inner min-h-full">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader className="w-6 h-6 text-gray-400 animate-spin" />
            </div>
          ) : (
            <div className="prose max-w-none">
              {response ? (
                <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
              ) : (
                <p className="text-gray-500 italic">
                  AI responses will appear here...
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
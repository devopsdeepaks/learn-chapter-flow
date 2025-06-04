
'use client';

import { ChapterList } from '@/components/ChapterList';
import { DarkModeToggle } from '@/components/DarkModeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  JEE Main
                </span>
              </div>
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <ChapterList />
      </main>
    </div>
  );
};

export default Index;

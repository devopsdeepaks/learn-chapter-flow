
'use client';

import { ChapterList } from '@/components/ChapterList';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { useAppSelector } from '@/store/hooks';

const Index = () => {
  const selectedSubject = useAppSelector((state) => state.filters.subjectTab);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <AppSidebar />
        </div>
        
        <SidebarInset className="flex-1">
          {/* Header */}
          <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-40">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Mobile Sidebar Trigger */}
                  <div className="lg:hidden">
                    <SidebarTrigger />
                  </div>
                  
                  {/* Mobile Header */}
                  <div className="lg:hidden flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      JEE Main
                    </span>
                  </div>
                  
                  {/* Desktop Header */}
                  <div className="hidden lg:block">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {selectedSubject} PYQs
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Chapter-wise Previous Year Questions
                    </p>
                  </div>
                </div>
                <DarkModeToggle />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            <ChapterList />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;

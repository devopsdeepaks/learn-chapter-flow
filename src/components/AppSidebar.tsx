
'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSubjectTab } from '@/store/filtersSlice';
import { Atom, FlaskConical, Calculator } from 'lucide-react';

const subjects = [
  { 
    id: 'Physics', 
    label: 'Physics', 
    icon: Atom, 
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20',
    borderColor: 'border-orange-200 dark:border-orange-800'
  },
  { 
    id: 'Chemistry', 
    label: 'Chemistry', 
    icon: FlaskConical, 
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    borderColor: 'border-green-200 dark:border-green-800'
  },
  { 
    id: 'Mathematics', 
    label: 'Mathematics', 
    icon: Calculator, 
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-800'
  },
] as const;

export function AppSidebar() {
  const dispatch = useAppDispatch();
  const selectedTab = useAppSelector((state) => state.filters.subjectTab);

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">✓</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">JEE Main</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">PYQ Collection</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 px-2">
            SUBJECTS
          </h2>
        </div>
        <SidebarMenu className="space-y-2">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            const isActive = selectedTab === subject.id;
            
            return (
              <SidebarMenuItem key={subject.id}>
                <SidebarMenuButton
                  onClick={() => dispatch(setSubjectTab(subject.id as any))}
                  className={`w-full p-4 rounded-xl transition-all duration-200 border ${
                    isActive
                      ? `${subject.bgColor} ${subject.borderColor} shadow-md`
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-white dark:bg-gray-800 shadow-sm' : 'bg-gray-100 dark:bg-gray-700'}`}>
                      <Icon className={`h-5 w-5 ${isActive ? subject.color : 'text-gray-500 dark:text-gray-400'}`} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className={`font-medium ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {subject.label}
                      </div>
                      <div className={`text-sm ${isActive ? 'text-gray-600 dark:text-gray-400' : 'text-gray-500 dark:text-gray-500'}`}>
                        Chapter-wise PYQs
                      </div>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

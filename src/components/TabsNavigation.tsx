
'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSubjectTab } from '@/store/filtersSlice';
import { Atom, FlaskConical, Calculator } from 'lucide-react';

const subjects = [
  { id: 'Physics', label: 'Physics', shortLabel: 'Phy', icon: Atom, color: 'bg-orange-500' },
  { id: 'Chemistry', label: 'Chemistry', shortLabel: 'Chem', icon: FlaskConical, color: 'bg-green-500' },
  { id: 'Mathematics', label: 'Mathematics', shortLabel: 'Math', icon: Calculator, color: 'bg-blue-500' },
] as const;

export function TabsNavigation() {
  const dispatch = useAppDispatch();
  const selectedTab = useAppSelector((state) => state.filters.subjectTab);

  return (
    <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex space-x-1">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          const isSelected = selectedTab === subject.id;
          
          return (
            <button
              key={subject.id}
              onClick={() => dispatch(setSubjectTab(subject.id as any))}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isSelected
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{subject.label}</span>
              <span className="sm:hidden">{subject.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

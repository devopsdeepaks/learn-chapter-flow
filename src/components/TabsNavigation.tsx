
'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSubjectTab } from '@/store/filtersSlice';

const subjects = [
  { id: 'Physics', label: 'Phy', color: 'bg-orange-500' },
  { id: 'Chemistry', label: 'Chem', color: 'bg-green-500' },
  { id: 'Mathematics', label: 'Math', color: 'bg-blue-500' },
] as const;

export function TabsNavigation() {
  const dispatch = useAppDispatch();
  const selectedTab = useAppSelector((state) => state.filters.subjectTab);

  return (
    <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
      {subjects.map((subject) => (
        <button
          key={subject.id}
          onClick={() => dispatch(setSubjectTab(subject.id as any))}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            selectedTab === subject.id
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <div className={`w-3 h-3 rounded-full ${subject.color}`} />
          {subject.label}
        </button>
      ))}
    </div>
  );
}


'use client';

import { useAppSelector } from '@/store/hooks';
import { chapters } from '@/data/chapters';
import { ChapterCard } from './ChapterCard';
import { TabsNavigation } from './TabsNavigation';
import { FilterControls } from './FilterControls';
import { FilterDrawer } from './FilterDrawer';
import { useMemo } from 'react';
import { BookOpen, Filter } from 'lucide-react';

export function ChapterList() {
  const filters = useAppSelector((state) => state.filters);

  const filteredAndSortedChapters = useMemo(() => {
    let filtered = chapters.filter((chapter) => {
      // Filter by subject tab
      if (chapter.subject !== filters.subjectTab) return false;

      // Filter by class levels
      if (filters.classFilters.length > 0 && !filters.classFilters.includes(chapter.class)) {
        return false;
      }

      // Filter by units
      if (filters.unitFilters.length > 0 && !filters.unitFilters.includes(chapter.unit)) {
        return false;
      }

      // Filter by status
      if (filters.statusFilters.length > 0 && !filters.statusFilters.includes(chapter.status)) {
        return false;
      }

      // Filter by weak chapters
      if (filters.weakToggle && !chapter.isWeakChapter) {
        return false;
      }

      return true;
    });

    // Sort by chapter name
    filtered.sort((a, b) => {
      const comparison = a.chapter.localeCompare(b.chapter);
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [filters]);

  const stats = useMemo(() => {
    const total = filteredAndSortedChapters.length;
    const completed = filteredAndSortedChapters.filter(ch => ch.status === 'Completed').length;
    const inProgress = filteredAndSortedChapters.filter(ch => ch.status === 'In Progress').length;
    const notStarted = filteredAndSortedChapters.filter(ch => ch.status === 'Not Started').length;
    
    return { total, completed, inProgress, notStarted };
  }, [filteredAndSortedChapters]);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Mobile Subject Tabs */}
      <div className="lg:hidden">
        <TabsNavigation />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
          {filters.subjectTab} PYQs
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Chapter-wise Previous Year Questions
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Chapters</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-600">{stats.notStarted}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Not Started</div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Desktop Filters */}
        <div className="hidden md:block">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
          </div>
          <FilterControls />
        </div>

        {/* Mobile Filters */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {filteredAndSortedChapters.length} Chapters
              </span>
            </div>
            <FilterDrawer />
          </div>
        </div>
      </div>

      {/* Chapter List */}
      <div className="space-y-4">
        {filteredAndSortedChapters.map((chapter, index) => (
          <ChapterCard key={`${chapter.subject}-${chapter.chapter}-${index}`} chapter={chapter} />
        ))}
      </div>

      {filteredAndSortedChapters.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No chapters found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
}

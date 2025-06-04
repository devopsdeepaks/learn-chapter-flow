
'use client';

import { useAppSelector } from '@/store/hooks';
import { chapters } from '@/data/chapters';
import { ChapterCard } from './ChapterCard';
import { TabsNavigation } from './TabsNavigation';
import { FilterControls } from './FilterControls';
import { FilterDrawer } from './FilterDrawer';
import { useMemo } from 'react';

export function ChapterList() {
  const filters = useAppSelector((state) => state.filters);

  const filteredAndSortedChapters = useMemo(() => {
    let filtered = chapters.filter((chapter) => {
      // Filter by subject tab
      if (chapter.subject !== filters.subjectTab) return false;

      // Filter by class levels
      if (filters.classFilters.length > 0 && !filters.classFilters.includes(chapter.classLevel)) {
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
      if (filters.weakToggle && !chapter.weak) {
        return false;
      }

      return true;
    });

    // Sort by title
    filtered.sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return filters.sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [filters]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {filters.subjectTab} PYQs
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Chapter-wise Collection of {filters.subjectTab} PYQs
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <TabsNavigation />
      </div>

      {/* Filters - Desktop */}
      <div className="hidden md:block mb-6">
        <div className="flex items-center justify-between mb-4">
          <FilterControls />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing all chapters ({filteredAndSortedChapters.length})
        </p>
      </div>

      {/* Filters - Mobile */}
      <div className="md:hidden mb-6">
        <div className="flex items-center justify-between mb-4">
          <FilterDrawer />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {filteredAndSortedChapters.length} chapters
          </p>
        </div>
      </div>

      {/* Chapter List */}
      <div className="space-y-3">
        {filteredAndSortedChapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>

      {filteredAndSortedChapters.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No chapters found matching your filters.
          </p>
        </div>
      )}
    </div>
  );
}

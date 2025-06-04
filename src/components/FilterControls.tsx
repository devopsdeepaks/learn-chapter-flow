
'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setClassFilters,
  setUnitFilters,
  setStatusFilters,
  setWeakToggle,
  setSortOrder,
} from '@/store/filtersSlice';
import { chapters } from '@/data/chapters';
import { MultiSelect } from '@/components/ui/multi-select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { useMemo } from 'react';

export function FilterControls() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  // Get unique options for current subject
  const subjectChapters = chapters.filter(
    (chapter) => chapter.subject === filters.subjectTab
  );

  const classOptions = useMemo(
    () => [...new Set(subjectChapters.map((chapter) => chapter.class))],
    [subjectChapters]
  );

  const unitOptions = useMemo(
    () => [...new Set(subjectChapters.map((chapter) => chapter.unit))],
    [subjectChapters]
  );

  const statusOptions = ['Not Started', 'In Progress', 'Completed'];

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="min-w-[120px]">
        <MultiSelect
          options={classOptions}
          selected={filters.classFilters}
          onSelectionChange={(selected) => dispatch(setClassFilters(selected))}
          placeholder="Class"
        />
      </div>

      <div className="min-w-[120px]">
        <MultiSelect
          options={unitOptions}
          selected={filters.unitFilters}
          onSelectionChange={(selected) => dispatch(setUnitFilters(selected))}
          placeholder="Units"
        />
      </div>

      <div className="min-w-[120px]">
        <MultiSelect
          options={statusOptions}
          selected={filters.statusFilters}
          onSelectionChange={(selected) => dispatch(setStatusFilters(selected))}
          placeholder="Status"
        />
      </div>

      <div className="flex items-center gap-2">
        <Switch
          checked={filters.weakToggle}
          onCheckedChange={(checked) => dispatch(setWeakToggle(checked))}
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Weak Chapters
        </span>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => dispatch(setSortOrder(filters.sortOrder === 'asc' ? 'desc' : 'asc'))}
        className="flex items-center gap-2"
      >
        {filters.sortOrder === 'asc' ? (
          <ArrowUp size={16} className="text-green-500" />
        ) : (
          <ArrowDown size={16} className="text-red-500" />
        )}
        Sort
      </Button>
    </div>
  );
}

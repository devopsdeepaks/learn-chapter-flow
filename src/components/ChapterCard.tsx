
'use client';

import { Chapter } from '@/data/chapters';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Atom,
  ChartBar,
  Lightbulb,
  Rocket,
  Target,
  Gear,
  Molecule,
  Calculator,
} from '@phosphor-icons/react';

// Random icon assignment
const icons = [Atom, ChartBar, Lightbulb, Rocket, Target, Gear, Molecule, Calculator];

const getIconForChapter = (id: string) => {
  const index = parseInt(id) % icons.length;
  return icons[index];
};

const getStatusColor = (status: Chapter['status']) => {
  switch (status) {
    case 'Not Started':
      return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    case 'In Progress':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
    case 'Completed':
      return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
  }
};

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const Icon = getIconForChapter(chapter.id);

  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center">
          <Icon size={20} className="text-orange-500" />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 dark:text-white truncate pr-2">
            {chapter.title}
          </h3>
          <div className="flex-shrink-0 text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {chapter.progressPercent}/205 Qs
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {chapter.classLevel}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {chapter.unit}
          </Badge>
          <Badge className={`text-xs ${getStatusColor(chapter.status)}`}>
            {chapter.status}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Progress value={chapter.progressPercent} className="flex-1" />
          <span className="text-sm text-gray-500 dark:text-gray-400 min-w-[3rem]">
            {chapter.progressPercent}%
          </span>
        </div>
      </div>
    </div>
  );
}

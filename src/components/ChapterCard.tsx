
'use client';

import { Chapter } from '@/data/chapters';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Atom,
  BarChart3,
  Lightbulb,
  Rocket,
  Target,
  Settings,
  Beaker,
  Calculator,
} from 'lucide-react';

// Random icon assignment using Lucide icons
const icons = [Atom, BarChart3, Lightbulb, Rocket, Target, Settings, Beaker, Calculator];

const getIconForChapter = (chapter: string) => {
  const hash = chapter.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  const index = Math.abs(hash) % icons.length;
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

const getTotalQuestions = (yearWiseQuestionCount: Chapter['yearWiseQuestionCount']) => {
  return Object.values(yearWiseQuestionCount).reduce((sum, count) => sum + count, 0);
};

const getProgressPercent = (questionSolved: number, totalQuestions: number) => {
  return totalQuestions > 0 ? Math.round((questionSolved / totalQuestions) * 100) : 0;
};

export function ChapterCard({ chapter }: { chapter: Chapter }) {
  const Icon = getIconForChapter(chapter.chapter);
  const totalQuestions = getTotalQuestions(chapter.yearWiseQuestionCount);
  const progressPercent = getProgressPercent(chapter.questionSolved, totalQuestions);

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
            {chapter.chapter}
          </h3>
          <div className="flex-shrink-0 text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {chapter.questionSolved}/{totalQuestions} Qs
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {chapter.class}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {chapter.unit}
          </Badge>
          <Badge className={`text-xs ${getStatusColor(chapter.status)}`}>
            {chapter.status}
          </Badge>
          {chapter.isWeakChapter && (
            <Badge variant="destructive" className="text-xs">
              Weak
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Progress value={progressPercent} className="flex-1" />
          <span className="text-sm text-gray-500 dark:text-gray-400 min-w-[3rem]">
            {progressPercent}%
          </span>
        </div>
      </div>
    </div>
  );
}

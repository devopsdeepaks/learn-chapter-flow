
'use client';

import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Clock, CheckCircle, XCircle, AlertTriangle, TrendingUp } from 'lucide-react';

interface Chapter {
  subject: string;
  chapter: string;
  class: string;
  unit: string;
  yearWiseQuestionCount: Record<string, number>;
  questionSolved: number;
  status: string;
  isWeakChapter: boolean;
}

interface ChapterCardProps {
  chapter: Chapter;
}

export function ChapterCard({ chapter }: ChapterCardProps) {
  const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce((sum, count) => sum + count, 0);
  const progressPercentage = totalQuestions > 0 ? (chapter.questionSolved / totalQuestions) * 100 : 0;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'In Progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'Not Started':
        return <XCircle className="h-5 w-5 text-gray-400" />;
      default:
        return <BookOpen className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/20 dark:text-green-400 dark:border-green-800';
      case 'In Progress':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-800';
      case 'Not Started':
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700';
    }
  };

  const recentYears = ['2023', '2024', '2025'];
  const recentTrend = recentYears.map(year => chapter.yearWiseQuestionCount[year] || 0);
  const isIncreasingTrend = recentTrend[2] > recentTrend[0];

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Main Content */}
          <div className="flex-1 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {getStatusIcon(chapter.status)}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {chapter.chapter}
                  </h3>
                  {chapter.isWeakChapter && (
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>{chapter.class}</span>
                  <span>•</span>
                  <span>{chapter.unit}</span>
                  {isIncreasingTrend && (
                    <>
                      <span>•</span>
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-xs font-medium">Trending</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <Badge variant="outline" className={getStatusColor(chapter.status)}>
                  {chapter.status}
                </Badge>
                {chapter.isWeakChapter && (
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-800 text-xs">
                    Weak Chapter
                  </Badge>
                )}
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Progress: {chapter.questionSolved}/{totalQuestions} questions
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <Progress 
                value={progressPercentage} 
                className="h-2"
              />
            </div>

            {/* Year-wise breakdown */}
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
              {Object.entries(chapter.yearWiseQuestionCount).map(([year, count]) => (
                <div 
                  key={year} 
                  className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600"
                >
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400">{year}</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="lg:w-32 flex lg:flex-col gap-4 lg:gap-2 lg:items-end">
            <div className="text-center lg:text-right">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{totalQuestions}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Total Questions</div>
            </div>
            {chapter.questionSolved > 0 && (
              <div className="text-center lg:text-right">
                <div className="text-lg font-semibold text-blue-600">{chapter.questionSolved}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Solved</div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

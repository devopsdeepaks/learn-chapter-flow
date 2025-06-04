
'use client';

import { useState } from 'react';
import { Check, ChevronDown } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onSelectionChange: (selected: string[]) => void;
  placeholder: string;
}

export function MultiSelect({ options, selected, onSelectionChange, placeholder }: MultiSelectProps) {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onSelectionChange(selected.filter((item) => item !== option));
    } else {
      onSelectionChange([...selected, option]);
    }
  };

  const displayText = selected.length === 0 
    ? placeholder 
    : selected.length === 1 
    ? selected[0] 
    : `${selected.length} selected`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="justify-between w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          <span className="truncate">{displayText}</span>
          <ChevronDown size={16} className="ml-2 flex-shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            onClick={() => toggleOption(option)}
            className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <span>{option}</span>
            {selected.includes(option) && (
              <Check size={16} className="text-orange-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

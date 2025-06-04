
# Chapter List - Educational Progress Tracker

A modern, responsive chapter tracking application built with Next.js, Redux, and Tailwind CSS. Features dark/light mode, advanced filtering, and a clean UI that matches educational platforms.

## Features

- **Subject Tabs**: Switch between Physics, Chemistry, and Mathematics
- **Advanced Filtering**: Multi-select filters for Class, Units, Status, and weak chapters
- **Sorting**: Ascending/descending sort with visual indicators
- **Dark/Light Mode**: Automatic system preference detection with manual toggle
- **Responsive Design**: Optimized for desktop and mobile with drawer filters
- **Progress Tracking**: Visual progress bars and status badges
- **Redux State Management**: Centralized state for filters and preferences

## Tech Stack

- **Next.js** (App Router)
- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Phosphor Icons** for visual elements
- **next-themes** for dark mode

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Project Structure

```
src/
├── components/
│   ├── providers/           # Redux and Theme providers
│   ├── ui/                  # shadcn/ui components (read-only)
│   ├── ChapterCard.tsx      # Individual chapter display
│   ├── ChapterList.tsx      # Main chapter list with filtering
│   ├── DarkModeToggle.tsx   # Theme switcher
│   ├── FilterControls.tsx   # Desktop filter controls
│   ├── FilterDrawer.tsx     # Mobile filter drawer
│   └── TabsNavigation.tsx   # Subject tabs
├── data/
│   └── chapters.ts          # Dummy chapter data
├── store/
│   ├── store.ts             # Redux store configuration
│   ├── filtersSlice.ts      # Filter state management
│   └── hooks.ts             # Typed Redux hooks
└── pages/
    ├── Index.tsx            # Main page component
    └── NotFound.tsx         # 404 page
```

## State Management

The application uses Redux Toolkit for state management with the following structure:

```typescript
interface FiltersState {
  subjectTab: 'Physics' | 'Chemistry' | 'Mathematics';
  classFilters: string[];
  unitFilters: string[];
  statusFilters: string[];
  weakToggle: boolean;
  sortOrder: 'asc' | 'desc';
}
```

## Data Schema

Each chapter follows this TypeScript interface:

```typescript
interface Chapter {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  classLevel: string;
  unit: string;
  title: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  weak: boolean;
  progressPercent: number;
}
```

## Replacing Dummy Data

To integrate real data, replace the dummy data in `src/data/chapters.ts`:

```typescript
// Replace this with your API call
export const chapters = await fetchChaptersFromAPI();
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready for deployment on Vercel, Netlify, or any platform supporting Next.js.

For Vercel:
```bash
npm i -g vercel
vercel
```

## Customization

- **Colors**: Modify Tailwind config in `tailwind.config.ts`
- **Icons**: Add more Phosphor icons in `ChapterCard.tsx`
- **Filters**: Extend filter logic in `filtersSlice.ts`
- **Themes**: Customize dark/light themes in `src/index.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

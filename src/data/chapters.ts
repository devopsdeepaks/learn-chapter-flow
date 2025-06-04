
export interface Chapter {
  id: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  classLevel: string;
  unit: string;
  title: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  weak: boolean;
  progressPercent: number;
}

export const chapters: Chapter[] = [
  // Physics chapters
  {
    id: '1',
    subject: 'Physics',
    classLevel: '2025: 80s',
    unit: '2024: 60s',
    title: 'Gravitation',
    status: 'Not Started',
    weak: false,
    progressPercent: 0
  },
  {
    id: '2',
    subject: 'Physics',
    classLevel: '2025: 20s',
    unit: '2024: 60s',
    title: 'Math in Physics',
    status: 'In Progress',
    weak: true,
    progressPercent: 56
  },
  {
    id: '3',
    subject: 'Physics',
    classLevel: '2025: 60s',
    unit: '2024: 60s',
    title: 'Units and Dimensions',
    status: 'Not Started',
    weak: false,
    progressPercent: 0
  },
  {
    id: '4',
    subject: 'Physics',
    classLevel: '2025: 80s',
    unit: '2024: 60s',
    title: 'Motion in One Dimension long name',
    status: 'Not Started',
    weak: false,
    progressPercent: 0
  },
  {
    id: '5',
    subject: 'Physics',
    classLevel: '2025: 80s',
    unit: '2024: 60s',
    title: 'Motion in Two Dimensions',
    status: 'Not Started',
    weak: false,
    progressPercent: 0
  },
  {
    id: '6',
    subject: 'Physics',
    classLevel: '2025: 80s',
    unit: '2024: 60s',
    title: 'Laws of Motion',
    status: 'Not Started',
    weak: false,
    progressPercent: 0
  },
  {
    id: '7',
    subject: 'Physics',
    classLevel: '2025: 80s',
    unit: '2024: 60s',
    title: 'Centre of Mass Equilibrium and Momentum',
    status: 'Not Started',
    weak: false,
    progressPercent: 0
  },
  // Chemistry chapters
  {
    id: '8',
    subject: 'Chemistry',
    classLevel: 'Class 11',
    unit: 'Unit 1',
    title: 'Atomic Structure',
    status: 'Completed',
    weak: false,
    progressPercent: 100
  },
  {
    id: '9',
    subject: 'Chemistry',
    classLevel: 'Class 11',
    unit: 'Unit 2',
    title: 'Chemical Bonding',
    status: 'In Progress',
    weak: true,
    progressPercent: 45
  },
  {
    id: '10',
    subject: 'Chemistry',
    classLevel: 'Class 12',
    unit: 'Unit 1',
    title: 'Organic Chemistry',
    status: 'Not Started',
    weak: false,
    progressPercent: 0
  },
  {
    id: '11',
    subject: 'Chemistry',
    classLevel: 'Class 12',
    unit: 'Unit 3',
    title: 'Thermodynamics',
    status: 'In Progress',
    weak: false,
    progressPercent: 67
  },
  // Mathematics chapters
  {
    id: '12',
    subject: 'Mathematics',
    classLevel: 'Class 11',
    unit: 'Unit 1',
    title: 'Algebra Fundamentals',
    status: 'Completed',
    weak: false,
    progressPercent: 100
  },
  {
    id: '13',
    subject: 'Mathematics',
    classLevel: 'Class 11',
    unit: 'Unit 2',
    title: 'Trigonometry',
    status: 'In Progress',
    weak: true,
    progressPercent: 78
  },
  {
    id: '14',
    subject: 'Mathematics',
    classLevel: 'Class 12',
    unit: 'Unit 1',
    title: 'Calculus',
    status: 'Not Started',
    weak: false,
    progressPercent: 0
  },
  {
    id: '15',
    subject: 'Mathematics',
    classLevel: 'Class 12',
    unit: 'Unit 2',
    title: 'Coordinate Geometry',
    status: 'In Progress',
    weak: false,
    progressPercent: 34
  }
];

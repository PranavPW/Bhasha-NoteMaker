export interface Note {
  id: string;
  title: string;
  content: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  hasMath: boolean;
}

export interface NoteFilters {
  language: string;
  searchQuery: string;
  dateRange: [Date | null, Date | null];
  tags: string[];
}
export type SnippetCategory = 
  | 'griglie'
  | 'card'
  | 'header'
  | 'hero'
  | 'frame'
  | 'menu'
  | 'footer';

export interface Snippet {
  id: string;
  title: string;
  category: SnippetCategory;
  description: string;
  html: string;
  css?: string;
  tags: string[];
}

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type PreviewTheme = 'dark' | 'light' | 'checkered';

export type ActiveTab = 'html' | 'css' | 'split';

export interface StarterTemplate {
  id: string;
  name: string;
  description: string;
  html: string;
  css?: string;
}

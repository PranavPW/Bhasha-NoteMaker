export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  preview: string;
  content: string;
  language: string;
  tags: string[];
  isPopular?: boolean;
}

export interface TemplateCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  templates: Template[];
}
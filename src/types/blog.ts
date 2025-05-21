
export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  readTime: number;
}

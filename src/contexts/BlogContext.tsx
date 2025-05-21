
import { createContext, useContext, useState } from "react";
import { BlogPost } from "@/types/blog";
import { BLOG_POSTS } from "@/data/blog-posts";

interface BlogContextType {
  posts: BlogPost[];
  currentPage: number;
  postsPerPage: number;
  searchTerm: string;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
  filteredPosts: BlogPost[];
  getPostById: (id: string) => BlogPost | undefined;
  addBlogPost: (post: BlogPost) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 6;

  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const getPostById = (id: string) => {
    return posts.find((post) => post.id === id);
  };

  const addBlogPost = (post: BlogPost) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        currentPage,
        postsPerPage,
        searchTerm,
        totalPages,
        setCurrentPage,
        setSearchTerm,
        filteredPosts,
        getPostById,
        addBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};

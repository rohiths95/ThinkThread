
import { BlogPost } from "@/types/blog";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50 rounded-xl">
      <Link to={`/post/${post.id}`} className="flex-grow">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground mb-2 gap-2">
            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              <span className="text-xs">{post.author}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span className="text-xs">{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs">{post.readTime} min</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
        </CardHeader>
        
        <CardContent className="pb-2">
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
        </CardContent>
      </Link>
      
      <CardFooter className="pt-2">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline" className="text-xs font-normal">
              +{post.tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;

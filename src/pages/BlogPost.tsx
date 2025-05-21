
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { useBlog } from "@/contexts/BlogContext";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Calendar, User, Share2, ThumbsUp, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { getPostById } = useBlog();
  const navigate = useNavigate();
  const post = getPostById(id || "");

  useEffect(() => {
    if (!post) {
      navigate("/not-found", { replace: true });
      return;
    }

    // Set the document title
    document.title = `${post.title} - DevBlog`;

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <Layout>
      <article>
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2 rounded-lg hover:bg-muted/50"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-10">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-lg mb-6"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6"
            >
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-xs">Author</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="aspect-[16/9] mb-10 overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass-card p-8 rounded-xl shadow-sm mb-10"
          >
            <MarkdownRenderer content={post.content} />
          </motion.div>
          
          <div className="my-10 flex flex-wrap gap-4 justify-center items-center">
            <Button variant="outline" size="lg" className="gap-2 rounded-lg">
              <ThumbsUp className="h-4 w-4" />
              Like this article
            </Button>
            <Button variant="outline" size="lg" className="gap-2 rounded-lg">
              <Bookmark className="h-4 w-4" />
              Save for later
            </Button>
            <Button variant="outline" size="lg" className="gap-2 rounded-lg">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
          
          <Separator className="my-10" />
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="rounded-lg">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg">
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg">
                Copy Link
              </Button>
            </div>
          </div>
        </motion.div>
      </article>
    </Layout>
  );
};

export default BlogPost;

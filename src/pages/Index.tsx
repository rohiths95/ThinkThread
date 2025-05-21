
import Layout from "@/components/Layout";
import BlogPostCard from "@/components/BlogPostCard";
import Pagination from "@/components/Pagination";
import { useBlog } from "@/contexts/BlogContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, PenLine, Sparkles, Bookmark, TrendingUp } from "lucide-react";

const Index = () => {
  const { filteredPosts, currentPage, postsPerPage, searchTerm } = useBlog();

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Layout>
      <section className="mb-20">
        <div className="hero-pattern py-16 md:py-24 px-4 rounded-2xl mb-16 text-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-primary/5 dark:bg-primary/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heading-lg mb-6 relative z-10"
          >
            Welcome to <span className="text-gradient">ThinkThread</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10"
          >
            Discover the latest insights, tutorials, and best practices in web development from industry experts and passionate creators
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link to="/create-blog">
              <Button className="btn-gradient px-8 py-6 text-lg rounded-lg">
                <PenLine className="mr-2 h-5 w-5" />
                Start Writing Today
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="px-8 py-6 text-lg rounded-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container-custom mb-24"
        >
          <motion.h2 variants={fadeInUpVariants} className="text-3xl font-bold mb-8">Featured Categories</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="feature-card flex flex-col items-center text-center p-8">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Latest Tutorials</h3>
              <p className="text-muted-foreground mb-4">Step-by-step guides to help you master modern web development techniques and tools</p>
              <Button variant="link" className="mt-auto">
                Browse Tutorials
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="feature-card flex flex-col items-center text-center p-8">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tech Trends</h3>
              <p className="text-muted-foreground mb-4">Stay updated with the latest trends, frameworks, and technologies shaping the future</p>
              <Button variant="link" className="mt-auto">
                Explore Trends
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="feature-card flex flex-col items-center text-center p-8">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bookmark className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Practices</h3>
              <p className="text-muted-foreground mb-4">Expert advice on coding standards, architecture, and performance optimization</p>
              <Button variant="link" className="mt-auto">
                Read Articles
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Discover our most recent publications</p>
          </motion.div>

          {searchTerm && filteredPosts.length === 0 ? (
            <div className="text-center py-12 glass-card">
              <h2 className="text-2xl font-bold mb-4">No posts found</h2>
              <p className="text-muted-foreground">
                Try searching with different keywords
              </p>
            </div>
          ) : (
            <>
              {searchTerm && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-2">
                    Search Results: {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
                  </h2>
                </div>
              )}

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentPosts.map((post) => (
                  <motion.div key={post.id} variants={itemVariants}>
                    <BlogPostCard post={post} />
                  </motion.div>
                ))}
              </motion.div>

              {filteredPosts.length > postsPerPage && <Pagination />}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;

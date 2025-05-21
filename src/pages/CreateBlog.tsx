
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useBlog } from "@/contexts/BlogContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { addBlogPost } = useBlog();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    tags: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title.trim() || !formData.content.trim()) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        variant: "destructive",
      });
      return;
    }

    // Process tags
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    // Create a new blog post
    const newPost = {
      id: `post-${Date.now()}`,
      title: formData.title,
      author: "John Doe", // This would come from user context in a real app
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      excerpt: formData.excerpt || formData.content.slice(0, 150) + "...",
      content: formData.content,
      coverImage: formData.coverImage,
      tags: tagsArray.length > 0 ? tagsArray : ["Uncategorized"],
      readTime: Math.max(1, Math.ceil(formData.content.split(" ").length / 200)),
    };

    // Add the blog post
    addBlogPost(newPost);

    // Show a success message
    toast({
      title: "Success",
      description: "Your blog post has been published!",
    });

    // Redirect to the new blog post
    navigate(`/post/${newPost.id}`);
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create a New Blog Post</CardTitle>
            <CardDescription>Share your knowledge with the community</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter a descriptive title"
                  value={formData.title}
                  onChange={handleChange}
                  className="input-focus"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="excerpt">Short Excerpt (optional)</Label>
                <Input
                  id="excerpt"
                  name="excerpt"
                  placeholder="A brief summary of your post"
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="input-focus"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  name="tags"
                  placeholder="react, typescript, webdev"
                  value={formData.tags}
                  onChange={handleChange}
                  className="input-focus"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="coverImage">Cover Image URL</Label>
                <Input
                  id="coverImage"
                  name="coverImage"
                  placeholder="https://example.com/image.jpg"
                  value={formData.coverImage}
                  onChange={handleChange}
                  className="input-focus"
                />
                {formData.coverImage && (
                  <div className="mt-2 rounded-md overflow-hidden aspect-video">
                    <img
                      src={formData.coverImage}
                      alt="Cover preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Content (Markdown supported)</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your blog post content here. Markdown is supported."
                  rows={15}
                  value={formData.content}
                  onChange={handleChange}
                  className="font-mono text-sm input-focus"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <Button type="submit">Publish Post</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateBlog;

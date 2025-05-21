
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About ThinkThread</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            ThinkThread is a modern publishing platform focused on web development, 
            programming, and tech topics. Our mission is to provide high-quality, 
            in-depth articles that help developers grow their skills and stay updated 
            with the latest trends and technologies.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
          <p>
            Founded in 2025, ThinkThread started as a small personal blog and has grown into 
            a community-driven platform where developers share knowledge, experiences, and 
            best practices. We believe in the power of knowledge sharing and continuous learning.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>In-depth technical articles written by experienced developers</li>
            <li>Clean, distraction-free reading experience</li>
            <li>Dark mode for comfortable reading at any time</li>
            <li>Markdown support for code blocks and rich formatting</li>
            <li>Responsive design that works on all your devices</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Technical Stack</h2>
          <p>
            THinkThread is built with modern web technologies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>React for the frontend</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>React Router for navigation</li>
            <li>Context API for state management</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Connect With Us</h2>
          <p>
            We're always looking for feedback, suggestions, and contributions. 
            Feel free to reach out to us on social media or via email.<span>thinkthread@gmail.com</span>
          </p>
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;

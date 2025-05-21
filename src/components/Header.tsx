
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/contexts/BlogContext";
import { Input } from "@/components/ui/input";
import { Moon, Sun, Search, PenLine, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { searchTerm, setSearchTerm } = useBlog();

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-20 shadow-sm">
      <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              ThinkThread 
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-2 md:w-1/3">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full input-focus"
            />
          </div>
        </div>

        <nav className="flex items-center space-x-1 sm:space-x-4">
          <Link to="/" className="text-foreground hover:text-primary transition-colors px-2 py-1">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors px-2 py-1">
            About
          </Link>
          <Link to="/create-blog">
            <Button className="gap-1.5 hidden sm:flex" variant="default">
              <PenLine className="h-4 w-4" />
              Write
            </Button>
            <Button className="p-2 sm:hidden" variant="default" size="icon">
              <PenLine className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

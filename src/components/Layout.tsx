
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

const Layout = ({ children, fullWidth = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      <main className="flex-grow py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key="page-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={fullWidth ? "w-full" : "container-custom"}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

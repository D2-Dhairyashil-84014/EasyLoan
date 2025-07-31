import React from 'react';
    import { motion } from 'framer-motion';
    import { Menu, MoreVertical } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useToast } from "@/components/ui/use-toast";

    const Header = () => {
      const { toast } = useToast();

      const handleMenuClick = () => {
        toast({
          title: "🚧 Feature Not Implemented",
          description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
      };

      return (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-600">EasyLoan</span>
                <span className="text-2xl font-light text-gray-600">Now</span>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" size="icon" className="md:hidden" onClick={handleMenuClick}>
                  <Menu className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={handleMenuClick}>
                  <MoreVertical className="h-6 w-6" />
                </Button>
                <nav className="hidden md:flex md:space-x-8">
                  <Button variant="ghost" onClick={handleMenuClick}>Home</Button>
                  <Button variant="ghost" onClick={handleMenuClick}>About</Button>
                  <Button variant="ghost" onClick={handleMenuClick}>Contact</Button>
                </nav>
              </div>
            </div>
          </div>
        </motion.header>
      );
    };

    export default Header;
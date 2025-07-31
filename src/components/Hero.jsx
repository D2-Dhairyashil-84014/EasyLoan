import React from 'react';
    import { motion } from 'framer-motion';
    import { CheckCircle, Gift } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { useToast } from "@/components/ui/use-toast";

    const Hero = () => {
      const { toast } = useToast();

      const handleSubmit = (e) => {
        e.preventDefault();
        toast({
          title: "Let's Find Your Loan!",
          description: "Scroll down to see filtered loan offers based on your input! (This is a demo 😉)",
        });
      };

      const features = [
        "Best Offers from 10+ lenders",
        "Hassle-Free Documentation",
        "Quick Disbursal",
      ];

      return (
        <section className="relative bg-blue-50 overflow-hidden py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                  Unlock Best <span className="text-blue-600">Loan Offers</span> for Your Capital Needs
                </h1>
                <div className="mt-6 border-l-4 border-blue-500 pl-4">
                  <p className="text-lg text-gray-600">
                    Meet your financial goals with our tailored business and personal loan solutions.
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index + 0.5 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <Card className="relative z-10 shadow-2xl rounded-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 text-white">
                    <div className="flex items-center space-x-3">
                      <Gift className="h-8 w-8" />
                      <div>
                        <h3 className="font-bold text-lg">Xclusive Offer</h3>
                        <p className="text-sm">Get up to <span className="font-bold">₹1,000*</span> Amazon Voucher</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="loanAmount" className="text-sm font-medium text-gray-700">Loan Amount (₹)</Label>
                        <Input id="loanAmount" type="number" placeholder="e.g., 500000" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="tenure" className="text-sm font-medium text-gray-700">Loan Tenure (Months)</Label>
                        <Input id="tenure" type="number" placeholder="e.g., 24" className="mt-1" required />
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg transition-transform transform hover:scale-105">
                        Check Offers
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
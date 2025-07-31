import React from 'react';
    import { Helmet } from 'react-helmet';
    import Header from '@/components/Header';
    import Hero from '@/components/Hero';
    import Features from '@/components/Features';
    import Partners from '@/components/Partners';
    import Footer from '@/components/Footer';
    import { Toaster } from "@/components/ui/toaster";

    function App() {
      return (
        <div className="min-h-screen bg-slate-50 font-sans">
          <Helmet>
            <title>Easy Loan Now - Find Your Perfect Loan</title>
            <meta name="description" content="Compare and find the best business and personal loan offers. Filter by employment type, loan amount, and more from over 10+ lenders." />
          </Helmet>
          <Header />
          <main>
            <Hero />
            <Partners />
            <Features />
          </main>
          <Footer />
          <Toaster />
        </div>
      );
    }

    export default App;
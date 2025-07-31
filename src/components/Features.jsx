import React from 'react';
    import { motion } from 'framer-motion';
    import { CheckCircle, TrendingUp, Briefcase, Banknote } from 'lucide-react';

    const FeatureItem = ({ icon, text }) => (
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <CheckCircle className="h-6 w-6 text-green-500" />
        </div>
        <p className="text-gray-600">{text}</p>
      </div>
    );

    const EligibilityItem = ({ icon, title, description }) => (
      <motion.div
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{title}</h4>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    );

    const Features = () => {
      const featuresAndBenefits = [
        "Both secured & unsecured loans are available",
        "Loan amount: Unsecured loan - Up to Rs 1 crore; Secured loans - Up to Rs 5 crore",
        "Loan tenure: Unsecured loan - Up to 5 years; Secured loans - Up to 15 years",
        "Unsecured loan facilities include term loans & working capital loans",
        "Secured loan facilities include Cash Credit A/c & Working Capital Loans",
      ];

      const eligibilityCriteria = [
        { icon: <Banknote className="h-6 w-6" />, title: "Age", description: "21 - 60 years" },
        { icon: <Briefcase className="h-6 w-6" />, title: "Business Vintage", description: "1 year & above" },
        { icon: <TrendingUp className="h-6 w-6" />, title: "Credit Score", description: "675 & above for better rates" },
      ];

      return (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">General Information</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We simplify the loan process by connecting you with the best offers from top lenders, all in one place.</p>
                <div className="mt-6 w-24 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Features & Benefits</h3>
                  <div className="w-16 h-1 bg-blue-500 rounded-full mb-8"></div>
                  <div className="space-y-5">
                    {featuresAndBenefits.map((item, index) => (
                      <FeatureItem key={index} text={item} />
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">General Loan Eligibility</h3>
                  <div className="w-16 h-1 bg-blue-500 rounded-full mb-8"></div>
                  <div className="space-y-6">
                    {eligibilityCriteria.map((item, index) => (
                      <EligibilityItem key={index} {...item} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Features;
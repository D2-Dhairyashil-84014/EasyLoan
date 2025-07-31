import React, { useState, useMemo } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { useToast } from "@/components/ui/use-toast";
    import { Badge } from '@/components/ui/badge';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
    import { Slider } from "@/components/ui/slider";
    import { Label } from "@/components/ui/label";
    import { Check } from 'lucide-react';

    const partnersData = [
      {
        name: 'HDFC Bank',
        logo: 'HDFC Bank logo',
        alt: 'HDFC Bank logo',
        interestRate: '10.75% p.a. onwards',
        minLoan: 50000,
        maxLoan: 4000000,
        tenure: '12-48 months',
        type: 'Bank',
        employmentTypes: ['Salaried', 'Self Employed'],
        features: ['Quick approval', 'Flexible repayment', 'Minimal documentation']
      },
      {
        name: 'LendingKart',
        logo: 'LendingKart app logo',
        alt: 'LendingKart app logo',
        interestRate: '1.25% p.m. onwards',
        minLoan: 50000,
        maxLoan: 10000000,
        tenure: '6-36 months',
        type: 'Fintech',
        employmentTypes: ['Self Employed'],
        features: ['100% digital process', 'No collateral required', 'Fast disbursal']
      },
      {
        name: 'ICICI Bank',
        logo: 'ICICI Bank logo',
        alt: 'ICICI Bank logo',
        interestRate: '11.25% p.a. onwards',
        minLoan: 100000,
        maxLoan: 5000000,
        tenure: '12-60 months',
        type: 'Bank',
        employmentTypes: ['Salaried', 'Self Employed'],
        features: ['Competitive interest rates', 'Overdraft facility', 'Pre-approved offers']
      },
      {
        name: 'Indifi',
        logo: 'Indifi app logo',
        alt: 'Indifi app logo',
        interestRate: '1.50% p.m. onwards',
        minLoan: 100000,
        maxLoan: 5000000,
        tenure: 'Up to 36 months',
        type: 'Fintech',
        employmentTypes: ['Self Employed'],
        features: ['Loans for MSMEs', 'Customized loan products', 'Transparent fees']
      },
      {
        name: 'Axis Bank',
        logo: 'Axis Bank logo',
        alt: 'Axis Bank logo',
        interestRate: '10.49% p.a. onwards',
        minLoan: 50000,
        maxLoan: 5000000,
        tenure: '12-36 months',
        type: 'Bank',
        employmentTypes: ['Salaried'],
        features: ['Attractive interest rates', 'Easy application process', 'Balance transfer available']
      },
      {
        name: 'FlexiLoans',
        logo: 'FlexiLoans app logo',
        alt: 'FlexiLoans app logo',
        interestRate: '1% p.m. onwards',
        minLoan: 50000,
        maxLoan: 10000000,
        tenure: 'Up to 36 months',
        type: 'Fintech',
        employmentTypes: ['Self Employed'],
        features: ['No hidden charges', 'Business loans without collateral', 'Quick and easy online process']
      },
    ];

    const loanAmountConfig = {
        'Salaried': { min: 50000, max: 5000000, step: 10000 },
        'Self Employed': { min: 100000, max: 10000000, step: 50000 },
    };

    const PartnerCard = ({ partner, index }) => {
        const { toast } = useToast();

        const handleApplyClick = () => {
            toast({
                title: `Applying to ${partner.name}`,
                description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            });
        };

        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
            >
                <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-gray-200 rounded-2xl bg-white">
                    <CardHeader className="flex flex-row items-center justify-between p-4 bg-gray-50">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
                                <img  className="h-8 w-8 object-contain" alt={partner.alt} src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
                            </div>
                            <CardTitle className="text-lg font-bold text-gray-800">{partner.name}</CardTitle>
                        </div>
                        <Badge variant={partner.type === 'Bank' ? 'default' : 'secondary'}>{partner.type}</Badge>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                        <ul className="space-y-3 text-sm text-gray-600 mb-6">
                            <li className="flex justify-between">
                                <span className="font-medium text-gray-500">Interest Rate:</span>
                                <span className="font-bold text-gray-800">{partner.interestRate}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium text-gray-500">Max. Loan Amt:</span>
                                <span className="font-bold text-gray-800">₹{partner.maxLoan.toLocaleString('en-IN')}</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium text-gray-500">Tenure:</span>
                                <span className="font-bold text-gray-800">{partner.tenure}</span>
                            </li>
                        </ul>
                        <div>
                            <p className="font-semibold text-gray-700 mb-2 text-sm">Features & Benefits:</p>
                            <ul className="space-y-2">
                                {partner.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-xs text-gray-600">
                                        <Check className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-50 mt-auto">
                        <Button onClick={handleApplyClick} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-transform transform hover:scale-105">
                            Apply Now
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        );
    };

    const Partners = () => {
        const [employmentType, setEmploymentType] = useState('Salaried');
        const [loanAmount, setLoanAmount] = useState([loanAmountConfig['Salaried'].min]);

        const handleEmploymentChange = (value) => {
            setEmploymentType(value);
            setLoanAmount([loanAmountConfig[value].min]);
        };

        const currentConfig = loanAmountConfig[employmentType];

        const filteredPartners = useMemo(() => {
            return partnersData.filter(partner =>
                partner.employmentTypes.includes(employmentType) &&
                loanAmount[0] >= partner.minLoan &&
                loanAmount[0] <= partner.maxLoan
            );
        }, [employmentType, loanAmount]);

        return (
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Find Your Perfect Loan</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Filter our lending partners to find the best match for your needs.
                        </p>
                        <div className="mt-6 w-24 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-xl mb-16 border border-gray-100"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                            <div>
                                <Label htmlFor="employmentType" className="text-lg font-semibold text-gray-700">I am</Label>
                                <Select onValueChange={handleEmploymentChange} defaultValue={employmentType}>
                                    <SelectTrigger id="employmentType" className="w-full mt-2 text-base h-12">
                                        <SelectValue placeholder="Select employment type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Salaried">Salaried</SelectItem>
                                        <SelectItem value="Self Employed">Self Employed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <Label className="text-lg font-semibold text-gray-700">Loan Amount</Label>
                                    <span className="font-bold text-xl text-blue-600">₹{loanAmount[0].toLocaleString('en-IN')}</span>
                                </div>
                                <Slider
                                    value={loanAmount}
                                    onValueChange={setLoanAmount}
                                    min={currentConfig.min}
                                    max={currentConfig.max}
                                    step={currentConfig.step}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>₹{currentConfig.min.toLocaleString('en-IN')}</span>
                                    <span>₹{currentConfig.max.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredPartners.length > 0 ? (
                                filteredPartners.map((partner, index) => (
                                    <PartnerCard key={partner.name} partner={partner} index={index} />
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="md:col-span-2 lg:col-span-3 text-center py-12"
                                >
                                    <p className="text-xl text-gray-600">No lenders match your criteria. Try adjusting the filters!</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        );
    };

    export default Partners;
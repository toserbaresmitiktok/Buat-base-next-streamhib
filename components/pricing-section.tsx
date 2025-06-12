"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Gift, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const subscriptionLinks = {
  starter: "https://streamhib.myr.id/pl/set-1-streamhib-lengkap-fitur-jadwal-live",
  pro: "https://streamhib.myr.id/pl/set-2-streamhib-lengkap-fitur-jadwal-live",
  business: "https://streamhib.myr.id/pl/set-3-streamhib-lengkap-fitur-jadwal-live",
};

export function PricingSection() {
  const t = useTranslations('pricing');

  const plans = [
    {
      id: 'starter',
      name: t('plans.0.name'),
      price: t('plans.0.price'),
      description: t('plans.0.description'),
      popular: false,
      cta: t('plans.0.cta'),
      features: t.raw('plans.0.features')
    },
    {
      id: 'pro',
      name: t('plans.1.name'),
      price: t('plans.1.price'),
      description: t('plans.1.description'),
      popular: true,
      cta: t('plans.1.cta'),
      features: t.raw('plans.1.features')
    },
    {
      id: 'business',
      name: t('plans.2.name'),
      price: t('plans.2.price'),
      description: t('plans.2.description'),
      popular: false,
      cta: t('plans.2.cta'),
      features: t.raw('plans.2.features')
    }
  ];

  const handleSubscribe = (planId: string) => {
    const link = subscriptionLinks[planId as keyof typeof subscriptionLinks];
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t('description')}
          </p>
          
          {/* Special Offer Banner */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium mb-8">
            <Gift className="w-5 h-5 mr-2" />
            {t('offer')}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'shadow-md'} hover:shadow-lg transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    🔥 Paling Laris
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    Rp{plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/bulan</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold ${
                    plan.popular 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                  }`}
                  size="lg"
                  onClick={() => handleSubscribe(plan.id)}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-yellow-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {t('benefits.0')}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Gift className="w-6 h-6 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {t('benefits.1')}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Check className="w-6 h-6 text-blue-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {t('benefits.2')}
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mr-4"
              onClick={() => handleSubscribe('starter')}
            >
              {t('cta.primary')}
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleSubscribe('pro')}
            >
              {t('cta.secondary')}
            </Button>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
            {t('note')}
          </p>
        </div>
      </div>
    </section>
  );
}
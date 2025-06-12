"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Gift, Zap } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "99",
    period: "bulan",
    description: "Buat kamu yang baru mau coba live streaming 24/7",
    features: [
      "1 Channel Live Streaming",
      "Upload video hingga 2GB",
      "Live streaming 24/7 nonstop",
      "Dashboard web-based",
      "Support email",
      "Video loop otomatis"
    ],
    popular: false,
    cta: "Mulai Sekarang"
  },
  {
    name: "Pro",
    price: "199",
    period: "bulan",
    description: "Untuk content creator serius yang mau scale up",
    features: [
      "3 Channel Live Streaming",
      "Upload video hingga 10GB",
      "Live streaming 24/7 nonstop",
      "Dashboard web-based",
      "Priority support",
      "Video loop otomatis",
      "Jadwal otomatis",
      "Analytics lengkap"
    ],
    popular: true,
    cta: "Pilih Pro"
  },
  {
    name: "Business",
    price: "399",
    period: "bulan",
    description: "Solusi lengkap untuk agency atau tim besar",
    features: [
      "10 Channel Live Streaming",
      "Upload video unlimited",
      "Live streaming 24/7 nonstop",
      "Dashboard web-based",
      "24/7 phone support",
      "Video loop otomatis",
      "Jadwal otomatis",
      "Analytics lengkap",
      "Custom branding",
      "API access"
    ],
    popular: false,
    cta: "Hubungi Sales"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Harga yang Masuk Akal untuk Hasil yang Gak Masuk Akal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Mulai dari Rp99k/bulan, kamu udah bisa live streaming 24/7 tanpa ribet. Lebih murah dari beli komputer baru yang bakal overheat lagi.
          </p>
          
          {/* Special Offer Banner */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium mb-8">
            <Gift className="w-5 h-5 mr-2" />
            🔥 Coba gratis 7 hari, gak perlu kartu kredit!
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
                    Rp{plan.price}k
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
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
                Mulai dari Rp99k/bulan
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Gift className="w-6 h-6 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Gratis 7 hari, tanpa kartu kredit
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Check className="w-6 h-6 text-blue-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Aktif dalam 5 menit!
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mr-4">
              🔥 Coba Gratis Sekarang
            </Button>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              🚀 Mulai Live Hari Ini
            </Button>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
            💡 Setup cuma 5 menit, langsung bisa live streaming 24/7
          </p>
        </div>
      </div>
    </section>
  );
}
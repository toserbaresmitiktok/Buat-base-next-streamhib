"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Andi S.",
    channel: "Relaxing Music ID",
    content: "Udah 1 bulan live nonstop, gila sih! Dulu pakai komputer sendiri, 2 hari udah overheat. Sekarang tenang banget, tinggal cek dari HP doang.",
    rating: 5,
    duration: "1 bulan live"
  },
  {
    name: "Maya R.",
    channel: "ASMR Hujan",
    content: "Pernah pakai yang lain, 3 hari mati. Pindah ke StreamHib, udah 2 minggu lancar jaya! Channel ASMR gue sekarang live 24/7 tanpa drama.",
    rating: 5,
    duration: "2 minggu live"
  },
  {
    name: "Budi T.",
    channel: "Lo-Fi Beats",
    content: "Cuma modal HP dan dashboard ini, live terus jalan. Subscriber naik terus karena selalu ada konten. ROI-nya gila!",
    rating: 5,
    duration: "3 minggu live"
  },
  {
    name: "Sari K.",
    channel: "Nature Sounds",
    content: "Sebagai content creator yang sibuk kerja, StreamHib life saver banget. Set jadwal sekali, live otomatis jalan pas jam prime time.",
    rating: 5,
    duration: "2 minggu live"
  },
  {
    name: "Doni P.",
    channel: "Chill Vibes",
    content: "Server stabil parah, dashboard gampang banget dipahami. Yang paling penting, live streaming gak pernah putus-putus lagi.",
    rating: 5,
    duration: "1 minggu live"
  },
  {
    name: "Lisa M.",
    channel: "Study Music",
    content: "Perfect banget buat channel musik study. Viewers selalu ada karena live 24/7. Engagement naik 300% sejak pakai StreamHib!",
    rating: 5,
    duration: "3 minggu live"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 font-medium mb-4">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Dipercaya 100+ Content Creator Indonesia
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mereka Udah Ngerasain, Sekarang Giliran Kamu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Jangan cuma dengerin kata kami. Ini testimoni real dari content creator yang udah merasakan kemudahan StreamHib
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {testimonial.duration}
                  </span>
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-500 opacity-20" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      {testimonial.channel}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Channel Aktif</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Server Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Jam Live Total</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
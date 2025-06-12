"use client";

import { Card, CardContent } from '@/components/ui/card';
import { 
  Server, 
  Smartphone, 
  Shield, 
  Clock, 
  Music, 
  MousePointer 
} from 'lucide-react';

const features = [
  {
    icon: Server,
    title: "Server kami yang streaming, bukan perangkat kamu",
    description: "Komputer kamu bisa dimatikan, HP bisa dicharge. Live streaming tetap jalan 24/7 dari server kami yang powerful."
  },
  {
    icon: Smartphone,
    title: "Kontrol dari HP/laptop, kapan saja dimana saja",
    description: "Cukup buka browser, login dashboard. Mau di warung kopi atau di rumah, kamu bisa monitor dan kontrol live streaming."
  },
  {
    icon: Shield,
    title: "Dijamin gak pernah mati mendadak",
    description: "Server kami monitoring 24/7 dengan backup otomatis. Uptime 99.9% - live streaming kamu aman dan stabil terus."
  },
  {
    icon: Clock,
    title: "Jadwal otomatis - set sekali, jalan terus",
    description: "Mau live jam 8 pagi sampai 10 malam setiap hari? Tinggal set jadwal sekali, sistem otomatis handle semuanya."
  },
  {
    icon: Music,
    title: "Perfect untuk ASMR, musik, suara alam",
    description: "Upload 1 video musik relaksasi atau ASMR, akan loop terus selama live aktif. Cocok banget untuk konten ambient."
  },
  {
    icon: MousePointer,
    title: "Gampang banget - upload, set, live!",
    description: "Gak perlu jadi programmer. Upload video, atur jadwal, klik start. 3 langkah doang, live streaming 24/7 siap jalan."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kenapa Harus StreamHib? Karena Kita yang Repot, Kamu Tinggal Santai
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Udah capek komputer overheat tiap live streaming? HP battery drop gara-gara streaming berjam-jam? 
            <span className="font-semibold text-gray-900 dark:text-white"> StreamHib hadir buat ngatasin semua masalah itu.</span>
            {' '}Kamu fokus bikin konten, kami yang jaga live streaming kamu jalan terus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Demo Section */}
        <div className="mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cara Pakai StreamHib - Gampang Banget!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cuma 3 langkah, live streaming 24/7 kamu langsung jalan
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Upload Video</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Upload video yang mau di-loop untuk live streaming kamu
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Set Jadwal</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Tentukan jam berapa live dimulai dan berapa lama durasinya
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Santai Aja</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Server kami yang handle, live streaming jalan 24/7 tanpa gangguan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
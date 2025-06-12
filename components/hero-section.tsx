"use client";

import { Button } from '@/components/ui/button';
import { Play, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-blue-950/20 dark:via-background dark:to-red-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                <CheckCircle className="w-4 h-4 mr-2" />
                Sudah Dipercaya 100+ Content Creator
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-600 dark:text-blue-400">Live Streaming 24/7</span>{' '}
                <span className="text-gray-900 dark:text-white">Tanpa Komputer</span>{' '}
                <span className="text-red-500">— Server Kami yang Handle!</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Bosan komputer overheat? HP cepat rusak? Internet sering putus? 
                <span className="font-semibold text-gray-900 dark:text-white"> StreamHib solusinya!</span> 
                {' '}Upload video sekali, live streaming jalan terus dari server kami. Bahkan saat kamu tidur.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Coba Gratis 7 Hari
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                🚀 Mulai Live Hari Ini
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-red-400 border-2 border-white dark:border-gray-800"></div>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">100+ Channel Aktif</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-4 h-4 text-yellow-400">⭐</div>
                ))}
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-blue-500 to-red-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
                  </div>
                  <div className="text-white font-medium">StreamHib Dashboard</div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Status Live Streaming</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">LIVE 24/7</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Durasi Live</span>
                    <span className="font-mono text-sm font-medium text-green-600">168:45:12</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Total Viewers</span>
                    <span className="font-mono text-sm font-medium text-blue-600">12,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Server Status</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded font-medium">99.9% Uptime</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-medium">
                    ▶ Start Live
                  </Button>
                  <Button size="sm" variant="outline" className="font-medium">
                    📅 Set Jadwal
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce">
              ✅ 24/7 Online
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              🌐 Web-Based
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
}
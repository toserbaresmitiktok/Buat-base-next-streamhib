"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/streamhiblandscapetrnsprant.png"
              alt="StreamHib Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Fitur
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Harga
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimoni
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 font-semibold">
              🚀 Mulai Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#features" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Fitur
              </a>
              <a href="#pricing" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Harga
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Testimoni
              </a>
              <a href="#faq" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </a>
              <div className="flex items-center space-x-2 px-3 py-2">
                <LanguageSwitcher />
              </div>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold">
                  🚀 Mulai Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apa harus install software atau aplikasi?",
    answer: "Gak perlu install apa-apa! StreamHib berbasis web, bisa dibuka dari HP atau laptop. Cukup buka browser, login ke dashboard, dan kamu udah bisa kontrol live streaming dari mana aja."
  },
  {
    question: "Gimana kalau internet rumah gue mati?",
    answer: "Santai aja! Live streaming jalan di server kami, bukan di perangkat kamu. Jadi meskipun internet kamu mati, live streaming tetap jalan normal. Kamu cuma butuh internet buat akses dashboard kontrol."
  },
  {
    question: "Bisa set jadwal live otomatis gak?",
    answer: "Bisa banget! Tinggal atur jamnya di dashboard, terus sistem kami otomatis mulai/stop live sesuai jadwal. Kamu bisa set jadwal harian, mingguan, atau custom sesuai kebutuhan."
  },
  {
    question: "Video bisa di-loop terus gak?",
    answer: "Bisa dong! Kamu upload 1 video, bakal terus diputar selama live aktif. Perfect banget buat konten kayak musik relaksasi, ASMR, suara hujan, atau video ambient lainnya."
  },
  {
    question: "Kualitas streaming gimana? Bisa HD?",
    answer: "Server kami support streaming sampai 1080p 60fps dengan bitrate stabil. Kualitas bakal otomatis menyesuaikan dengan koneksi viewer buat pengalaman terbaik."
  },
  {
    question: "Ada batasan durasi live gak?",
    answer: "Gak ada batasan! Kamu bisa live 24/7 selama langganan masih aktif. Server kami didesain khusus buat live streaming jangka panjang tanpa gangguan."
  },
  {
    question: "Cara upload video gimana?",
    answer: "Gampang banget! Login ke dashboard, klik 'Upload Video', pilih file dari perangkat kamu, tunggu proses upload selesai, terus video siap buat di-streaming."
  },
  {
    question: "Bisa streaming ke beberapa platform sekaligus?",
    answer: "Bisa! Kamu bisa streaming simultan ke YouTube, Facebook, Twitch, dan platform lainnya dari satu dashboard. Fitur ini tersedia di paket Pro dan Business."
  },
  {
    question: "Kalau ada masalah, support-nya gimana?",
    answer: "Kami sediain support email untuk semua paket, priority support buat paket Pro, dan 24/7 phone support buat paket Business. Tim support kami siap bantu kapan aja."
  },
  {
    question: "Data dan video gue aman gak?",
    answer: "Pasti aman! Kami pakai enkripsi SSL, backup otomatis, dan server yang memenuhi standar keamanan internasional. Video dan data kamu terlindungi dengan baik."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pertanyaan yang Sering Ditanyain
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Masih bingung atau ragu? Ini jawaban buat pertanyaan yang paling sering ditanyain sama calon user StreamHib
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/20 dark:to-red-950/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Masih Ada yang Mau Ditanyain?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Tim support kami siap bantu kamu 24/7. Jangan ragu buat tanya apa aja!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@streamhib.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                📧 Email Support
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
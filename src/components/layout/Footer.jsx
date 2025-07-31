/**
 * Komponen Footer dengan informasi kontak dan social media
 */
import React from 'react';
import { MapPin, Phone, Mail, Instagram, GraduationCap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informasi Sekolah */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary-600 to-cyan-500 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SMK TI Pelita Nusantara</h3>
                <p className="text-dark-300">Kediri</p>
              </div>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed">
              Sekolah Menengah Kejuruan Teknologi Informasi yang berfokus pada 
              pengembangan kemampuan siswa di bidang teknologi dan matematika.
            </p>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-dark-300">
                    Jl. Raya Kediri No. 123<br />
                    Kediri, Jawa Timur 64100
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <p className="text-sm text-dark-300">6281252257925</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <p className="text-sm text-dark-300">info@smktipelitanusantara.sch.id</p>
              </div>
            </div>
          </div>

          {/* Navigasi Cepat */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigasi Cepat</h4>
            <div className="space-y-2">
              <a href="#materi" className="block text-sm text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Materi Algoritma
              </a>
              <a href="#contoh-soal" className="block text-sm text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Contoh Soal
              </a>
              <a href="#kalkulator" className="block text-sm text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Kalkulator
              </a>
              <a href="#kuiz" className="block text-sm text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Kuiz Interaktif
              </a>
            </div>
          </div>

          {/* Social Media dan Maps */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/yilzi_dominan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg hover:scale-110 transition-transform duration-200"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-4">
              <h5 className="text-sm font-medium text-white mb-2">Lokasi Sekolah</h5>
              <div className="bg-dark-700 rounded-lg p-4 text-center">
                <MapPin className="h-8 w-8 text-primary-400 mx-auto mb-2" />
                <p className="text-xs text-dark-300">
                  Klik untuk melihat lokasi di Google Maps
                </p>
                <a
                  href="https://maps.google.com/search/SMK+TI+Pelita+Nusantara+Kediri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  Buka di Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-dark-400">
              © {currentYear} SMK TI Pelita Nusantara Kediri. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-dark-400">
              <a href="#privacy" className="hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
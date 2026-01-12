import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black border-t border-gray-100 font-healthset">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* 1. 로고 및 메인 브랜딩 (5개 컬럼) */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <img 
                  src="/favicon.ico" 
                  alt="CIE 로고" 
                  className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <span className="text-xl font-black tracking-tighter uppercase">
                  CIE <span className="text-blue-600">Lab</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm mb-8">
              Create Intelligence Engineering은 강원대학교 제어계측공학전공 학술 동아리로, 
              시스템 공학과 지능형 제어 기술을 탐구하여 미래의 엔지니어링 솔루션을 구축합니다.
            </p>
          </div>

          {/* 2. 빠른 링크 (3개 컬럼) */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em] mb-6">Archive</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li><Link href="/Projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
              <li><Link href="/Members/Students" className="hover:text-blue-600 transition-colors">Members</Link></li>
              <li><Link href="/activity" className="hover:text-blue-600 transition-colors">Activity Gallery</Link></li>
            </ul>
          </div>

          {/* 3. 연락처 및 정보 (4개 컬럼) */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em] mb-6">Connect</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4">
                <span className="text-blue-600 font-black text-[10px] uppercase pt-1">Location</span>
                <span className="text-gray-600 font-light leading-snug">강원대학교 삼척캠퍼스<br />5공학관 220-1호 CIE Lab</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-600 font-black text-[10px] uppercase pt-1">Contact</span>
                <a href="mailto:cieteam2025@gmail.com" className="text-gray-600 font-light hover:text-black transition-colors underline underline-offset-4 decoration-gray-200">
                  cieteam2025@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-4 pt-2">
                <a 
                  href="https://www.instagram.com/knu_cie/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-50 text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all"
                >
                  Instagram DM
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="https://dpwlsh2o.life/" className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">
            © {currentYear} YeJin Heo
          </Link>
          <div className="flex gap-6">
            <span className="text-[10px] font-black text-gray-200 tracking-[0.2em] uppercase">Creative</span>
            <span className="text-[10px] font-black text-gray-200 tracking-[0.2em] uppercase">Intelligent</span>
            <span className="text-[10px] font-black text-gray-200 tracking-[0.2em] uppercase">Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
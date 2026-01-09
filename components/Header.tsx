'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  
  // ✅ 해결책: pathname이 null일 경우 빈 문자열('')을 기본값으로 할당합니다.
  // 이렇게 하면 이후의 모든 코드에서 pathname은 항상 'string' 타입이 됩니다.
  const rawPathname = usePathname();
  const pathname = rawPathname || ''; 

  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMemberOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 경로 활성화 체크 (이제 pathname이 절대 null이 아니므로 에러가 나지 않습니다)
  const isActivePath = (path: string) => pathname === path;
  const isMemberActive = (pathname as string).startsWith('/Members');

  return (
    <header className="bg-linear-to-r from-black to-gray-900 shadow-xl sticky top-0 z-50 border-b border-gray-700 font-healthset">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex justify-between items-center h-16">
          {/* 로고 영역 */}
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
              CIE <span className="text-blue-500 italic">Lab</span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActivePath('/') ? 'bg-gray-800' : 'text-gray-400 hover:text-white'}`}
            >
              홈
            </Link>

            {/* 멤버 드롭다운 */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMemberOpen(!isMemberOpen)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all ${isMemberActive ? 'bg-gray-800' : 'text-gray-400 hover:text-white'}`}
              >
                멤버
                <svg className={`ml-1 w-3 h-3 transition-transform ${isMemberOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMemberOpen && (
                <div className="absolute left-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-2xl py-2 shadow-2xl">
                  <Link href="/Members/Professors" onClick={() => setIsMemberOpen(false)} className="block px-4 py-2 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800">지도 교수</Link>
                  <Link href="/Members/Alumni" onClick={() => setIsMemberOpen(false)} className="block px-4 py-2 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800">졸업생</Link>
                  <Link href="/Members/Students" onClick={() => setIsMemberOpen(false)} className="block px-4 py-2 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800">재학생</Link>
                </div>
              )}
            </div>

            <Link 
              href="/activity" 
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActivePath('/activity') ? 'bg-gray-800' : 'text-gray-400 hover:text-white'}`}
            >
              활동 갤러리
            </Link>
            <Link 
              href="/Projects" 
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActivePath('/Projects') ? 'bg-gray-800' : 'text-gray-400 hover:text-white'}`}
            >
              프로젝트
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
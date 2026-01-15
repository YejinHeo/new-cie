'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일 메뉴 상태
  const [isMemberOpen, setIsMemberOpen] = useState(false); // 멤버 드롭다운 상태
  
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

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActivePath = (path: string) => pathname === path;
  const isMemberActive = pathname.startsWith('/Members');

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

          {/* 데스크톱 네비게이션 (md 이상에서만 보임) */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActivePath('/') ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              홈
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsMemberOpen(!isMemberOpen)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all ${isMemberActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                멤버
                <svg className={`ml-1 w-3 h-3 transition-transform ${isMemberOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMemberOpen && (
                <div className="absolute left-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-2xl py-2 shadow-2xl">
                  <Link href="/Members/Professors" className="block px-4 py-2 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800">지도 교수</Link>
                  <Link href="/Members/Alumni" className="block px-4 py-2 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800">졸업생</Link>
                  <Link href="/Members/Students" className="block px-4 py-2 text-xs font-bold text-gray-400 hover:text-white hover:bg-gray-800">재학생</Link>
                </div>
              )}
            </div>
            <Link href="/Clubroom" className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActivePath('/activity') ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>동아리방</Link>
            <Link href="/activity" className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActivePath('/activity') ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>활동 갤러리</Link>
            <Link href="/Projects" className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActivePath('/Projects') ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}>프로젝트</Link>
          </nav>

          {/* 모바일 햄버거 버튼 (md 미만에서 보임) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 리스트 (애니메이션 생략, 필요 시 추가) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-700 px-4 pt-2 pb-6 space-y-1">
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-bold ${isActivePath('/') ? 'bg-gray-800 text-white' : 'text-gray-400'}`}>
            홈
          </Link>
          
          {/* 모바일 멤버 섹션 (아코디언 형태) */}
          <div className="space-y-1">
            <div className={`px-3 py-2 text-base font-bold ${isMemberActive ? 'text-blue-500' : 'text-gray-400'}`}>
              멤버
            </div>
            <div className="pl-6 space-y-1">
              <Link href="/Members/Professors" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">지도 교수</Link>
              <Link href="/Members/Alumni" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">졸업생</Link>
              <Link href="/Members/Students" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">재학생</Link>
            </div>
          </div>
          <Link href="/Clubroom" className={`block px-3 py-2 rounded-md text-base font-bold ${isActivePath('/activity') ? 'bg-gray-800 text-white' : 'text-gray-400'}`}>
            동아리방
          </Link>
          <Link href="/activity" className={`block px-3 py-2 rounded-md text-base font-bold ${isActivePath('/activity') ? 'bg-gray-800 text-white' : 'text-gray-400'}`}>
            활동 갤러리
          </Link>
          <Link href="/Projects" className={`block px-3 py-2 rounded-md text-base font-bold ${isActivePath('/Projects') ? 'bg-gray-800 text-white' : 'text-gray-400'}`}>
            프로젝트
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
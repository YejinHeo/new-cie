import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-healthset selection:bg-blue-100">
    
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase animate-fade-in">
            Established 2025
          </div>

          {/* 간격이 완벽하게 교정된 CIE 타이틀 */}
          <div className="group relative mb-16 cursor-default select-none h-50 md:h-75 flex items-center justify-center">
            <h1 className="relative flex flex-col items-center text-6xl md:text-8xl font-black text-black tracking-tighter uppercase leading-none transition-all duration-1000 group-hover:flex-row group-hover:gap-12 md:group-hover:gap-20">
              
              {/* Creative -> C: 아래로 내려오며 왼쪽 안착 */}
              <div className="flex items-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:static">
                <span className="group-hover:text-blue-600 transition-colors duration-500">C</span>
                <span className="max-w-[10ch] opacity-100 blur-0 transition-all duration-700 ease-in-out group-hover:max-w-0 group-hover:opacity-0 group-hover:blur-sm overflow-hidden whitespace-nowrap">
                  reative
                </span>
              </div>

              {/* Intelligent -> I: 제자리 고정 */}
              <div className="flex items-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] z-10">
                <span className="text-blue-600">I</span>
                <span className="max-w-[12ch] opacity-100 blur-0 transition-all duration-700 ease-in-out group-hover:max-w-0 group-hover:opacity-0 group-hover:blur-sm overflow-hidden whitespace-nowrap">
                  ntelligent
                </span>
              </div>

              {/* Engineering -> E: 위로 올라오며 오른쪽 안착 */}
              <div className="flex items-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:static">
                <span className="group-hover:text-blue-600 transition-colors duration-500">E</span>
                <span className="max-w-[11ch] opacity-100 blur-0 transition-all duration-700 ease-in-out group-hover:max-w-0 group-hover:opacity-0 group-hover:blur-sm overflow-hidden whitespace-nowrap">
                  ngineering
                </span>
              </div>
            </h1>
          </div>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
            단순한 구현을 넘어 시스템의 본질을 탐구합니다. <br className="hidden md:block" />
            지능형 시스템과 공학적 설계를 통해 미래의 기술적 난제를 해결합니다.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/Projects" className="px-10 py-4 bg-black text-white text-xs font-black rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 tracking-widest uppercase">
              Explore Archive
            </Link>
            <Link href="/Members/Students" className="px-10 py-4 bg-white text-black border border-gray-200 text-xs font-black rounded-full hover:border-black transition-all tracking-widest uppercase">
              Our Members
            </Link>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
      </section>


{/* 2. 핵심 가치 섹션 (About) - 이미지 카드 레이아웃 버전 */}
<section className="py-32 bg-zinc-950 text-white rounded-[3rem] md:rounded-[6rem] mx-4 relative overflow-hidden">
  {/* 배경 디테일: 공학적 그리드 패턴 */}
  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right,#80808012 1px,transparent 1px),linear-gradient(to bottom,#80808012 1px,transparent 1px)', backgroundSize: '40px 40px' }}></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* 헤더 부분 */}
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">CIE Activities</span>
      </div>
      <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
        매학기 진행되는, <br /> <span className="text-blue-500">다양한 연구와 도전들</span>
      </h3>
      <p className="mt-4 text-zinc-400 font-light max-w-xl">
        CIE에서는 매 학기 정기적인 세미나와 프로젝트를 통해 이론을 실무로 구현하며, 
        함께 성장하는 즐거운 문화를 만들어갑니다.
      </p>
    </div>

    {/* 이미지 카드 그리드 (사진 스타일 반영) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: '정기 세미나', desc: '진행상황 공유 및 프로젝트 피드백 시간', img: '/seminar.jpg' },
        { title: '청소년 행사 참가', desc: '청소년의 진로 활동 도움', img: '/event.jpg' },
        { title: '학술 경진대회', desc: '전국 규모의 경진대회 참여를 통한 실전 감각 배양 및 수상 성과 창출', img: '/study2.jpg' },
        { title: '기술 스터디', desc: 'ROS2, OpenCV, RTOS 등 핵심 기술 스택을 함께 탐구하는 소그룹 활동', img: '/study.jpg' },
        { title: '이벤트', desc: '동아리 구성원들과 함께 MT 및 워크샵 참가', img: '/event1.jpg' },
        { title: '네트워킹 데이', desc: '선후배 간의 진로 상담 및 현직자 멘토링을 통한 성장의 장', img: '/networking.jpg' },
      ].map((activity, idx) => (
        <div 
          key={idx} 
          className="group relative h-64 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 cursor-pointer"
        >
          {/* 이미지 레이어 */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:blur-sm group-hover:opacity-40"
            style={{ backgroundImage: `url(${activity.img})` }}
          />
          
          {/* 오버레이 (상단 라벨 스타일) */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold text-white transition-opacity duration-300 group-hover:opacity-0">
              {activity.title}
            </span>
          </div>

          {/* 중앙 설명 텍스트 (마우스 오버 시 나타남) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
            <h4 className="text-xl font-bold mb-2 text-white">{activity.title}</h4>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              {activity.desc}
            </p>
          </div>

          {/* 하단 그라데이션 (평상시 텍스트 가독성용) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 5. CTA 섹션 */}
      <section className="py-40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10">
            <span className='text-black'>당신의 호기심을</span> <br /> <span className="text-blue-600">공학으로 실현하세요.</span>
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeasLeFl2vTy_PAJ_VAMoGgCb-HF289dsrc5diDGrmW_y3meQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-xs font-black rounded-full hover:bg-blue-600 transition-all shadow-2xl tracking-widest uppercase"
          >
            Join us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-healthset selection:bg-blue-100">
    
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase animate-fade-in">
            Established 2026
          </div>

          {/* 🔥 간격이 완벽하게 교정된 CIE 타이틀 */}
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

{/* 2. 핵심 가치 섹션 (About) - 재설계 버전 */}
      <section className="py-32 bg-zinc-950 text-white rounded-[3rem] md:rounded-[6rem] mx-4 relative overflow-hidden">
        {/* 배경 디테일: 공학적 그리드 패턴 */}
        <div className="absolute inset-0 opacity-10 background-image: linear-gradient(to right,#80808012 1px,transparent 1px),linear-gradient(to bottom,#80808012 1px,transparent 1px);"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* 왼쪽: 미션 & 스토리 (5개 컬럼 차지) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">CIE Mission</span>
              </div>

              <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-10">
                Think <br />
                Deep, Build <br />
                <span className="text-blue-500">Smarter.</span>
              </h3>

              <div className="space-y-8 border-l-2 border-zinc-800 pl-8 ml-1">
                <div className="relative">
                  <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500"></div>
                  <h4 className="text-xl font-bold mb-3 text-white">이론과 실무의 가교</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    강의실에서 배운 수식을 실제 움직이는 하드웨어로 구현합니다.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-9.25 top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700"></div>
                  <h4 className="text-xl font-bold mb-3 text-white">지능형 시스템 설계</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    임베디드 제어와 AI 알고리즘을 결합하여, 스스로 판단하고 최적화하는 스마트 시스템을 구축합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 오른쪽: 데이터 대시보드 (7개 컬럼 차지) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 lg:pt-0">
              {/* 메인 통계 카드 (가로 2칸 차지) */}
              <div className="md:col-span-2 p-10 bg-linear-to-br from-blue-600 to-blue-800 rounded-[3rem] shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="text-[11px] font-black text-blue-100 uppercase tracking-[0.3em] mb-4">Core Technology</div>
                  <div className="text-3xl font-bold mb-6 text-white leading-tight">
                    임베디드 제어부터 <br />지능형 시스템까지
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['MCU', 'ROS2', 'RTOS', 'OpenCV', 'AI'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-bold text-white border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute -right-10 -bottom-10 text-[12rem] font-black text-white/5 select-none transition-transform duration-700 group-hover:-translate-y-5">CIE</div>
              </div>

              {/* 개별 수치 카드 */}
              {[
                { label: 'Awards & Achievements', value: '5', desc: '학술 경진대회 누적 수상 건수' },
                { label: 'Active Members', value: '10', desc: '열정적인 연구 인력' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] hover:border-zinc-600 transition-colors">
                  <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-4">{item.label}</div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">{item.value}</div>
                  <div className="text-xs text-zinc-400 font-medium">{item.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. 연구 분야 (Technology) */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl text-black font-bold tracking-tighter uppercase mb-4">Research Area</h2>
            <p className="text-gray-500">우리가 탐구하고 도전하는 핵심 기술 분야입니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-12 bg-gray-50 rounded-[3rem] hover:bg-blue-600 transition-all duration-500">
              <div className="w-12 h-12 bg-white rounded-2xl mb-8 flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-2xl text-black font-bold mb-4 group-hover:text-white transition-colors">Embedded Systems</h3>
              <p className="text-gray-500 group-hover:text-blue-100 font-light leading-relaxed">
                마이크로컨트롤러와 센서 네트워크를 활용하여 실세계와 상호작용하는 물리적 지능을 설계합니다.
              </p>
            </div>
            
            <div className="group p-12 bg-gray-50 rounded-[3rem] hover:bg-blue-600 transition-all duration-500">
              <div className="w-12 h-12 bg-white rounded-2xl mb-8 flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-white transition-colors">Intelligent Control</h3>
              <p className="text-gray-500 group-hover:text-blue-100 font-light leading-relaxed">
                복잡한 동적 시스템을 최적으로 제어하기 위한 알고리즘과 인공지능 기법을 연구합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 활동 (Activity) */}
      <section className="py-40 bg-gray-50 rounded-[3rem] md:rounded-[5rem] mx-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase mb-6">Our Journey</h2>
              <h3 className="text-4xl font-bold text-black tracking-tighter">함께 성장하는 <br /> 즐거운 몰입</h3>
            </div>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed text-sm">
              우리는 단순히 공부만 하지 않습니다. 기술을 매개로 소통하고, 협업하며, 
              함께 성취하는 과정에서 진정한 가치를 찾습니다.
            </p>
          </div>
          
          <div className="grid text-black grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Academic Research', desc: '지속적인 성장을 위한 주간 정기 세미나' },
              { title: 'Project Build', desc: '아이디어를 실질적인 프로토타입으로 구현하는 하드웨어 빌딩' },
              { title: 'Global Network', desc: '교외 해커톤 및 컨퍼런스 참여를 통한 기술적 시야 확장' }
            ].map((act, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-4">{act.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{act.desc}</p>
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
            href="https://www.instagram.com/cie_knu/"
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
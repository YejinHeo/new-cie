import React from 'react';

const ClubRoomPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blue-100">

      <main className="grow">
        {/* 히어로 섹션: 독자적인 타이포그래피 배치 */}
        <section className="pt-32 pb-20 px-6 border-b border-gray-50">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-6 font-healthset">
              CIE <span className="text-blue-600 italic">STUDIO</span>
            </h1>
            <p className="text-xl text-gray-500 font-healthset max-w-2xl leading-relaxed">
              기술적 한계를 넘어서는 우리만의 실험실. <br />
              강원대학교 CIE의 모든 프로젝트는 이곳에서 시작됩니다.
            </p>
          </div>
        </section>

        {/* 공간 가이드: 커스텀 그리드 시스템 */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* 위치 정보 */}
            <div className="group">
              <div className="mb-6 h-1 w-12 bg-gray-200 group-hover:bg-blue-600 transition-all"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-healthset uppercase tracking-widest">Location</h3>
              <p className="text-gray-600 font-healthset leading-relaxed">
                강원대학교 삼척캠퍼스 <br />
                5공학관 220-1호
              </p>
            </div>

            {/* 시간 정보 */}
            <div className="group">
              <div className="mb-6 h-1 w-12 bg-gray-200 group-hover:bg-blue-600 transition-all"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-healthset uppercase tracking-widest">Available</h3>
              <p className="text-gray-600 font-healthset leading-relaxed">
                24 / 7 ALWAYS OPEN <br />
                <span className="text-xs text-gray-400 mt-2 block font-sans">* CIE Members Only</span>
              </p>
            </div>

            {/* 시설 정보 */}
            <div className="group">
              <div className="mb-6 h-1 w-12 bg-gray-200 group-hover:bg-blue-600 transition-all"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-healthset uppercase tracking-widest">Hardware</h3>
              <p className="text-gray-600 font-healthset leading-relaxed">
                Workstation, 3D Printer, <br />
                Embedded Toolkits
              </p>
            </div>
          </div>
        </section>

        {/* 규칙 섹션: 리스트형 인터페이스 */}
        <section className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-12">Laboratory Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 font-healthset">
              {[
                "개인 스터디 및 팀 프로젝트 자율 운영",
                "공용 기자재 사용 후 원위치 및 전원 확인",
                "개인 컵 사용 및 뒷정리 철저 (간식 반입 가능)",
                "외부인 동반 입장 시 사전 승인 요망"
              ].map((rule, i) => (
                <div key={i} className="flex gap-4 border-b border-gray-100 pb-6">
                  <span className="text-gray-300 font-mono">0{i + 1}</span>
                  <p className="text-gray-700">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 갤러리 준비 섹션 */}
        <section className="py-40 px-6 text-center">
          <div className="animate-pulse mb-8 inline-block px-4 py-1 rounded-full border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase">
            Coming Soon
          </div>
          <h2 className="text-3xl font-bold text-gray-900 font-healthset">공간 아카이브 준비 중</h2>
          <p className="text-gray-400 mt-4 font-healthset">새로운 장비 도입과 리모델링 사진을 정리하고 있습니다.</p>
        </section>
      </main>
    </div>
  );
};

export default ClubRoomPage;
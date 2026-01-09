import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// ✅ 캐시 방지 및 실시간 반영 설정 (Next.js 15 필수)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Project {
  slug: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ year?: string }>;
}) {
  // 1. URL 파라미터 수신
  const resolvedParams = await searchParams;
  const selectedYear = resolvedParams.year ? String(resolvedParams.year).trim() : 'all';

  // 2. 데이터 로드 (Projects 폴더 내 마크다운 파일)
  const projectsDir = path.join(process.cwd(), 'Projects');
  let allProjects: Project[] = [];

  if (fs.existsSync(projectsDir)) {
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.md'));
    allProjects = files.map(file => {
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      return {
        slug: file.replace('.md', ''),
        title: data.title || '제목 없음',
        year: data.year ? String(data.year).trim() : '',
        description: data.description || '',
        technologies: data.technologies || [],
        imageUrl: data.imageUrl,
        liveUrl: data.liveUrl,
      } as Project;
    });
  }

  // 3. 필터링 로직
  const filteredProjects = selectedYear === 'all'
    ? allProjects
    : allProjects.filter(p => p.year === selectedYear);

  // 4. 연도 목록 생성 (내림차순 정렬)
  const availableYears = Array.from(new Set(allProjects.map(p => p.year)))
    .filter(y => y !== '')
    .sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-screen bg-white font-healthset selection:bg-blue-100">
      
      {/* 헤더 섹션 */}
      <header className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase">
          Projects
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed ">
          아이디어를 코드로, 상상을 현실로. <br />
          CIE 멤버들이 쌓아온 연구와 개발의 기록입니다.
        </p>
      </header>

      {/* 필터 내비게이션 (대문자 /Projects 경로 반영) */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 px-6">
          <Link
            href="/Projects?year=all"
            className={`px-7 py-2 rounded-full text-xs font-bold transition-all border ${
              selectedYear === 'all' 
              ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
              : 'bg-white text-gray-400 border-gray-200 hover:border-gray-400 hover:text-gray-600'
            }`}
          >
            ALL
          </Link>
          {availableYears.map(year => (
            <Link
              key={year}
              href={`/Projects?year=${year}`}
              className={`px-7 py-2 rounded-full text-xs font-bold transition-all border ${
                selectedYear === year 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : 'bg-white text-gray-400 border-gray-200 hover:border-gray-400 hover:text-gray-600'
              }`}
            >
              {year}
            </Link>
          ))}
        </div>
      </nav>

      {/* 프로젝트 카드 루프 */}
      <main className="max-w-7xl mx-auto py-24 px-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-40 border-2 border-dashed border-gray-100 rounded-[3rem]">
            <p className="text-gray-400 font-light text-lg">해당 연도의 프로젝트가 아직 등록되지 않았습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredProjects.map((project) => (
              /* ✅ 카드 전체를 상세 페이지로 이동하는 Link로 감쌈 */
              <Link 
                key={project.slug} 
                href={`/Projects/${project.slug}`} 
                className="group flex flex-col cursor-pointer"
              >
                {/* 이미지 영역: 호버 시 확대 및 그림자 효과 */}
                <div className="aspect-16/10 mb-8 overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-50 shadow-sm transition-all duration-700 group-hover:shadow-[0_20px_60px_rgba(55,131,225,0.18)]">
                  <img
                    src={project.imageUrl || '/favicon.ico'}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    alt={project.title}
                  />
                </div>

                {/* 텍스트 영역: 호버 시 살짝 위로 이동 */}
                <div className="flex flex-col transform transition-transform duration-500 group-hover:-translate-y-2 px-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase bg-blue-50/50 px-2.5 py-1 rounded-lg">
                      {project.year}
                    </span>
                    <span className="w-1.5 h-px bg-gray-300"></span>
                    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                      {project.technologies[0]}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[15px] line-clamp-2 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center text-[11px] font-black tracking-widest text-gray-900 group-hover:text-blue-600 transition-all uppercase">
                    <span className="border-b-2 border-gray-900 group-hover:border-blue-600 pb-1">
                      Read More
                    </span>
                    <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
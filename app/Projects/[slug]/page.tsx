import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectsDir = path.join(process.cwd(), 'Projects');
  const filePath = path.join(projectsDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return (
      <div className="py-40 text-center font-healthset text-black font-bold">
        파일을 찾을 수 없습니다.
      </div>
    );
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="min-h-screen bg-white font-healthset pb-40 text-black">
      {/* 상단바: 텍스트를 검정색으로 강조 */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 h-16 flex items-center px-6">
        <div className="max-w-4xl mx-auto w-full">
          <Link href="/Projects" className="text-xs font-black text-black hover:text-blue-600 transition-all tracking-widest">
            ← BACK TO ARCHIVE
          </Link>
        </div>
      </nav>

      <header className="pt-32 px-6 max-w-4xl mx-auto border-b-2 border-black/5">
        <div className="text-blue-600 text-[11px] font-black tracking-[0.2em] uppercase mb-4">
          CIE Archive {data.year}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8 tracking-tighter">
          {data.title}
        </h1>

      </header>

      <main className="max-w-4xl mx-auto px-6 pt-16">
        {/* 요약 정보 박스: 텍스트 검정색 수정 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 bg-gray-50 p-10 rounded-4xl border border-gray-100">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Contributors</p>
            <p className="font-bold text-black text-lg">{data.members?.join(', ')}</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Technologies</p>
            <p className="font-bold text-black text-lg">{data.technologies?.join(', ')}</p>
          </div>
        </div>

        {/* ✅ 마크다운 본문 검정색 강화 스타일링 */}
        <article 
            className="prose prose-lg max-w-none 
            prose-headings:text-black prose-headings:font-black
            prose-h2:text-3xl prose-h2:mt-24 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-black/5
            prose-p:text-black prose-p:leading-[1.8] prose-p:mb-8
            prose-ul:list-disc prose-ul:pl-6 prose-li:text-black"
            dangerouslySetInnerHTML={{ __html: contentHtml }} 
  />
      </main>

      {/* 하단 내비게이션 */}
      <footer className="max-w-4xl mx-auto px-6 mt-32 pt-16 border-t border-gray-100 flex justify-center">
        <Link href="/Projects" className="px-10 py-4 bg-black text-white text-xs font-black rounded-full hover:bg-blue-600 transition-all shadow-lg tracking-widest">
          BACK TO LIST
        </Link>
      </footer>
    </div>
  );
}
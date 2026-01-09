import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// ✅ TypeScript 인터페이스 정의 (에러 해결 핵심)
interface AlumniMember {
  name: string;
  now: string;
  nowUrl: string;
  major: string;
  email: string;
}

export default async function AlumniPage() {
  const dataDir = path.join(process.cwd(), 'AlumniData');
  let alumniList: AlumniMember[] = []; // 타입을 명시적으로 지정

  if (fs.existsSync(dataDir)) {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.md'));
    alumniList = files.map((file) => {
      const filePath = path.join(dataDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        name: data.name || '',
        now: data.now || '',
        nowUrl: data.nowUrl || '#',
        major: data.major || '',
        email: data.email || '',
      } as AlumniMember;
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-healthset selection:bg-blue-100 text-black">
      <main className="grow pt-32 pb-40 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-24 text-center">
            <h1 className="text-4xl font-black tracking-tighter uppercase mb-4">Alumni</h1>
            <div className="w-12 h-1 bg-gray-900 mx-auto mb-6"></div>
          </header>
          
          <div className="flex flex-col items-center gap-12">
            {alumniList.map((person, index) => (
              <div key={`${person.name}-${index}`} className="w-full max-w-xl group">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    <tr>
                      <td className="w-24 py-1 font-black text-sm tracking-widest uppercase">성명</td>
                      <td className="py-1">
                        <span className="text-xl font-black group-hover:text-blue-600 transition-colors">{person.name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-24 py-1 text-gray-400 font-bold text-[11px] uppercase tracking-widest leading-none">현재 소속</td>
                      <td className="py-1">
                        <a href={person.nowUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-sm hover:text-blue-600 underline underline-offset-4 decoration-gray-200">
                          {person.now}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-24 py-1 text-gray-400 font-bold text-[11px] uppercase tracking-widest leading-none">전공</td>
                      <td className="py-1 font-medium text-[13px]">{person.major}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="w-24 py-1 pb-6 text-gray-400 font-bold text-[11px] uppercase tracking-widest leading-none">이메일</td>
                      <td className="py-1 pb-6 text-blue-500 font-bold text-[13px]">
                        <a href={`mailto:${person.email}`} className="hover:underline underline-offset-4">{person.email}</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ✅ 실시간 반영 및 캐시 방지
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Member {
  name: string;
  position: string;
  team: string;
  major: string;
  email: string;
}

export default async function StudentsPage() {
  // 재학생 데이터 폴더 경로 (StudentData로 설정)
  const peopleDir = path.join(process.cwd(), 'StudentData');
  
  let peopleData: Member[] = [];
  if (fs.existsSync(peopleDir)) {
    const files = fs.readdirSync(peopleDir).filter(f => f.endsWith('.md'));
    peopleData = files.map((file) => {
      const filePath = path.join(peopleDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(content);

      return {
        name: data.name || '',
        position: data.position || '',
        team: data.team || '',
        major: data.major || '',
        email: data.email || '',
      };
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-blue-100">
      <main className="grow pt-32 pb-40 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 헤더 섹션 */}
          <header className="mb-20 text-center">
            <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
              Current Members
            </h1>
            <div className="w-12 h-1 bg-gray-900 mx-auto mb-6"></div>
          </header>
          
          {/* 리스트 영역: 요청하신 테이블 스타일 적용 */}
          <div className="flex flex-col items-center gap-10">
            {peopleData.length === 0 ? (
              <p className="text-gray-400 py-20">등록된 멤버 정보가 없습니다.</p>
            ) : (
              peopleData.map(({ name, position, team, major, email }, index) => (
                <div 
                  key={`${name}-${index}`} 
                  className="w-full max-w-xl group transition-all duration-300"
                >
                  <table className="w-full border-collapse">
                    <tbody>
                      {/* 성명 및 직책 */}
                      <tr>
                        <td className="w-24 py-1 text-gray-900 font-bold text-sm tracking-widest uppercase">성명</td>
                        <td className="py-1 text-gray-800">
                          <span className="text-lg font-bold mr-3 text-black group-hover:text-blue-600 transition-colors">
                            {name}
                          </span>
                          <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded">
                            {position}
                          </span>
                        </td>
                      </tr>
                      {/* 소속 */}
                      <tr>
                        <td className="w-24 py-1 text-gray-400 font-bold text-[11px] uppercase tracking-wider">소속</td>
                        <td className="py-1 text-gray-700 text-[13px] font-medium">{team}</td>
                      </tr>
                      {/* 전공 */}
                      <tr>
                        <td className="w-24 py-1 text-gray-400 font-bold text-[11px] uppercase tracking-wider">전공</td>
                        <td className="py-1 text-gray-700 text-[13px] font-medium">{major}</td>
                      </tr>
                      {/* 이메일 및 구분선 */}
                      <tr className="border-b border-gray-100">
                        <td className="w-24 py-1 pb-6 text-gray-400 font-bold text-[11px] uppercase tracking-wider">이메일</td>
                        <td className="py-1 pb-6 text-blue-500 text-[13px] font-medium">
                          <a 
                            href={`mailto:${email}`} 
                            className="hover:text-blue-700 hover:underline transition-all underline-offset-4"
                          >
                            {email}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
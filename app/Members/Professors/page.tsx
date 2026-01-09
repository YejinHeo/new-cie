export default function ProfessorsPage() {
  const professors = [
    {
      name: "권보규 교수",
      lab: "첨단AI공학과",
      email: "bkkwon@kangwon.ac.kr",
      bio: "로보틱스 및 자율시스템, 신호처리",
      image: "/professork.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-40 px-6 font-healthset">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-black mb-5 uppercase tracking-tighter text-center">Advisory Professor</h1>
        <div className="w-12 h-1 bg-gray-900 mx-auto mb-6"></div>
        {professors.map((prof, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-16 items-center border-y border-gray-100 py-20">
            <div className="w-50 h80- shrink-0 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={prof.image} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <div className="text-blue-600 font-black text-xs tracking-widest mb-4 uppercase">{prof.lab}</div>
              <h2 className="text-4xl font-bold text-black mb-6">{prof.name}</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">{prof.bio}</p>
              <div className="text-sm font-bold text-black border-b border-black inline-block pb-1">{prof.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
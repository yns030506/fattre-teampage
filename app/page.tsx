import Image from "next/image";

const members = [
  {
    name: "방현우",
    role: "Back-end",
    photo: "/방현우_증명사진.jpeg",
    notion: "https://www.notion.so/34da01badc218035a115e75b0d06b9c6?pvs=21",
    email: "brandon55321@gmail.com",
    phone: "010-5532-8664",
    github: "baaamk",
    githubUrl: "https://github.com/baaamk",
  },
  {
    name: "서예진",
    role: "Front-end",
    photo: "/서예진_증명사진.png",
    notion: "https://www.notion.so/34ca01badc2180aa8552d545478ef1b0?pvs=21",
    email: "noonesyj@naver.com",
    phone: "010-4512-8172",
    github: "Yejin0070",
    githubUrl: "https://github.com/Yejin0070",
  },
  {
    name: "양나슬",
    role: "AI",
    photo: "/양나슬_증명사진.jpeg",
    notion: "https://www.notion.so/34ca01badc2180cc845afa1ec378efc9?pvs=21",
    email: "yns030506@uos.ac.kr",
    phone: "010-4557-3933",
    github: "yns030506",
    githubUrl: "https://github.com/yns030506",
  },
];

const goals = [
  {
    number: "01",
    title: "실사용 유치 & 수익화",
    desc: "데모가 아니라 MVP를 빠르게 만들고, 사용자 반응을 확인하며 개선해나갑니다. 비용을 지불할 만큼의 가치를 느끼는 서비스, 그리고 확장 가능한 형태로 발전시키는 것이 저희의 방향입니다.",
  },
  {
    number: "02",
    title: "우수상 인증",
    desc: "Pain Point를 빠르게 찾고, 이를 서비스로 구체화합니다. 문제 정의부터 검증, 개발, 발표까지 하나의 흐름으로 완성하며 실사용·수익화·창업 가능성을 기준으로 방향을 잡겠습니다.",
  },
  {
    number: "03",
    title: "성공",
    desc: "배포, 사용자 확보, 수익화 가능성 확인, 우수상 인증, 그리고 창업 도전까지. 완주에 그치지 않고 성과로 증명하는 팀이 되겠습니다.",
  },
];

const strengths = [
  {
    number: "01",
    title: "중도 이탈 가능성 0%",
    desc: "과정 완주를 절대적인 기준으로 삼아 팀을 구성했습니다. 취업 준비로 소홀해질 사람 없이, 끝까지 프로젝트에만 집중할 수 있는 팀원들로만 뭉쳤습니다.",
  },
  {
    number: "02",
    title: "전원 학업 수료 완료 — 진짜 All-in",
    desc: "팀원 세 명 모두 대학교 학업 수료를 완료했습니다. 졸업을 위한 잔여 학점·과제·시험 등 외부 요소가 전혀 없어, '올인'이 단순한 다짐이 아닌 현실입니다.",
  },
  {
    number: "03",
    title: "전원 부산 상주 — 100% 오프라인 밀착 협업",
    desc: "세 명 모두 부산 센터에서 매일 얼굴을 맞대고 일하는 환경을 구축하고 있습니다. 하루 종일 같은 공간에서 온전히 하나의 목표만 바라보는 팀입니다.",
  },
];

const workspaces = ["GitHub", "Figma", "Discord", "Swagger", "Playstore / Appstore / Web"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-6">
          SW마에스트로 17기
        </p>
        <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-6">Fattre</h1>
        <p className="text-xl italic text-zinc-400 dark:text-zinc-500 mb-5">
          &ldquo;Fatto trenta, facciamo trentatré&rdquo;
        </p>
        <p className="text-base font-semibold text-zinc-600 dark:text-zinc-300 mb-3">
          파트레: 30을 넘어 33까지, 끝장을 보는 3인.
        </p>
        <p className="max-w-sm text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">해냈다(Fatto)</span>와{" "}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">셋(Tre)</span>을 합쳐
          의미를 더했습니다. 중도 하차 없이 비즈니스의 완성 그 이상을 향해 달립니다.
        </p>
        <div className="mt-16 text-zinc-300 dark:text-zinc-700 text-2xl animate-bounce select-none">
          ↓
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-4">
            Team Introduction
          </p>
          <h2 className="text-3xl font-bold mb-16">
            아이디어를 서비스로,
            <br />
            가능성을 결과로
          </h2>

          {/* Goals */}
          <div className="mb-14">
            <h3 className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-8">
              목표 &amp; 방향성
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {goals.map((g) => (
                <div
                  key={g.number}
                  className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700"
                >
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                    {g.number}
                  </span>
                  <h4 className="text-base font-bold mt-2 mb-3">{g.title}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-8">
              강점 &amp; 의지
            </h3>
            <div className="space-y-4">
              {strengths.map((s) => (
                <div
                  key={s.number}
                  className="flex gap-6 bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700"
                >
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 shrink-0 leading-none pt-1">
                    {s.number}
                  </span>
                  <div>
                    <h4 className="font-bold mb-2">{s.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed border-l-2 border-emerald-500 pl-4">
              시작부터 끝까지 흩어지지 않고, 하루 종일 같은 공간에서 온전히 하나의 목표만 바라볼 수
              있는 팀입니다. 저희의 단단한 결속력과 실행력 위에 멘토님의 경험과 방향성이 더해진다면,
              실제 시장에서 의미 있는 성과를 내는 프로덕트를 만들어낼 수 있다고 믿습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Lineup */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-4">
            Team
          </p>
          <h2 className="text-3xl font-bold mb-16">Lineup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {members.map((m) => (
              <div key={m.name} className="flex flex-col items-center text-center gap-5">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-zinc-100 dark:border-zinc-800 shrink-0">
                  <Image
                    src={m.photo}
                    alt={`${m.name} 증명사진`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl font-bold">{m.name}</p>
                  <span className="inline-block mt-2 px-3 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                    {m.role}
                  </span>
                </div>
                <a
                  href={m.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors"
                >
                  Notion 소개 →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl font-bold mb-12">Personal Info</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="text-left py-3 pr-8 font-semibold text-zinc-400 dark:text-zinc-500">이름</th>
                  <th className="text-left py-3 pr-8 font-semibold text-zinc-400 dark:text-zinc-500">Email</th>
                  <th className="text-left py-3 pr-8 font-semibold text-zinc-400 dark:text-zinc-500">Phone</th>
                  <th className="text-left py-3 font-semibold text-zinc-400 dark:text-zinc-500">GitHub</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr
                    key={m.name}
                    className="border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <td className="py-4 pr-8 font-medium">{m.name}</td>
                    <td className="py-4 pr-8 text-zinc-500 dark:text-zinc-400">{m.email}</td>
                    <td className="py-4 pr-8 text-zinc-500 dark:text-zinc-400 tabular-nums">{m.phone}</td>
                    <td className="py-4">
                      <a
                        href={m.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        @{m.github}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Workspace */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-4">
            Links
          </p>
          <h2 className="text-3xl font-bold mb-12">
            Workspace{" "}
            <span className="text-lg font-normal text-zinc-400 dark:text-zinc-500">(Coming soon..)</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="text-left py-3 pr-8 font-semibold text-zinc-400 dark:text-zinc-500">이름</th>
                  <th className="text-left py-3 pr-8 font-semibold text-zinc-400 dark:text-zinc-500">주소</th>
                  <th className="text-left py-3 font-semibold text-zinc-400 dark:text-zinc-500">비고</th>
                </tr>
              </thead>
              <tbody>
                {workspaces.map((name) => (
                  <tr key={name} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-4 pr-8 font-medium">{name}</td>
                    <td className="py-4 pr-8 text-zinc-300 dark:text-zinc-600 italic">Coming soon...</td>
                    <td className="py-4 text-zinc-300 dark:text-zinc-600">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-100 dark:border-zinc-800 text-center text-xs text-zinc-300 dark:text-zinc-600">
        © 2025 Fattre · SW마에스트로 17기
      </footer>
    </div>
  );
}

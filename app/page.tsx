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
      {/* placeholder — sections will be added incrementally */}
    </div>
  );
}

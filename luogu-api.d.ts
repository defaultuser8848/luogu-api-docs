interface DataResponse<T> {
  code: number;
  currentTemplate: string;
  currentData: T;
  currentTitle: string;
  currentTheme: Theme | null;
  currentUser?: UserDetails;
}

interface ProblemListData {
  page: number;
  problems: {
    count: number;
    result: Array<Problem & {
      tags: number[];
      wantsTranslation: boolean;
      difficulty: number;
      totalSubmit: string;
      totalAccepted: string;
    }>;
  };
}

interface ProblemData {
  problem: ProblemDetails;
  discussions: Array<{
    title: string;
    id: number;
  }>;
  bookmarked: boolean;
  vjudgeUsername: string | null;
  recommendations: Problem[];
  lastLanguage: string;
  lastCode: string;
}

interface ContestListData {
  contests: {
    result: Contest[];
    count: number;
  };
}

interface ContestData {
  contest: ContestDetails;
  contestProblems: Array<{
    score: number;
    problem: {
      pid: string;
      title: string;
      type: string;
    };
    submitted: boolean;
  }>;
  accessLevel: number;
  joined: boolean;
}

interface ThemeListData {
  themes: {
    result: ThemeDetails[];
    count: number;
  };
}

interface ThemeData {
  theme: ThemeDetails;
}

interface UnlockModeData {
  mode: string;
}

interface Problem {
  pid: string;
  title: string;
  type: string;
  accepted: boolean;
  submitted: boolean;
}

interface ProblemDetails extends Problem {
  background: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  samples: Array<[string, string]>;
  hint: string;
  provider: User;
  canEdit: boolean;
  limits: {
    time: number[];
    memory: number[];
  };
  showScore: boolean;
  score: number;
  tags: number[];
  wantsTranslation: boolean;
  difficulty: number;
  totalSubmit: number;
  totalAccepted: number;
}

interface Contest {
  ruleType: number;
  visibilityType: number;
  rated: boolean;
  host: User | Team;
  problemCount: number;
  id: number;
  name: string;
  startTime: number;
  endTime: number;
}

interface ContestDetails extends Contest {
  description: string;
}

interface User {
  uid: number;
  name: string;
  badge: string | null;
  isAdmin: boolean;
  color: string;
}

interface UserDetails extends User {
  passed: string;
  rating: {
    user: User;
    rating: number;
  };
  introduce: string;
  blogAddress: string;
  background: string;
  unreadMessageCount: number;
  unreadNoticeCount: number;
  verified: boolean;
}

interface Team {
  id: number;
  name: string;
}

interface Theme {
  id: number;
  header: ThemeHeaderFooter;
  sideNav: ThemeSideNav;
  footer: ThemeHeaderFooter;
}

interface ThemeDetails extends Theme {
  name: string;
  type: number;
  author: User;
  updateTime: number;
  userCount: number;
}

interface ThemeHeaderFooter {
  imagePath: string | null;
  color: Array<[number, number, number, number]>;
  blur: number;
  brightness: number;
  degree: number;
  repeat: number;
  position: [number, number];
  size: [number, number];
  type: number;
}

interface ThemeSideNav {
  logoBackgroundColor: [number, number, number, number];
  color: [number, number, number, number];
  invertColor: boolean;
}

interface SubmitCodeAPIResponse {
  status: number;
  data: {
    rid: number;
  };
}

interface LoginAPIResponse {
  username: string;
  locked: boolean;
  redirectTo: string;
}

interface UnlockAPIResponse {
  redirectTo: string;
}

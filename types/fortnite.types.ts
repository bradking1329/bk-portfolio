interface FortnitePlayerAccount {
  id: string;
  name: string;
}

interface FortnitePlayerBattlePass {
  level: number;
  progress: number;
}

interface FortnitePlayerStats {
  score: number;
  scorePerMin: number;
  scorePerMatch: number;
  wins: number;
  top3?: number;
  top5?: number;
  top6?: number;
  top10?: number;
  top12?: number;
  top25?: number;
  kills: number;
  killsPerMin: number;
  killsPerMatch: number;
  deaths: number;
  kd: number;
  matches: number;
  winRate: number;
  minutesPlayed: number;
  playersOutlived: number;
  lastModified: string;
}

interface FortnitePlayerStatsSection {
  [key: string]: FortnitePlayerStats | null;
  overall: FortnitePlayerStats | null;
  solo: FortnitePlayerStats | null;
  duo: FortnitePlayerStats | null;
  trio: FortnitePlayerStats | null;
  squad: FortnitePlayerStats | null;
  ltm: FortnitePlayerStats | null;
}

export interface FortniteStatsResponse {
  account: FortnitePlayerAccount;
  battlePass: FortnitePlayerBattlePass;
  image: 'string';
  stats: {
    all: FortnitePlayerStatsSection;
    keyboardMouse: FortnitePlayerStatsSection;
    gamepad: FortnitePlayerStatsSection;
    touch: FortnitePlayerStatsSection;
  };
}

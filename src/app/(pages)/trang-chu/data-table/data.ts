// src/components/data-table/data.ts

export type Repository = {
  id: string;
  owner: string;
  name: string;
  full_name: string;
  description?: string | null;
  stars?: number | null;
  forks?: number | null;
  links?: string | null;
  last_updated?: string | null;
  created_at?: string | null;
  languages?: string[] | null;
};

export const mockRepositories: Repository[] = [
  {
    id: "1",
    owner: "dangkhoa2004",
    name: "Road-to-Fullstack",
    full_name: "dangkhoa2004/Road-to-Fullstack",
    description: "A roadmap to become a fullstack developer",
    stars: 100,
    forks: 20,
    links: "https://github.com/dangkhoa2004/Road-to-Fullstack",
    last_updated: "2024-01-15T10:00:00Z",
    created_at: "2023-01-01T08:00:00Z",
    languages: ["JavaScript", "TypeScript"],
  },
  {
    id: "2",
    owner: "dangkhoa2004",
    name: "frontend-cineboo",
    full_name: "dangkhoa2004/frontend-cineboo",
    description: "Frontend for a movie booking app",
    stars: 50,
    forks: 10,
    links: "https://github.com/dangkhoa2004/frontend-cineboo",
    last_updated: "2023-11-20T14:30:00Z",
    created_at: "2023-03-10T12:00:00Z",
    languages: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: "3",
    owner: "huylee47",
    name: "Laravel",
    full_name: "huylee47/Laravel",
    description: "A PHP framework project",
    stars: 200,
    forks: 50,
    links: "https://github.com/huylee47/Laravel",
    last_updated: "2025-05-01T08:00:00Z",
    created_at: "2022-07-01T09:00:00Z",
    languages: ["PHP"],
  },
  {
    id: "4",
    owner: "qtuan17",
    name: "QuanLyBanGiay",
    full_name: "qtuan17/QuanLyBanGiay",
    description: "Shoe store management system",
    stars: 30,
    forks: 5,
    links: "https://github.com/qtuan17/QuanLyBanGiay",
    last_updated: "2024-03-10T16:00:00Z",
    created_at: "2024-01-20T11:00:00Z",
    languages: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "5",
    owner: "dangkhoa2004",
    name: "pos_app",
    full_name: "dangkhoa2004/pos_app",
    description: "Point of Sale application",
    stars: 120,
    forks: 30,
    links: "https://github.com/dangkhoa2004/pos_app",
    last_updated: "2024-06-01T11:00:00Z",
    created_at: "2023-08-01T10:00:00Z",
    languages: ["Python", "Django"],
  },
  {
    id: "6",
    owner: "dangkhoa2004",
    name: "kma-bot",
    full_name: "dangkhoa2004/kma-bot",
    description: "A Telegram bot for KMA",
    stars: 80,
    forks: 15,
    links: "https://github.com/dangkhoa2004/kma-bot",
    last_updated: "2023-09-05T09:00:00Z",
    created_at: "2023-04-15T09:00:00Z",
    languages: ["Node.js", "Telegram Bot API"],
  },
];
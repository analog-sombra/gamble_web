export interface GameResult {
    id: number;
    game_id: number;
    user_id: number;
    game_type: string; // Enum representation in TypeScript
    result: string; // Enum representation in TypeScript
    status: string; // Enum representation in TypeScript
    amount: string; // Optional amount represented as a string
    created_by: number;
    created_at: string; // ISO string for NaiveDateTime
    updated_by?: number | null;
    updated_at?: string | null; // ISO string for NaiveDateTime
    deleted_by?: number | null;
    deleted_at?: string | null; // ISO string for NaiveDateTime
  }
  
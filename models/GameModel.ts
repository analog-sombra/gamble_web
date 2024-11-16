export interface Game {
    id: number;
    uid: string;
    name: string;
    start_time: string; // ISO string for NaiveDateTime
    end_time: string; // ISO string for NaiveDateTime
    max_number?: number | null;
    max_price?: string | null;
    created_by: number;
    created_at: string; // ISO string for NaiveDateTime
    updated_by?: number | null;
    updated_at?: string | null; // ISO string for NaiveDateTime
    deleted_by?: number | null;
    status: string;
    deleted_at?: string | null; // ISO string for NaiveDateTime
  }
  
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'music' | 'karaoke' | 'special' | 'tournament';
}

export interface PoolTournament {
  id: string;
  day: string;
  time: string;
  format: string;
  entryFee: string;
  prize: string;
}

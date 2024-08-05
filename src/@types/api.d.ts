interface Interaction {
  id: number;

  action: string;
  description: string;

  date: Date;
  status: boolean;
}

interface Stats {
  gems: number;
  qubits: number;
  brain: number;
  cashes: number;
  coins: number;
}

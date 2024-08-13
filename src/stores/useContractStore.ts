import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface ContractStoreState {
  runner: string | null;
  hexPlanet: string | null;
  setRunner: (runner: string | null) => void;
  setHexPlanet: (hexPlanet: string) => void;
}

type MyPersist = (
  config: StateCreator<ContractStoreState>,
  options: PersistOptions<ContractStoreState>
) => StateCreator<ContractStoreState>;

export const useContractStore = create<ContractStoreState>(
  (persist as MyPersist)(
    (set) => ({
      runner: null,
      hexPlanet: null,
      setRunner: (runner: string | null) => set({ runner }),
      setHexPlanet: (hexPlanet) => set({ hexPlanet }),
    }),
    {
      name: 'contract-store',
    }
  )
);

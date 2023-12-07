import { create } from 'zustand';

type State = {
  isOpen: boolean
};

type Actions = {
  setToggle: () => void
  setOpen: () => void
  setClose: () => void
};

const useOpenNavStore = create<State & Actions>((set) => ({
  isOpen: false,
  setToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: () => set(() => ({ isOpen: true })),
  setClose: () => set(() => ({ isOpen: false })),
}));

export default useOpenNavStore;

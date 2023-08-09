import {create} from 'zustand';

type OpenDrawer = {
  openDrawer: boolean;
  changeopenDrawer: (value: boolean) => void;
};

const useOpenDrawer = create<OpenDrawer>((set) => ({
  openDrawer: false,
  changeopenDrawer: (value) => set({ openDrawer: value }),
}));

export default useOpenDrawer;

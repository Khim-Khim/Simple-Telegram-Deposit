import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TMetaMaskState, TState } from "../types/metaMaskStore.type";

const metamaskInitState = {
  wallet: null,
  isMetaMaskInstalled: false,
  status: "disconnected",
  balance: null,
};

const useStoreWallet = create(
  persist(
    (set) => ({
      metaMaskData: metamaskInitState,
      setMetaMaskData: (data: TMetaMaskState) =>
        set(() => {
          const newState = {
            ...data,
          };
          return {
            metaMaskData: newState,
          };
        }),

      removeMetaMaskData: () =>
        set((state: TState) => ({
          ...state,
          metaMaskData: metamaskInitState,
        })),

      updateSomeMetaMaskData: (field: string, value: string | boolean) =>
        set((state: TState) => {
          return {
            metaMaskData: {
              ...state.metaMaskData,
              [field]: value,
            },
          };
        }),
    }),
    {
      name: "metaMaskData",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStoreWallet;

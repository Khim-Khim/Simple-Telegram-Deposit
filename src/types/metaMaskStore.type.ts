export type TStatus = "loading" | "connected" | "disconnected";
export type TMetaMaskState = {
  wallet: string | null;
  isMetaMaskInstalled: boolean | undefined;
  status: TStatus;
  balance: string | null;
};
export type TState = {
  metaMaskData: TMetaMaskState;
  setMetaMaskData: (data: TMetaMaskState) => void;
  removeMetaMaskData: () => void;
  updateSomeMetaMaskData: (field: string, value: string | boolean) => void;
};

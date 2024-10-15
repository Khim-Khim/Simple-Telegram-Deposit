import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

type TPropsLayout = {
  children: ReactElement;
  onConnectDisconnect: () => void;
  isAccountConnected: boolean;
};

export default function Layout({
  children,
  // onConnectDisconnect,
  // isAccountConnected,
}: TPropsLayout) {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-[#fceabb] via-[#f8d347] to-[#f2a71b] flex flex-col justify-between">
      <Header
        // onConnectDisconnect={onConnectDisconnect}
        // isAccountConnected={isAccountConnected}
      />
      <section className="flex items-center justify-center z-10">
        {children}
      </section>
      <Footer />
    </main>
  );
}

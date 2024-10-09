import TopWave from "../assets/top-wave.svg";
import AdilLogo from "../assets/adil.png"
import MetamaskLogo from "../assets/metamask-logo.png";
import Button from "../components/Button";

type TPropsHeader = {
  onConnectDisconnect: () => void;
  isAccountConnected: boolean;
};

export default function Header({
  onConnectDisconnect,
  isAccountConnected,
}: TPropsHeader) {
  return (
    <section>
      <menu className="flex items-center justify-between bg-white w-full py-3 lg:py-4 px-4 lg:px-14 z-10 relative">
        <div className="flex items-center">
          <img src={AdilLogo} alt="ADIL" className="w-7 lg:w-9 mr-2" />
          <h3 className="font-extrabold text-base lg:text-xl">ADIL Deposit</h3>
        </div>
        <div className="flex items-center">
          {isAccountConnected && (
            <img
              src={MetamaskLogo}
              alt="metamask-logo"
              className="w-10 mr-4 bg-gray-200 p-2 rounded-full"
            />
          )}
          <Button
            label={isAccountConnected ? "Disconnect" : "Connect E-wallet"}
            onClick={onConnectDisconnect}
          />
        </div>
      </menu>
      <img
        src={TopWave}
        alt="wave-top"
        className="absolute -top-1 z-0 opacity-5"
      />
    </section>
  );
}

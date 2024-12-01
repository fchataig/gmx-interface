import { ReactNode, useState } from "react";
import "./ConnectWalletButton.scss";
import { IcoAnimWalletIcon } from "img/IcoAnimWallet";

type Props = {
  imgSrc?: string;
  children: ReactNode;
  onClick: () => void;
};

export default function ConnectWalletButton({ imgSrc, children, onClick }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      data-qa="connect-wallet-button"
      className="connect-wallet-btn"
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {imgSrc ? (
        <img className="btn-icon" src={imgSrc} alt="Connect Wallet" />
      ) : (
        <IcoAnimWalletIcon isHovered={isHovered} />
      )}
      <span className="btn-label">{children}</span>
    </button>
  );
}

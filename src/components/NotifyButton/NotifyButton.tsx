import { memo, useState } from "react";
import { useNotifyModalState } from "lib/useNotifyModalState";

import "./NotifyButton.scss";

import { IcoAnimNotifyLogo } from "img/IcoAnimNotifiLogo";

export const NotifyButton = memo(function NotifyButton() {
  const { openNotifyModal } = useNotifyModalState();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="NotifyButton"
      onClick={openNotifyModal}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <IcoAnimNotifyLogo isHovered={isHovered} />
    </div>
  );
});

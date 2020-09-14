import { useState } from "react";

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function close() {
    setIsShowing(false);
  }

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    close,
    isShowing,
    toggle,
  };
};

export default useModal;

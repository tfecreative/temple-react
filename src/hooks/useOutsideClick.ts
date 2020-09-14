import { useEffect } from "react";

export interface IOutsideClickProps {
  callback: () => unknown;
  ref: any;
}

export const useOutsideClick = ({ callback, ref }: IOutsideClickProps) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;

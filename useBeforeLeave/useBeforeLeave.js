import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    console.log(event);
    //onBefore();
    const { clientY } = event;
    if (clientY <= 0) {
      // 마우스가 위로 벗어날때만 이벤트 발생
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

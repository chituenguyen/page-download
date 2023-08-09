// components/BottomDrawer.js
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getUserAgent } from '../../utils/userAgent';

const MobileDownload = dynamic(
  () => import("../MobileDownload/MobileDownload"),
  { ssr: false }
);

const BottomDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [userAgent, setUserAgent] = useState<any>(null);

  useEffect(() => {
    setUserAgent(getUserAgent());

    const check = localStorage.getItem("showDrawer");
    if (!check) {
      const timer = setTimeout(() => {
        setShowDrawer(true);
        localStorage.setItem("showDrawer", "true");
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);
  console.log(userAgent)

  const isAndroid = userAgent && userAgent.name === "Android";
  const isIos = userAgent  && userAgent.name === "iOS";

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 transition-transform duration-300 transform bg-[#333333] lg:hidden ${
        showDrawer ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {isAndroid ? (
        <MobileDownload
          type={"android"}
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
        />
      ) : isIos ? (
        <MobileDownload
          type={"ios"}
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BottomDrawer;

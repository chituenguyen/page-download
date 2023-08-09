// components/BottomDrawer.js
import React, { useState, useEffect } from "react";
import { useUserAgent } from "next-useragent";
import MobileDownload from "../MobileDownload/MobileDownload";

const BottomDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const userAgent = useUserAgent("");

  useEffect(() => {
    const check = localStorage.getItem("showDrawer");
    if (check) {
      return;
    } else {
      const timer = setTimeout(() => {
        setShowDrawer(true);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);


  return (
    <div
      className={`fixed bottom-0 left-0 right-0 transition-transform duration-300 transform bg-[#333333] lg:hidden ${
        showDrawer ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {userAgent.isAndroid ? (
        <MobileDownload
          type={"android"}
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
        />
      ) : userAgent.isIos ? (
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

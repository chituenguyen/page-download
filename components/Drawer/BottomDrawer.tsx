// components/BottomDrawer.js
import React, { useState, useEffect } from 'react';
import { useUserAgent } from 'next-useragent';
import MobileDownload from '../MobileDownload/MobileDownload';

const BottomDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const userAgent = useUserAgent("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDrawer(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (typeof window === 'undefined') {
    // Don't render on the server
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 transition-transform duration-300 transform bg-[#333333] lg:hidden ${
        showDrawer ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {userAgent.isAndroid ? (
        <MobileDownload type={"android"} />
      ) : userAgent.isIos ? (
        <MobileDownload type={"ios"} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BottomDrawer;

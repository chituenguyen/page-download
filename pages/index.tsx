import type { NextPage } from "next";
import Image from "next/image";
import BottomDrawer from "../components/Drawer/BottomDrawer";

const Home: NextPage = () => {
  return (
    <div className="font-beVietNam">
      <div className="bg-[url('https://m.aiscore.com/_nuxt/img/downback.bda9a2a.png')] min-h-screen hidden lg:block">
        <Image
          src="/images/Logo.png"
          width={114}
          height={30}
          alt="Picture of the author"
        />
        <div className="text-white">
          <h4>The Fastest</h4>
          <h4>LiveScore app</h4>
          <p>Watch Match Live and Chat</p>
          <p>Online with Sports Fans</p>
        </div>
        <div>
          <div>
            <Image
              src="/images/icon1.png"
              width={24}
              height={24}
              alt="Picture of the icon1"
            />
            <Image
              src="/images/icon2.png"
              width={24}
              height={24}
              alt="Picture of the icon2"
            />
            <Image
              src="/images/icon3.png"
              width={24}
              height={24}
              alt="Picture of the icon3"
            />
          </div>
          <p>Download</p>
        </div>
        <div>
          <p>Don&apos;t have Google Play?</p>
          <a href="">Download the app here</a>
        </div>
      </div>
      <BottomDrawer/>
    </div>
  );
};

export default Home;

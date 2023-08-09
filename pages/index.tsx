import type { NextPage } from "next";
import Image from "next/image";
import BottomDrawer from "../components/Drawer/BottomDrawer";

const Home: NextPage = () => {
  return (
    <div className="font-beVietNam">
      <div className=" bg-[url('https://m.aiscore.com/_nuxt/img/downback.bda9a2a.png')] bg-cover">
        <div className=" min-h-full hidden lg:flex containerPage gap-14 pt-10">
          <div className="">
            <Image
              src="/images/banner.png"
              width={650}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="py-6 flex flex-col gap-10">
            <Image
              src="/images/Logo.png"
              width={150}
              height={1}
              alt="Picture of the author"
            />
            <div className="flex flex-col gap-4">
              <button className="border border-solid border-white border-opacity-30 rounded-lg hover:bg-white hover:bg-opacity-5 px-4 py-2 pr-28">
                <a
                  href="https://play.google.com/store/apps/details?id=com.onesports.score&referrer=utm_source%3Dsite_pc%26utm_medium%3Dbutton%26anid%3Dadmob"
                  className="flex items-center text-white gap-2"
                >
                  <Image
                    src="/images/icon1.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                  <p>GooglePlay</p>
                </a>
              </button>
              <button className="border border-solid border-white border-opacity-30 rounded-lg hover:bg-white hover:bg-opacity-5 px-4 py-2 pr-28">
                <a
                  href="https://play.google.com/store/apps/details?id=com.onesports.score&referrer=utm_source%3Dsite_pc%26utm_medium%3Dbutton%26anid%3Dadmob"
                  className="flex items-center text-white gap-2"
                >
                  <Image
                    src="/images/icon2.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                  <p>AppStore</p>
                </a>
              </button>
              <button className="border border-solid border-white border-opacity-30 rounded-lg hover:bg-white hover:bg-opacity-5 px-4 py-2 pr-28">
                <a
                  href="https://appgallery.huawei.com/#/app/C101154649"
                  className="flex items-center text-white gap-2"
                >
                  <Image
                    src="/images/icon3.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                  <p>AppGallery</p>
                </a>
              </button>
            </div>
            <div>
              <h6 className="text-lg text-white">
                Don&apos;t have Google Play?
              </h6>
              <a
                href="https://www.aiscore.com/download/aiscore.apk"
                className="text-[#0D80DA]"
              >
                Download the app here
              </a>
            </div>
          </div>
        </div>
        <BottomDrawer />
      </div>
      <div className="bg-white">
       <div className="containerPage py-10">
       <div className="text-black">
          <h6 className="text-3xl font-bold">Match Live</h6>
          <p className="text-lg">
            No network letency with live animation like on the scene of the
            match
          </p>
        </div>
        <div className="flex justify-center w-full">
          <Image
            src="/images/session1.png"
            width={900}
            height={500}
            alt="Picture of the author"
          />
        </div>
       </div>
      </div>
      <div className="bg-[#ECEFF2]">
        <div className="containerPage py-10">
          <div className="text-black">
            <h6 className="text-3xl font-bold">Live Scores</h6>
            <p className="text-lg">
              You can get live scores about all the football matches for all the
              leagues and competitions
            </p>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="/images/session2.png"
              width={700}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import Image from "next/image";

interface MobileDownloadProps {
  type: "ios" | "android"; // Define the type explicitly
}

interface Urls {
  ios: string;
  android: string;
}

const url: Urls = {
  ios: "https://apps.apple.com/app/livescore-live-sport-updates/id356928178?utm_source=https%3A%2F%2Fwww.livescore.com%2Fen%2F&utm_medium=website&utm_campaign=ls_smartbanner_favourites_open_ios",
  android:
    "https://play.google.com/store/apps/details?id=com.livescore&utm_source=https%3A%2F%2Fwww.livescore.com%2Fen%2F&utm_medium=website&utm_campaign=ls_smartbanner_home_open_android",
};

function MobileDownload({ type }: MobileDownloadProps) {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col items-center justify-center text-white gap-4 ">
        <Image
          src="/images/Logo.png"
          width={114}
          height={30}
          alt="Picture of the author"
        />
        <div className="flex flex-col items-center justify-center gap-1 px-4">
          <h6 className="text-sm">Get more from Favourites on our app</h6>
          <p className="text-center text-xs text-gray-300">
            You can setup push notifications for the events that matter to you
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <button className="text-white border border-solid border-white py-2 rounded-md">
          Not now
        </button>
        <button className="text-black bg-[#2187E5] rounded-md">
          <a href={url[type]}>Download</a>
        </button>
      </div>
    </div>
  );
}

export default MobileDownload;

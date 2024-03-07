import Image from "next/image";
import HeaderSearch from "./header-search";
import LoginNotifTheme from "./login-notif-theme";
const Header = () => {
  return (
    <header className="flex items-center justify-between py-2 px-8 shadow-[0px_10px_10px_rgba(0,0,0,0.25)]">
      <div>
        <Image src={"/logo.png"} alt="logo" width={60} height={60} />
      </div>
      <HeaderSearch />
      <LoginNotifTheme />
    </header>
  );
};

export default Header;

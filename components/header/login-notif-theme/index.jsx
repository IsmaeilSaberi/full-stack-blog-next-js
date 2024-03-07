import { IoNotificationsOutline } from "react-icons/io5";

const LoginNotifTheme = () => {
  return (
    <div className="flex justify-end items-center gap-4">
      <div className="flex justify-center items-center gap-1 rounded-full border-2 border-[#11009E] w-16 h-8">
        <span>🌙</span>
        <span className="w-6 h-6 bg-[#4942E4] rounded-full"></span>
      </div>
      <div className="relative">
        <IoNotificationsOutline />
        <span className="absolute top-0 right-0">4</span>
      </div>
      <div className="bg-[#4942E4] px-3 py-1 rounded-md text-white text-base sm:text-sm">
        ورود/ثبت نام
      </div>
    </div>
  );
};

export default LoginNotifTheme;

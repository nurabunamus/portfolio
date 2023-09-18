import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const Switcher = () => {
  return (
    <button className=" w-12 h-12 rounded-full border-2  text-white flex justify-center items-center hover:border-green-600">
      <ThemeSwitcher />
    </button>
  );
};

export default Switcher;

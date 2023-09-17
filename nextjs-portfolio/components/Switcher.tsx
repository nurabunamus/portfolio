import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const Switcher = () => {
  return (
    <button className=" w-16 h-16 rounded-full border-2 border-grey-500 text-white flex justify-center items-center hover:border-green-600">
      <ThemeSwitcher />
    </button>
  );
};

export default Switcher;

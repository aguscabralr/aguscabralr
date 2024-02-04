import { windowConf } from '../config/config';

const PortfolioSVG = () => {
  const theme = windowConf.theme;
  const color = theme === 'dark' ? '#FFF' : '#000';

  return (
    <svg className={`hover:stroke-[--btn] hover:scale-125 duration-300 hover:cursor-pointer`} stroke={color} width='30px' height='30px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
      <path d='M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8' />
    </svg>
  );
};

export default PortfolioSVG;

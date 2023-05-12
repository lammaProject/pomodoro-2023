import * as React from "react";

const Desc: React.FC<any> = () => {
  const marker = (
    <svg
      className="min-w-[12px] max-w-[12px] self-start mt-[10px] mr-[5px]"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
        fill="#B7280F"
      />
    </svg>
  );

  return (
    <div className="w-[535px] mb-[25px]">
      <h1 className="fw-700 text-[24px] leading-[33px] mb-[5px]">Ура! Теперь можно начать работать:</h1>
      <ul className="list-decimal">
        <li className="flex items-center space-x-3 fw-400 text-[16px] leading-[33px]">
          {marker} Выберите категорию и напишите название текущей задачи
        </li>
        <li className="flex items-center space-x-3 fw-400 text-[16px] leading-[33px]">
          {marker} Запустите таймер («помидор»)
        </li>
        <li className="flex items-center space-x-3 fw-400 text-[16px] leading-[33px]">
          {marker} Работайте пока «помидор» не прозвонит
        </li>
        <li className="flex items-center space-x-3 fw-400 text-[16px] leading-[33px]">
          {marker} Сделайте короткий перерыв (3-5 минут)
        </li>
        <li className="flex space-x-3 fw-400 text-[16px] leading-[33px]">
          {marker} Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора»
          делайте длинный перерыв (15-30 минут).
        </li>
      </ul>
    </div>
  );
};

export default Desc;

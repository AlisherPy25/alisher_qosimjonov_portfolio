import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState } from 'react';

const Hero = () => {
  const [language, setLanguage] = useState('ru'); // 'ru' или 'uz'

  const texts = {
    greeting: {
      ru: "Привет, я",
      uz: "Salom, men"
    },
    name: {
      ru: "Алишер Касимжанов",
      uz: "Alisher Kasimjanov"
    },
    description: {
      ru: [
        "Специалист по кибербезопасности",
        "Разрабатываю защитные системы",
        "Пентестер | Python/C++ разработчик",
        "Сборка и настройка ПК"
      ],
      uz: [
        "Kiberxavfsizlik mutaxassisi",
        "Himoya tizimlarini ishlab chiqaman",
        "Pentester | Python/C++ dasturchi",
        "Kompyuter yig'ish va sozlash"
      ]
    }
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            {texts.greeting[language]} <span className='text-[#915EFF]'>{texts.name[language]}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {texts.description[language].map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          {/* Кнопка переключения языка */}
          <button 
            onClick={() => setLanguage(lang => lang === 'ru' ? 'uz' : 'ru')}
            className="mt-4 px-4 py-2 bg-[#915EFF] rounded-lg text-white text-sm"
          >
            {language === 'ru' ? 'O\'zbekcha' : 'На русском'}
          </button>
        </div>
      </div>

      <ComputersCanvas />

      {/* Блок сертификатов - будет виден при наведении */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 group">
        <div className="w-16 h-16 bg-[#915EFF] rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-white font-bold">C</span>
        </div>
        <div className="hidden group-hover:block absolute right-20 top-0 w-64 bg-gray-800 p-4 rounded-lg shadow-xl">
          <h4 className="text-white font-bold mb-2">
            {language === 'ru' ? 'Мои сертификаты' : 'Mening sertifikatlarim'}
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {/* Здесь будут миниатюры сертификатов */}
            <div className="bg-gray-700 h-20 rounded"></div>
            <div className="bg-gray-700 h-20 rounded"></div>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
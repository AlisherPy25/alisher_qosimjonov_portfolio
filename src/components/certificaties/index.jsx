import { motion } from "framer-motion";
import { useState } from "react";

const Certificates = () => {
  const [language, setLanguage] = useState('ru');

  // Данные сертификатов с вашими ссылками
  const certificates = [
    {
      id: 1,
      url: "https://i.ibb.co/9HyRx19/cert1.jpg",
      title: "Certified Ethical Hacker",
      description: {
        ru: "Сертификат этичного хакера",
        uz: "Ethical Hacker sertifikati"
      }
    },
    {
      id: 2,
      url: "https://i.ibb.co/0pQR2mp/cert2.jpg",
      title: "CompTIA Security+",
      description: {
        ru: "Базовый сертификат безопасности",
        uz: "Asosiy xavfsizlik sertifikati"
      }
    },
    {
      id: 3,
      url: "https://i.ibb.co/r2d8kHj/cert3.jpg",
      title: "OSCP Certification",
      description: {
        ru: "Сертификат пентестера",
        uz: "Pentester sertifikati"
      }
    },
    {
      id: 4,
      url: "https://i.ibb.co/VYRdvDB/cert4.jpg",
      title: "Python Developer",
      description: {
        ru: "Сертификат Python разработчика",
        uz: "Python dasturchi sertifikati"
      }
    },
    {
      id: 5,
      url: "https://i.ibb.co/dxkd7Y7/cert5.jpg",
      title: "C++ Advanced",
      description: {
        ru: "Продвинутый C++",
        uz: "Malakali C++"
      }
    },
    {
      id: 6,
      url: "https://i.ibb.co/0RbhYY1/cert6.jpg",
      title: "Network Security",
      description: {
        ru: "Защита сетей",
        uz: "Tarmoq xavfsizligi"
      }
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и переключатель языка */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0"
          >
            {language === 'ru' ? 'Мои сертификаты' : 'Mening sertifikatlarim'}
          </motion.h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(lang => lang === 'ru' ? 'uz' : 'ru')}
            className="px-6 py-2 bg-[#915EFF] hover:bg-[#7d4dd1] rounded-full text-white font-medium transition-colors shadow-lg"
          >
            {language === 'ru' ? 'O\'zbekcha' : 'На русском'}
          </motion.button>
        </div>

        {/* Сетка сертификатов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(145, 94, 255, 0.3)" }}
              className="bg-[#1a1440] rounded-2xl overflow-hidden border border-[#2a2250] transition-all duration-300 hover:border-[#915EFF]"
            >
              {/* Картинка сертификата */}
              <div 
                className="relative pt-[70%] cursor-pointer bg-white"
                onClick={() => window.open(cert.url, '_blank')}
              >
                <img
                  src={cert.url}
                  alt={cert.title}
                  className="absolute top-0 left-0 w-full h-full object-contain p-4"
                  loading="lazy"
                />
              </div>
              
              {/* Описание */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-[#b8b8d1]">
                  {cert.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
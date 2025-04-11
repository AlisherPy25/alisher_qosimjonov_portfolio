import { motion } from "framer-motion";
import { styles } from "../styles";

const Certificaties = () => {
  // Данные сертификатов с вашими ссылками
  const certificates = [
    {
      id: 1,
      url: "https://i.ibb.co/9HyRx19/cert1.jpg",
      title: "Certified Ethical Hacker",
      description: {
        ru: "Сертификат по этичному хакингу",
        uz: "Ethical Hacking sertifikati"
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

  // Состояние для переключения языка
  const [language, setLanguage] = useState('ru');

  return (
    <section className={`${styles.padding} max-w-7xl mx-auto`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className={`${styles.sectionHeadText}`}>
          {language === 'ru' ? 'Мои сертификаты' : 'Mening sertifikatlarim'}
        </h2>
        
        {/* Переключатель языка */}
        <button
          onClick={() => setLanguage(lang => lang === 'ru' ? 'uz' : 'ru')}
          className="px-4 py-2 bg-[#915EFF] rounded-lg text-white text-sm"
        >
          {language === 'ru' ? 'O\'zbekcha' : 'На русском'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificaties.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-tertiary rounded-xl shadow-lg overflow-hidden"
          >
            {/* Обертка для изображения с фиксированным соотношением сторон */}
            <div className="relative pt-[56.25%] cursor-pointer">
              <img
                src={cert.url}
                alt={cert.title}
                className="absolute top-0 left-0 w-full h-full object-contain p-4 bg-white"
                onClick={() => window.open(cert.url, '_blank')}
              />
            </div>
            
            {/* Описание сертификата */}
            <div className="p-4">
              <h3 className="text-white font-bold text-xl mb-2">{cert.title}</h3>
              <p className="text-secondary">
                {cert.description[language]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificaties;
'use client'

import { useRef, useEffect } from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import Marquee from '@/components/magicui/marquee';
import Particles from '@/components/magicui/particles';
import { motion, useInView, useAnimation } from 'framer-motion';
import PadelScoring from './components/PadelScoring';
import WordRotate from '@/components/magicui/word-rotate';
import NumberTicker from '@/components/magicui/number-ticker';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import BlurIn from '@/components/magicui/blur-in';
import { FaCalendarAlt } from 'react-icons/fa';
import { PiTennisBall } from "react-icons/pi";
import { GrNodes } from "react-icons/gr";
import MembershipSection from './components/MembershipSection';
import TrainersPreview from './components/TrainersPreview';
import { useLanguage } from './LanguageContext';

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } });
    }
  }, [isInView, controls]);

  const text = {
    ar: {
      title: 'عناية يمكنك الوثوق بها، بأفضل جودة وعروض',
      subtitle: ['ثقة', 'ابتسامة', 'عناية'],
      cta1: 'احجز الآن',
      cta2: 'خدماتنا',
      stats: {
        players: 'ابتسامة',
        courts: 'أطباء متخصصين',
        tournaments: 'فرع',
      }
    },
    en: {
      title: 'A Care You Can Trust',
      subtitle: ['Trust', 'Smile', 'Care'],
      cta1: 'Book Now',
      cta2: 'Our Services',
      stats: {
        players: 'Smiles',
        courts: 'Specialized Doctors',
        tournaments: 'Branches',
      }
    },
  };

  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-cyan-900 ${isRTL ? 'rtl' : 'ltr'}`}>
    <main className="container mx-auto px-4 py-5 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <motion.div 
        ref={contentRef}
        className="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 p-6 md:p-8 rounded-2xl shadow-2xl mb-12 min-h-[70vh] flex flex-col justify-between relative overflow-hidden border border-cyan-500 dark:border-cyan-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
              <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            staticity={50}
            color="#06b6d4" // Cyan color
          />
          <BorderBeam />
          
         

          <div className="flex flex-col items-center justify-between z-10 mb-8 mt-4">
            <BlurIn
              word={
                <div className="text-center text-blue-900 dark:text-blue-200 w-full mb-8">  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-blue-900 to-cyan-600 text-transparent bg-clip-text drop-shadow-lg leading-tight md:leading-snug lg:leading-normal">
                    {text[language].title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-cyan-600">
                    <WordRotate 
                      words={text[language].subtitle}
                      duration={2000}
                      framerProps={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -20 },
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                    />
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                    <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-600 w-1/2 lg:w-1/6 text-cyan-700 px-6 py-3 text-lg md:text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
                >
                  <AnimatedShinyText>{text[language].cta1}</AnimatedShinyText>
                  <FaCalendarAlt className="ml-0 text-cyan-600" />
                </motion.button>
                <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-800 w-1/2 lg:w-1/6 text-blue-800 px-6 py-3 text-lg md:text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
                >
                  <AnimatedShinyText>{text[language].cta2}</AnimatedShinyText>
                  <GrNodes className="ml-0 text-blue-800" />
                </motion.button>
              </div>
            </div>
          }
          className="w-full mb-2"
        />
            
            <BlurIn
              word={<PadelScoring />}
              className="w-full md:w-2/3 lg:w-1/2 mb-12"
            />
            
            <BlurIn
              word={
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 z-10 w-full">
                  <StatCard number={5000} text={text[language].stats.players} />
                  <StatCard number={20} text={text[language].stats.courts} />
                  <StatCard number={10} text={text[language].stats.tournaments} />
                </div>
              }
              className="w-full"
            />
          </div>
          </motion.div>

<div className="mt-12">
  <Marquee className="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-lg p-4 shadow-lg" pauseOnHover={true}>
            <ReviewCard name="أحمد" text="تجربة رائعة!" />
            <ReviewCard name="فاطمة" text="أفضل عيادة  في الرياض" />
            <ReviewCard name="محمد" text="خدمة ممتازة وعالية الجودة" />
            <ReviewCard name="نورة" text="أنصح بشدة بهذا المكان" />
          </Marquee>
        </div>

        <BlurIn
          word={<MembershipSection language={language} />}
          className="w-full"
        />

        <BlurIn
          word={<TrainersPreview language={language} />}
          className="w-full mt-4"
        />
      </main>
    </div>
  );
}

// ... (StatCard and ReviewCard components remain the same)

function StatCard({ number, text }) {
  return (
    <div className="bg-cyan-500 bg-opacity-10 dark:bg-opacity-30 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-cyan-300">
        <NumberTicker value={number} />+
      </h3>
      <p className="text-sm md:text-base text-cyan-700 font-semibold mt-2">{text}</p>
    </div>
  );
}

function ReviewCard({ name, text }) {
  return (
    <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg mx-3 w-56 shadow-md hover:shadow-lg transition-shadow">
      <p className="text-sm text-blue-800 dark:text-cyan-200">{text}</p>
      <p className="text-xs text-cyan-700 dark:text-cyan-400 mt-2">- {name}</p>
    </div>
  );
}
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionOurCompany from 'components/SectionOurCompany/SectionOurCompany';
import SectionService from 'components/SectionService/SectionService';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isWidthForDesktop, setIsWidthForDesktop] = useState(
    window.innerWidth > 1360,
  );

  // *отслеживание является ли ширина экрана для десктоп (>1360px)
  useEffect(() => {
    function someFunc() {
      const w = window.innerWidth;
      // Выполняем действие, если ширина меньше 1360px
      if (w <= 1360) {
        setIsWidthForDesktop(false);
      }
      // Выполняем действие, если ширина больше 1360px
      if (w > 1360) {
        setIsWidthForDesktop(true);
      }
    }

    function showIsDesktopWidth() {
      console.log('Размер окна изменен');
      someFunc();
    }
    // Выполняем заново при изменении размера окна
    window.addEventListener('resize', showIsDesktopWidth);
  }, []);

  return (
    <div className="App">
      <Header />
      <SectionHero />
      <SectionService isWidthForDesktop={isWidthForDesktop} />
      <SectionOurCompany />
      <Footer />
    </div>
  );
}

export default App;

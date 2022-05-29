import Header from 'components/Header/Header';
import SectionHero from 'components/SectionHero/SectionHero';
import SectionOurCompany from 'components/SectionOurCompany/SectionOurCompany';
import SectionService from 'components/SectionService/SectionSecvice';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionHero />
      <SectionService />
      <SectionOurCompany />
    </div>
  );
}

export default App;

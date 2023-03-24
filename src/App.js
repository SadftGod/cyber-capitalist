import './App.css';
import AssetsSection4 from './components/AssetsSection4/AssetsSection4';
import BannerSection1 from './components/BannerSection1/BannerSection1';
import QuestionSection2 from './components/QuestionSection2/QuestionSection2';
import TelegramSection3 from './components/TelegramSection3/TelegramSection3';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BannerSection1/>
      <main className='main__section'>
        <QuestionSection2/>
        <TelegramSection3/>
        <AssetsSection4/>

      </main>
      <Footer/>
      
    </div>
  );
}

export default App;

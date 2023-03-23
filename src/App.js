import './App.css';
import BannerSection1 from './components/BannerSection1/BannerSection1';
import QuestionSection2 from './components/QuestionSection2/QuestionSection2';
import TelegramSection3 from './components/TelegramSection3/TelegramSection3';

function App() {
  return (
    <div className="App">
      <BannerSection1/>
      <main className='main__section'>
        <QuestionSection2/>
        <TelegramSection3/>
      </main>
      
    </div>
  );
}

export default App;

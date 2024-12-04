import './App.css';
import { FirstBlock } from './components/pages/FirstBlock/FirstBlock';
import { HowDoesThisWork } from './components/pages/HowDoesThisWork/HowDoesThisWork';
import { ThirdBlock } from './components/pages/ThirdBlock/ThirdBlock';
import { FeedBack } from './components/pages/FeedBack/FeedBack';
import { DropDownBlock } from './components/pages/DropDownBlock/DropDownBlock';
import { Survey } from './components/pages/Survey/Survey';
import { Footer } from './components/pages/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Form from './components/pages/Form/Form';


const App = () => {
   
  return (
    <div className='root'>
    <div>
      <CustomCursor/>
    </div>
    <div>
      <FirstBlock/>
      <HowDoesThisWork/>
      <ThirdBlock/>
      <FeedBack/>
      <DropDownBlock/>
      <Survey/>
      <Form/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;

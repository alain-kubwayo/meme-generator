import './App.css';
import Api from './components/Api';
import Boxes from './components/Boxes';
import Form from './components/Form';
import Header from './components/Header';
import Meme from './components/Meme';
import Signup from './components/Signup';
import WindowTracker from './components/WindowTracker';

function App() {

  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header />
      <Meme />
      {/* <Boxes /> */}
      {/* <Form /> */}
      {/* <Signup /> */}
      {/* <Api /> */}
      <WindowTracker />
    </div>
  );
}

export default App;

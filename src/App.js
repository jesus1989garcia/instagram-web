import phone from './imgs/phone-insta.png'
import './App.css';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="main">
      <div className="main-container">
        <div className="left-cont">
        
          <img src={phone} className="phone-img"></img>
        </div>
        <div className="right-cont">
          <Form></Form>
        </div>

      </div>
      
    </div>
    <Footer />
    </div>
    
  );
}

export default App;


//<img src={logo} className="App-logo" alt="logo" />
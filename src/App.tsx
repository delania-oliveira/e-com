import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';


Modal.setAppElement('#root');

export function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
      <GlobalStyles/>
    </div>
  );
}
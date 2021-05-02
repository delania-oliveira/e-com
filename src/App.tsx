import Modal from 'react-modal';
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { Routes } from './routes';


Modal.setAppElement('#root');

export function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <GlobalStyles/>
    </div>
  );
}
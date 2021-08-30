import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <HeaderContainer/>
      <main>
        <Body/>
      </main>
      <Footer/>
    </>
  );
}

export default App;

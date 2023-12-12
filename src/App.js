import './App.css';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Navigation from './components/Navgiation/Navigation';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { AppContextProvider } from './ContextProvider';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <div className='main-block'>
        <Navigation />
        <Modal />
        <div className='map__container'>
          <TransformWrapper 
            maxScale={5} 
            minScale={1}
            doubleClick={{disabled: true}}
          >
            <TransformComponent>
              <Map />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;

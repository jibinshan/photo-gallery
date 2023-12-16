import { Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery';
import Upload from './components/upload';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Upload/>}/>
        <Route path='/gallery' element={ <Gallery/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

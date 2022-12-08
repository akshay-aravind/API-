import './App.css';
import Details from './Employee/Details';
import Form from './Form/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Updateform from './Form/Updateform';
import View from './ViewDependent/View';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/form' element={<Form />}/>
        <Route path='/' element={<Details />}/>
        <Route path='/update' element={<Updateform />}/>
        <Route path='/view' element={<View />}/>

      </Routes>
     </Router>
     
    </div>
  );
}

export default App;

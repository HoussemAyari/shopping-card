import './App.css';
import CardCst from './component/CardCst';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './component/List';
import {Object} from './component/Data.js'



function App() {
  return (
    <div className="App">
   
    <List Object={Object}/>
   

    </div>
  );
}

export default App;

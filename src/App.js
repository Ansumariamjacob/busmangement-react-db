import logo from './logo.svg';
import './App.css';
import Addbus from './component/Addbus';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Searchbus from './component/Searchbus';
import View from './component/View';

function App() {
  return (
    <div className="App">
      <Addbus/>
      <Searchbus/>
      <View/>
    </div>
  );
}

export default App;

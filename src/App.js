import { Routes } from 'react-router-dom';
import './App.css';
import Rout from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Rout/>
    </div>
    </Provider>
  );
}

export default App;

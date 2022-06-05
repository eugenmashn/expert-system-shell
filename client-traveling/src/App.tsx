import './App.css';
import { ToolBar } from './components/Toolbar/Toolbar';
import {  BrowserRouter } from 'react-router-dom';
import { RouteComponent } from './envirement/Route';
import { Provider } from 'react-redux';
import { store } from './envirement/configuretionStore';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Provider store={store}>
        <ToolBar></ToolBar>
        <RouteComponent/>
        </Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation state={props.state.sideBar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element=
              {<DialogsContainer store={props.store} />}/>
            <Route path='/profile/*' element={<Profile store={props.store}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation state={props.state.sideBar} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path='/profile/*' element=
              {
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

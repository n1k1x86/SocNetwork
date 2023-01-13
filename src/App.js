import './App.css';
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;

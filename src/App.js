import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Profile from './components/Profile';

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

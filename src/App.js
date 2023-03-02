import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import View from './Component/View';
import About from './Component/About';
import Blog from './Component/Blog';
import Profile from './Component/Profile';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <View/>
      <About/>
      <Blog/>
      <Profile/>
    </>
  );
}

export default App;

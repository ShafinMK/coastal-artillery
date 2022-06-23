import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Courses/Courses';
import Gallery from './components/Gallery/Gallery';
import AboutCA from './components/AboutCA/AboutCA';
import DetailsCourse from './components/DetailsCourse/DetailsCourse';
import Comingsoon from './components/Comingsoon/Comingsoon';

function App() {
  return (
    <div className="">



      {/* <Home></Home> */}

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<AboutCA></AboutCA>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/courses' element={<Courses></Courses>}></Route>
          <Route path='/course/:courseID' element={<DetailsCourse></DetailsCourse>}></Route>
          <Route path='/comingsoon' element={<Comingsoon></Comingsoon>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>


        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

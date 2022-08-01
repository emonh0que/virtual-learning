import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Faculty from './component/Faculty/Faculty';
import Syllabus from './component/Syllabus/Syllabus';
import BlogContainer from './component/BlogContainer/BlogContainer';
import ClassContainer from './component/ClassContainer/ClassContainer';
import Carrier from './component/Carrier/Carrier';


function App() {
  return (
    <div className="App bg">
      
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/syllabus" element={<Syllabus/>} />
          <Route path="/blog" element={<BlogContainer/>} />
          <Route path="/classes" element={<ClassContainer/>} />
          <Route path="/carrier" element={<Carrier/>} />
        </Routes>
        <Footer/>
      </Router>
      </div>
      
    
  );
}

export default App;

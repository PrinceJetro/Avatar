import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import QuizComponent from './components/quiz';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './components/watch';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/watchnow/:title" element={<Watch />} />
        {/* <Route path="/:gender" element={<Men />} /> */}
       {/*  <Route path="/movie/:src" element={<MovieDetails />} />
        <Route path="/watchnow/:title" element={<Movie />} /> */}

      </Routes>
    </Router>
    </>
  );
}

export default App;

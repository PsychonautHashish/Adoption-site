import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from "./pages/Home";
import Children from "./pages/Children";
import ChildProfile from "./pages/ChildProfile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";



import Navigation from './components/Navigation';
import './styles/styles.css';
import './styles/transitions.css';

function App() {
  const location = useLocation();
  
  return (
    <>
      <Navigation />
      <TransitionGroup component={null}>
        <CSSTransition
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/children" element={<Children />} />
            <Route path="/child/:id" element={<ChildProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
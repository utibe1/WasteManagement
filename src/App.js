import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Blog from './pages/Blog';
import InnovativeSolution from './pages/InnovativeSolution';
import Form from './pages/Form';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/form' element={<Form />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path='/readmore' element={<InnovativeSolution />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

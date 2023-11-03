import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Blog from './pages/Blog';
import InnovativeSolution from './pages/InnovativeSolution';
import Form from './pages/Form';
import Example from './pages/Example';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/form' element={<Form />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path='/readmore' element={<InnovativeSolution />} />
        <Route path='/example' element={<Example />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

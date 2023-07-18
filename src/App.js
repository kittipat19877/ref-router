import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Button,  } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Contact from './Contact';
import { useRef } from 'react';

export function Layout() {
  return (
  <nav className='bg-secondary p-2 mb-3 text-center'>
    <NavLink to="/" className="link px-2" 
    style={({ isActive }) => {
      return {
          textDecoration: isActive ? "none" : "underline",
      };
    }}
    >
    Main
    </NavLink>
    <NavLink 
    to="/product " 
    className="link px-2"
    >Product</NavLink>
  </nav>
  );
}
function Index() {
  const header1 = useRef();
  return (
    <>
    <Layout />
    <h3 ref={header1}>Hello</h3>
    <Button onClick={()=>{header1.current.innerHTML = "React";
  }}
  >
    Click Me</Button>
    </>
  );
}
function Product() {
  return (
    <>
    <Layout />
    <h4>Product</h4>
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
    <Container className='p-3 my-3 bg-danger'>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/main' element={<Index />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact/>} /> 

    </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider,} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/cart' element={<CartPage /> } /> 
      <Route path='/checkout' element={ <CheckoutPage />} />
    </>

  )
);

function App() {
  

  return <RouterProvider router={router} />;
    
};

export default App;

{/* 
  <>
  <Promo />
<Header />
<Navbar />
<Hero />
<Search />
<ProductListings />
<Footer />
</>
*/}
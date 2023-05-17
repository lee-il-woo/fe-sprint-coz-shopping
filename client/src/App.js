import './App.css';
import Header from './component/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { initState } from './store/productSlice';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import Footer from './component/Footer';
import ProductPage from './page/ProductPage';
import BookmarkPage from './page/BookmarkPage';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  
  function fetchProduct() {
    const url = 'http://cozshopping.codestates-seb.link/api/v1/products';
    axios
      .get(url)
      .then((response) => {
        response.data.sort(function (a, b) {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        dispatch(initState(response.data));
        setIsLoading(false);
      })
      .catch(function (error) {
        console.err(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) return <div></div>;

  return (
    <div>
      <ToastContainer
        position='bottom-right'
        closeButton={true}
        autoClose={2000}
        hideProgressBar={true}
      />
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products/list' element={<ProductPage />} />
        <Route path='/bookmark' element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

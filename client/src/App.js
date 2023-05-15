import './App.css';
import Header from './features/Header';
import ProductCard from './component/ProductCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' ; 
import { useEffect } from 'react';
import axios from 'axios';
import { initState } from './store/productSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.products)

  function fetchProduct() {
    const url = "http://cozshopping.codestates-seb.link/api/v1/products";
    axios.get(url)
    .then((response)=> {
      response.data.sort(function (a, b) {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
      });
      dispatch(initState(response.data));
    })
    .catch(function(error) {
        console.err(error);
    })
  }

  useEffect(()=>{
    fetchProduct()
  },[])


  return (
    <div>
      <ToastContainer
        position="bottom-right"
        closeButton={true}
        autoClose={2000}
        hideProgressBar={true}
      />
      <Header/>
    </div>
  );
}

export default App;

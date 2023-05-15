import './App.css';
import Header from './features/Header';
import ProductCard from './component/ProductCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' ; 
const product = {
  "id": 48,
  "type": "Product",
  "title": "나이키 트레일 페가수스",
  "sub_title": null,
  "brand_name": null,
  "price": "183330",
  "discountPercentage": 40,
  "image_url": "https://images.unsplash.com/photo-1587245937293-b0510ee4c2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "brand_image_url": null,
  "follower": null
}
function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        closeButton={true}
        autoClose={2000}
        hideProgressBar={true}
      />
      <Header/>
      <ProductCard product={product}></ProductCard>
    </div>
  );
}

export default App;

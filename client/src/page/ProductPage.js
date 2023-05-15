import { useInView } from 'react-intersection-observer';
import { ProductListContainer } from './MainPage';
import { useSelector } from 'react-redux';
import ProductCard from '../component/ProductCard';
import { useState, useEffect } from 'react';
import FilterProduct from '../component/FilterProduct';
export default function ProductPage() {
  const [productIndex, setProductIndex] = useState(0);
  const [displayProducts, setDisplayProducts] = useState([]);
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const getFilterdProducts = (type)=>{
    if(type === 'every') setFilteredProducts(products)
    else{
      setFilteredProducts(products.filter(el=>el.type === type))
    }
  }
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setDisplayProducts(filteredProducts.slice(0, 12));
    setProductIndex(12);
  }, [filteredProducts]);

  useEffect(() => {
    if (inView && productIndex < filteredProducts.length) {
      const moreProducts = filteredProducts.slice(productIndex, productIndex + 12);
      setDisplayProducts((prevProducts) => [...prevProducts, ...moreProducts]);
      setProductIndex((prevIndex) => prevIndex + 12);
    }
  }, [inView]);

  return (
    <div className='flex justify-center mt-12'>
      
      <ProductListContainer>
      <FilterProduct getFilterdProducts={getFilterdProducts}/>
        <div className='flex flex-wrap mt-7 justify-between'>
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
        <div ref={ref} />
      </ProductListContainer>
    </div>
  );
}

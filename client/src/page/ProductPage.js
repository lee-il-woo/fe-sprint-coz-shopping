import { useInView } from 'react-intersection-observer';
import { ProductListContainer } from './MainPage';
import { useSelector } from 'react-redux';
import ProductCard from '../component/ProductCard';
import { useState, useEffect } from 'react';
export default function ProductPage() {
  const [productIndex, setProductIndex] = useState(0);
  const [displayProducts, setDisplayProducts] = useState([]);
  const products = useSelector((state) => state.products);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setDisplayProducts(products.slice(0, 12));
    setProductIndex(12);
  }, [products]);

  useEffect(() => {
    if (inView && productIndex < products.length) {
      const moreProducts = products.slice(productIndex, productIndex + 12);
      setDisplayProducts((prevProducts) => [...prevProducts, ...moreProducts]);
      setProductIndex((prevIndex) => prevIndex + 12);
    }
  }, [inView]);

  return (
    <div className='flex justify-center mt-12'>
      <ProductListContainer>
        <div className='flex flex-wrap'>
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
        <div ref={ref} />
      </ProductListContainer>
    </div>
  );
}

import { useInView } from 'react-intersection-observer';
import { ProductListContainer } from './MainPage';
import { useSelector } from 'react-redux';
import ProductCard from '../component/ProductCard';
import { useState, useEffect } from 'react';
import FilterProduct from '../component/FilterProduct';

export default function BookmarkPage() {
  const EVERY_TYPE = 'Every';
  const LOAD_PRODUCT_COUNT = 12;
  const bookmarks = useSelector((state) => state.bookmark);
  const [productIndex, setProductIndex] = useState(0);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(bookmarks);
  const { ref, inView } = useInView({ threshold: 0 });

  const getFilterdProducts = (type) => {
    if (type === EVERY_TYPE) setFilteredProducts(bookmarks);
    else {
      setFilteredProducts(bookmarks.filter((el) => el.type === type));
    }
  };

  useEffect(() => {
    setDisplayProducts(filteredProducts.slice(0, LOAD_PRODUCT_COUNT));
    setProductIndex(LOAD_PRODUCT_COUNT);
  }, [filteredProducts]);

  useEffect(() => {
    setFilteredProducts(bookmarks);
  }, [bookmarks]);

  useEffect(() => {
    if (inView && productIndex < filteredProducts.length) {
      const moreProducts = filteredProducts.slice(
        productIndex,
        productIndex + LOAD_PRODUCT_COUNT
      );
      setDisplayProducts((prevProducts) => [...prevProducts, ...moreProducts]);
      setProductIndex((prevIndex) => prevIndex + LOAD_PRODUCT_COUNT);
    }
  }, [inView]);

  return (
    <div className='flex justify-center mt-12'>
      <ProductListContainer>
        <FilterProduct getFilterdProducts={getFilterdProducts} />
        <div className='flex flex-wrap mt-7 justify-evenly'>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div ref={ref} />
      </ProductListContainer>
    </div>
  );
}

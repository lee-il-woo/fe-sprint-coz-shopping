import { useInView } from 'react-intersection-observer';
import { ProductListContainer } from './MainPage';
import { useSelector } from 'react-redux';
import ProductCard from '../component/ProductCard';
import { useState, useEffect } from 'react';
import FilterProduct from '../component/FilterProduct';

export default function BookmarkPage(){
    const products = useSelector((state) => state.products);
    const bookmarks = useSelector((state) => state.bookmark);
    const [productIndex, setProductIndex] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [bookmarkProducts, setBookmarkProducts] = useState(products.filter((product) => bookmarks.includes(product.id)));
    const [filteredProducts, setFilteredProducts] = useState(bookmarkProducts);
    const getFilterdProducts = (type)=>{
        if(type === 'every') setFilteredProducts(bookmarkProducts)
        else{
          setFilteredProducts(bookmarkProducts.filter(el=>el.type === type))
        }
      }
      const { ref, inView } = useInView({
        threshold: 0,
      });
      useEffect(()=>{
        setBookmarkProducts(products.filter((product) => bookmarks.includes(product.id)))
      },[bookmarks])

      useEffect(() => {
        setFilteredProducts(bookmarkProducts);
    }, [bookmarkProducts]);

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
    
    return(
        <div className='flex justify-center mt-12'>
      
        <ProductListContainer>
        <FilterProduct getFilterdProducts={getFilterdProducts}/>
          <div className={displayProducts.length < 4? 'flex flex-wrap mt-7':'flex flex-wrap mt-7 justify-between'}>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
          <div ref={ref} />
        </ProductListContainer>
      </div>
    )
}
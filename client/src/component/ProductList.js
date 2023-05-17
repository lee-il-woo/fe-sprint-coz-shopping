import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const listTitles = {
  PRODUCT: '상품 리스트',
  BOOKMARK: '북마크 리스트',
};

const generateRandomIds = (count, max) => {
  let arr = [];
  while (arr.length < count) {
    let num = Math.floor(Math.random() * max);
    if (arr.indexOf(num) === -1) arr.push(num);
  }
  return arr;
};

export default function ProductList({ listTitle }) {
  const defaultProductCount = 4;
  const bookmarks = useSelector((state) => state.bookmark);
  const products = useSelector((state) => state.products);
  const [randomIds, setRandomIds] = useState([]);

  useEffect(() => {
    if (listTitle === listTitles.PRODUCT && products.length) {
      setRandomIds(generateRandomIds(defaultProductCount, products.length));
    } else if (listTitle === listTitles.BOOKMARK) {
      if (bookmarks.length <= defaultProductCount)
        setRandomIds(bookmarks.map((el) => el.id));
      else {
        const randomBookmarkIndexs = generateRandomIds(
          defaultProductCount,
          bookmarks.length
        );
        const filteredBookmarks = bookmarks.filter((el, idx) =>
          randomBookmarkIndexs.includes(idx)
        );
        const RandomBookmarkIds = filteredBookmarks.map((el) => el.id);
        setRandomIds(RandomBookmarkIds);
      }
    }
  }, [products, bookmarks]);

  const productList = randomIds.map((id) => {
    return <ProductCard key={id} product={products[id]} />;
  });

  return (
    <>
      <p className='text-2xl font-semibold mb-3'>{listTitle}</p>
      <div className='flex'>
        {products.length === 0 && bookmarks.length === 0 ? null : productList}
      </div>
    </>
  );
}

import ProductList from '../component/ProductList';
import { styled } from 'styled-components';

export const ProductListContainer = styled.div`
  width: 67%;
  min-width: 1280px;
  max-width: 1920px;
`;

const listTitles = {
  PRODUCT: '상품 리스트',
  BOOKMARK: '북마크 리스트',
};

export default function MainPage() {
  return (
    <div className='flex justify-center mt-12'>
      <ProductListContainer>
        <ProductList listTitle={listTitles.PRODUCT} />
        <ProductList listTitle={listTitles.BOOKMARK} />
      </ProductListContainer>
    </div>
  );
}

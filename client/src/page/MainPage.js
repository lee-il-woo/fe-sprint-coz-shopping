import ProductList from '../component/ProductList';
import { styled } from 'styled-components';
import { listTitles } from '../utils/listTitles';

export const ProductListContainer = styled.div`
  width: 67%;
  min-width: 1280px;
  max-width: 1920px;
`;

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

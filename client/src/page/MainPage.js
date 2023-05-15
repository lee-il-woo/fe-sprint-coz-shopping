import ProductList from "../component/ProductList"
import { styled } from "styled-components";
const ProductListContainer = styled.div`
  width: 67%;
  min-width:1280px;
`;

export default function MainPage(){

    return(
        <div className="flex justify-center mt-12">
            <ProductListContainer>
                <ProductList listTitle='상품 리스트'/>
                <ProductList listTitle='북마크 리스트'/>
            </ProductListContainer>
        </div>
    )
}
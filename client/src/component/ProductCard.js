import './ProductCard.css'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../store/bookmarkSlice';
const StyledDiv = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 2rem;
  background: ${props => props.imageUrl ? `url(${props.imageUrl}) center / cover` : 'gray'};
  position: relative;
    div{
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 12px;
        margin-bottom: 12px;
        font-size: 24px;
    }
`;

export default function ProductCard({product}){

    const bookmarks = useSelector(state=>state.bookmark)
    const dispatch = useDispatch()

    const formatToNumber = (number)=>{
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const bookmarkIconHandler = ()=>{
        dispatch(toggleBookmark(product.id))
    }
    return(
        <div className="card-container">
            
            <StyledDiv imageUrl={product.image_url || product.brand_image_url} >
                <div onClick={()=>{bookmarkIconHandler()}} className={bookmarks.includes(product.id)? 'bookmark-check':'bookmark-uncheck'}>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </div>
            </StyledDiv>
            <div className='flex justify-between mt-1.5'>
                <div className='font-extrabold text-base'>{product.type==="Category"?'#'+product.title: product.title || product.brand_name}</div>
                <div className={product.title?'font-extrabold text-base discount-color':'font-bold text-base'}>{product.title && product.discountPercentage?product.discountPercentage+'%':product.brand_name?'관심고객수':null}</div>
            </div>
            <div className='flex justify-between'>
                <div>{product.type==="Exhibition"?product.sub_title:''}</div>
                <div>{product.price?formatToNumber(product.price)+'원':product.follower?formatToNumber(product.follower):''}</div>
            </div>
        </div>
    )
}
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../store/bookmarkSlice';
import { useState } from 'react';
import ProductModal from './ProductModal';
import {productType} from '../utils/productType'
import { formatNumberWithCommas } from '../utils/formatNumberWithCommas';

const ImageWrap = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 2rem;
  background: ${(props) =>
    props.imageurl ? `url(${props.imageurl}) center / cover` : 'gray'};
  position: relative;

  div {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 12px;
    margin-bottom: 12px;
    font-size: 1.5rem;
  }

  .bookmark-check {
    color: #ffd361;
  }
  
  .bookmark-uncheck {
    color: rgba(223, 223, 223, 0.81);
  }
`;

const CardContainer = styled.div`
  width: 16.5rem;
  height: 16.5rem;

  .card-img-wrap {
    width: 16.5rem;
    height: 13.125rem;
  }

  .discount-color {
    color: #452cdd;
  }
`;

export default function ProductCard({ product }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const bookmarks = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();
  const imgUrl = product.image_url || product.brand_image_url;
  const title = product.title || product.brand_name;
  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === product.id);

  const bookmarkIconHandler = (e) => {
    e.stopPropagation();
    dispatch(toggleBookmark(product));
  };

  return (
    <CardContainer className='mr-6'>
      {isOpenModal ? (
        <ProductModal
          imgurl={imgUrl}
          setIsOpenModal={setIsOpenModal}
          isBookmark={isBookmarked}
          bookmarkIconHandler={bookmarkIconHandler}
          title={title}
        />
      ) : null}
      <ImageWrap
        imageurl={imgUrl}
        onClick={() => {
          setIsOpenModal(!isOpenModal);
        }}
      >
        <div
          onClick={(e) => {
            bookmarkIconHandler(e);
          }}
          className={`hover:cursor-pointer ${
            isBookmarked ? 'bookmark-check' : 'bookmark-uncheck'
          }`}
        >
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
      </ImageWrap>
      <div className='flex justify-between mt-1.5'>
        <div className='font-extrabold text-base'>
          {product.type === productType.CATEGORY ? '#' + product.title : title}
        </div>
        <div
          className={
            product.title
              ? 'font-extrabold text-base discount-color'
              : 'font-bold text-base'
          }
        >
          {product.title && product.discountPercentage
            ? product.discountPercentage + '%'
            : product.brand_name
            ? '관심고객수'
            : null}
        </div>
      </div>
      <div className='flex justify-between'>
        <div>{product.type === productType.Exhibition ? product.sub_title : ''}</div>
        <div>
          {product.price
            ? formatNumberWithCommas(product.price) + '원'
            : product.follower
            ? formatNumberWithCommas(product.follower)
            : ''}
        </div>
      </div>
    </CardContainer>
  );
}

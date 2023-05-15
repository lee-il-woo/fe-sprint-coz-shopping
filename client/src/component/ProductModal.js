import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";

const ModalImage = styled.div`
  width: 58%;
  height: 58%;
  border-radius: 1rem;
  background: ${props => props.imgUrl ? `url(${props.imgUrl}) center / cover` : 'gray'};
  position: relative;
    .close-btn{
        position: absolute;
            right: 2.5%;
            top: 1.7%;
            color: #F8F8F8;
            font-size:23px;
            cursor:pointer;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    }
    .product-info{
        position: absolute;
        bottom: 0;
        left: 0;
        margin-left: 12px;
        margin-bottom: 12px;
        font-size: 1.5rem;
    }
    p{
        font-size: 1.5rem;
        color:white;
        margin-left: 8px;
    }
    .bookmark-check{
        color:#FFD361;
    }
    .bookmark-uncheck{
        color:rgba(223, 223, 223, 0.81);
    }
`;

export default function ProductModal ({imgUrl, isBookmark, setIsModal, bookmarkIconHandler, title}){
    const closeModal = (e) => {
        setIsModal(false)
    }
    const stopPropagation = (e) => {
        e.stopPropagation();
    } 
    return(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black/50" onClick={closeModal}>
          <ModalImage imgUrl={imgUrl} onClick={stopPropagation}>
            <div className='close-btn' onClick={() => setIsModal(false)}>
            <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="product-info flex items-center">
                <FontAwesomeIcon icon={faStar} onClick={bookmarkIconHandler} className={isBookmark? 'bookmark-check hover:cursor-pointer':'bookmark-uncheck hover:cursor-pointer'}></FontAwesomeIcon>
                <p>{title}</p>
            </div>
          </ModalImage>
        </div>
    )
}
import DropDown from './DropDown';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  height: 80px;
  position: relative;
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer className='w-screen flex items-center justify-between'>
        <div className='flex ml-20'>
          <div
            className='hover:cursor-pointer'
            onClick={() => {
              navigate('/');
            }}
          >
            <img
              src='/codestate_logo.png'
              alt='codestate logo'
              className='logo-image'
            ></img>
          </div>
          <div
            className='flex items-center font-bold text-3xl ml-3 hover:cursor-pointer'
            onClick={() => {
              navigate('/');
            }}
          >
            <p>COZ Shopping</p>
          </div>
        </div>
        <div className='text-3xl mr-20 hover:cursor-pointer'>
          <DropDown />
        </div>
      </HeaderContainer>
    </>
  );
}

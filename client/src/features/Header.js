import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DropDown from '../component/DropDown';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate()
  return (
    <>
      <div className='header-container w-screen flex items-center justify-between'>
        <div className='logo-wrap flex ml-20'>
          <div className='hover:cursor-pointer' onClick={()=>{navigate('/')}}>
            <img src='/codestate_logo.png' alt='codestate logo' className='logo-image'></img>
          </div>
          <div className="logo-name ml-3 hover:cursor-pointer" onClick={()=>{navigate('/')}}>
            <p>COZ Shopping</p>
          </div>
        </div>
        <div className='side-btn mr-20 hover:cursor-pointer' >
        <DropDown/>
        </div>
        
      </div>
    </>
  );
}

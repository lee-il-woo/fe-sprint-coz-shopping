import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  const navigate = useNavigate()
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2">
          <FontAwesomeIcon icon={faBars}/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div className='text-gray-700 block px-4 py-2 text-sm cursor-default'>
              안녕하세요.
            </div>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm flex items-center'
                  )}
                  onClick={()=>{navigate('/products/list')}}
                >
                  <img src="/product_icon.png" alt="product_icon" className='inline mr-1'></img> <span>상품 리스트 페이지</span>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm flex items-center'
                  )}
                  onClick={()=>{navigate('/bookmark')}}
                >
                  <img src="/bookmark_icon.png" alt="bookmark_icon" className='inline mr-1'></img><span>북마크 페이지</span>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

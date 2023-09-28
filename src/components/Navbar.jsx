import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <div id="navbar" className="px-[20px] xs:px-[50px] pt-[20px] flex sm:flex justify-between items-center">
        <div className='flex justify-between sm:justify-normal items-center gap-[30px] w-[100%] sm:max-w-max'>
          <img className='h-[32px] w-[124px] xl:h-[82px] xl:w-[174px]' src={logo} alt="Logo" />

          <ul className='hidden ss:flex items-center'>
            <li>
              <a className='text-dimWhite hover:text-white text-[16px] xl:text-[20px] mx-[15px] cursor-pointer' href="#header">Home</a>
            </li>

            <li>
              <a className='text-dimWhite hover:text-white text-[16px] xl:text-[20px] mx-[15px] cursor-pointer' href="#features-container">Features</a>
            </li>

            <li>
              <a className='text-dimWhite hover:text-white text-[16px] xl:text-[20px] mx-[15px] cursor-pointer' href="#products-container">Products</a>
            </li>

            <li>
              <a className='text-dimWhite hover:text-white text-[16px] xl:text-[20px] mx-[15px] cursor-pointer' href="#clients-container">Clients</a>
            </li>
          </ul>
        </div>

        <div className='hidden sm:flex items-center gap-[20px]'>
          <p className='text-dimWhite hover:text-white text-[16px] xl:text-[20px] font-normal cursor-pointer'>SignUp</p>
          <button className='bg-blue-gradient text-primary xl:text-[20px] font-medium px-[20px] py-[8px] rounded-[5px] hover:brightness-90'>Login</button>
        </div>


        <div id="navbar-menu" className='ss:hidden'>
          {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}


          {toggleMenu && (
            <div className="bg-[#031B34] h-[100vh] w-[200px] px-[10px] py-[20px] fixed top-0 right-0" style={{ transition: 'linear 0.5s' }}>
              <div className='flex justify-end pb-[20px]'>
                <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
              </div>

              <div>
                <ul className='flex flex-col items-start gap-[5px]'>
                  <li>
                    <a className='text-dimWhite hover:text-white text-[16px] mx-[15px] cursor-pointer' href="#header" onClick={() => setToggleMenu(false)}>Home</a>
                  </li>

                  <li>
                    <a className='text-dimWhite hover:text-white text-[16px] mx-[15px] cursor-pointer' href="#features-container" onClick={() => setToggleMenu(false)}>Features</a>
                  </li>

                  <li>
                    <a className='text-dimWhite hover:text-white text-[16px] mx-[15px] cursor-pointer' href="#products-container" onClick={() => setToggleMenu(false)}>Products</a>
                  </li>

                  <li>
                    <a className='text-dimWhite hover:text-white text-[16px] mx-[15px] cursor-pointer' href="#clients-container" onClick={() => setToggleMenu(false)}>Clients</a>
                  </li>
                </ul>
              </div>

              <div className='flex ss:hidden flex-col items-start gap-[10px] p-[15px] pt-[25px]'>
                <p className='text-dimWhite hover:text-white text-[16px] font-normal cursor-pointer'>SignUp</p>
                <button className='bg-blue-gradient text-primary font-medium px-[20px] py-[8px] rounded-[5px] hover:brightness-90'>Login</button>
              </div>
            </div>
          )}
        </div>
      </div>



    </div>
  )
}

export default Navbar;
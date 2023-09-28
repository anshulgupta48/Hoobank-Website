import logo from '../assets/logo.svg';
import { BiLogoInstagramAlt, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io'

const Footer = () => {
  return (
    <div>
      <div id="footer" className='px-[20px] xs:px-[50px]'>
        <div className="flex justify-start md:justify-between gap-[40px] md:gap-[20px] pb-[30px] flex-wrap">
          <div>
            <img src={logo} alt="Logo" className='w-[65%] xs:w-[100%] xl:w-[50%]' />
            <p className='text-dimWhite text-[16px] xs:text-[18px] xl:text-[22px] font-normal leading-[25px] xs:leading-[30px] mt-[15px] max-w-[320px] xl:max-w-[520px]'>A new way to make the payments easy, reliable and secure.</p>
          </div>

          <div>
            <h4 className='text-white text-[18px] xl:text-[22px] font-medium leading-[27px]'>Useful Links</h4>

            <ul>
              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Content</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>How it Works</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Create</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Explore</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className='text-white text-[18px] xl:text-[22px] font-medium leading-[27px]'>Community</h4>

            <ul>
              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Help Center</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Partners</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Suggestions</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Blog</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[20px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Newsletter</li>
            </ul>
          </div>

          <div>
            <h4 className='text-white text-[18px] xl:text-[22px] font-medium leading-[27px]'>Partner</h4>

            <ul>
              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[22px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Our Partner</li>

              <li className='text-dimWhite hover:text-secondary text-[16px] xl:text-[22px] font-normal leading-[24px] cursor-pointer mt-[5px] xs:mt-[10px]'>Become a Partner</li>
            </ul>
          </div>
        </div>


        <div className='py-[30px] flex flex-col md:flex-row justify-between items-center border-t-[1px] border-t-[#3F3E45]'>
          <div className='text-center'>
            <p className='text-white text-[17px] xs:text-[18px] xl:text-[22px]'>Copyright &copy; 2023 HooBank || All Rights Reserved</p>
            <p className='text-white text-[14px] xl:text-[18px]'>Design & Developed by <span className='text-gray-300 hover:text-secondary cursor-pointer'>Anshul Gupta</span></p>
          </div>

          <div className='text-dimWhite text-[22px] xl:text-[26px] hidden md:flex items-center gap-[10px]'>
            <div className='p-[8px] bg-[#3f3f46] hover:bg-[#E1306C] hover:text-white rounded-full cursor-pointer' >
              <BiLogoInstagramAlt />
            </div>

            <div className='p-[8px] bg-[#3f3f46] hover:bg-[#0a66c2] hover:text-white rounded-full cursor-pointer' >
              <BiLogoFacebook />
            </div>

            <div className='p-[8px] bg-[#3f3f46] hover:bg-[#25d366] hover:text-white rounded-full cursor-pointer' >
              <IoLogoWhatsapp />
            </div>

            <div className='p-[8px] bg-[#3f3f46] hover:bg-[#0a66c2] hover:text-white rounded-full cursor-pointer' >
              <BiLogoTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
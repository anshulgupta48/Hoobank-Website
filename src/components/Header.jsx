import percentageIcon from '../assets/percentage-icon.svg';
import headerBanner from '../assets/header-banner.png';
import arrowIcon from '../assets/arrow-icon.svg';

const Header = () => {
  return (
    <div id="header" className='px-[20px] xs:px-[50px] pt-[50px] flex flex-col lg:flex-row items-center gap-[30px]'>
      <div>
        <div className='bg-discount-gradient hidden xs:flex items-center gap-[5px] mb-[10px] md:mb-[0px] px-[12px] py-[6px] rounded-[10px] max-w-max'>
          <img className='h-[32px] w-[32px] xl:h-[52px] xl:w-[52px]' src={percentageIcon} alt="Percentage-Icon" />
          <p className='text-dimWhite text-[18px] xl:text-[22px] font-normal'><span className='text-white'>20%</span> Discount For <span className='text-white'>1 Month</span> Account</p>
        </div>

        <div className='flex items-start'>
          <h1 className='text-white text-[45px] xs:text-[60px] sm:text-[68px] md:text-[72px] xl:text-[76px] leading-[50px] xs:leading-[65px] sm:leading-[80px] md:leading-[100px] font-semibold'>The Next <span className='text-gradient'>Generation</span> Payment Method.</h1>

          <div className='mt-[40px] px-[45px] py-[50px] hidden lg:flex flex-col justify-center items-center border-2 border-solid border-[#5ce1e6] rounded-full cursor-pointer'>
            <div className='flex items-center'>
              <p className='text-gradient text-[18px] xl:text-[20px] font-medium leading-[23px]'>Get</p>
              <img className='h-[23px] w-[23px]' src={arrowIcon} alt="Arrow-Icon" />
            </div>

            <p className='text-gradient text-[18px] xl:text-[20px] font-medium leading-[23px]'>Started</p>
          </div>
        </div>

        <p className='text-dimWhite text-[16px] xs:text-[18px] xl:text-[20px] font-normal leading-[25px] xs:leading-[30px] my-[15px] xs:my-[30px]'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>


      <div className='flex justify-center'>
        <img src={headerBanner} className='w-[100%] xs:w-[70%] lg:w-full xl:max-w-[700px]' alt="Header-Banner" />
      </div>
    </div>
  )
}

export default Header;
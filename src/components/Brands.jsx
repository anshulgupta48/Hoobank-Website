import airbnbIcon from '../assets/airbnb-icon.png';
import binanceIcon from '../assets/binance-icon.png';
import coinbaseIcon from '../assets/coinbase-icon.png';
import dropboxIcon from '../assets/dropbox-icon.png';

const Brands = () => {
  return (
    <div id="brands-container" className='px-[20px] py-[50px] xs:p-[50px]'>
      <div className='flex justify-center sm:justify-between xl:justify-around items-center gap-x-[40px] gap-y-[20px] md:gap-[30px] flex-wrap'>
        <img className='w-[190px]' src={airbnbIcon} alt="Airbnb-Icon" />
        <img className='w-[190px]' src={binanceIcon} alt="Binance-Icon" />
        <img className='w-[190px]' src={coinbaseIcon} alt="Coinbase-Icon" />
        <img className='w-[190px]' src={dropboxIcon} alt="Dropbox-Icon" />
      </div>


      <div className='mt-[50px] px-[20px] py-[40px] sm:p-[50px] flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-800 rounded-[20px]'>
        <div>
          <h1 className='text-white text-[37px] xs:text-[39px] sm:text-[45px] md:text-[48px] xl:text-[60px] font-semibold leading-[50px] sm:leading-[66px] md:leading-[76px]'>Let&apos;s try our service now!</h1>
          <p className='text-dimWhite text-[16px] xs:text-[18px] xl:text-[22px] font-normal leading-[30px] my-[10px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <button className="bg-blue-gradient text-primary xl:text-[22px] font-medium max-h-max mt-[10px] sm:mt-[0px] px-[22px] py-[12px] rounded-[8px] hover:brightness-90">Get Started</button>
      </div>
    </div>
  )
}

export default Brands;
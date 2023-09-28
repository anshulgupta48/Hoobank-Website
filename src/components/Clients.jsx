import quotesIcon from '../assets/quotes-icon.svg';
import client1 from '../assets/client-1.png';
import client2 from '../assets/client-2.png';
import client3 from '../assets/client-3.png';

const Clients = () => {
  return (
    <div id="clients-container" className="px-[20px] xs:px-[50px] pt-[50px]">
      <div className="flex flex-col md:flex-row justify-between xl:justify-around items-start md:items-center">
        <h1 className="text-white text-[42px] xs:text-[48px] xl:text-[60px] font-semibold leading-[50px] xs:leading-[60px] md:leading-[70px]">What People are <br className='xl:hidden' /> saying about us</h1>
        <p className="text-dimWhite text-[16px] xs:text-[18px] xl:text-[22px] leading-[25px] xs:leading-[30px] max-w-[550px] mt-[10px] xs:mt-[0px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>


      <div className='mt-[50px] flex justify-between xl:justify-around items-center gap-[20px] xs:gap-[10px] flex-wrap'>
        <div className='p-[20px] xs:p-[40px] rounded-[15px] hover:bg-slate-800'>
          <img src={quotesIcon} alt="Quotes-Icon" />
          <p className='text-white text-[16px] xs:text-[18px] xl:text-[20px] leading-[25px] xs:leading-[32px] my-[30px] max-w-[300px] xl:max-w-[500px]'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>

          <div className='flex items-center gap-[15px]'>
            <img className='h-[48px] w-[48px] xl:h-[58px] xl:w-[58px]' src={client1} alt="Client-1" />
            <div>
              <h4 className='text-white text-[18px] xs:text-[20px] xl:text-[22px] font-semibold leading-[32px]'>Herman Jensen</h4>
              <p className='text-dimWhite text-[16px] xl:text-[18px] font-normal leading-[24px]'>Founder & Leader</p>
            </div>
          </div>
        </div>

        <div className='p-[20px] xs:p-[40px] rounded-[15px] hover:bg-slate-800'>
          <img src={quotesIcon} alt="Quotes-Icon" />
          <p className='text-white text-[16px] xs:text-[18px] xl:text-[22px] leading-[25px] xs:leading-[32px] my-[30px] max-w-[300px] xl:max-w-[500px]'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>

          <div className='flex items-center gap-[15px]'>
            <img className='h-[48px] w-[48px] xl:h-[58px] xl:w-[58px]' src={client2} alt="Client-2" />
            <div>
              <h4 className='text-white text-[18px] xs:text-[20px] xl:text-[22px] font-semibold leading-[32px]'>Steve Mark</h4>
              <p className='text-dimWhite text-[16px] xl:text-[20px] font-normal leading-[24px]'>Founder & Leader</p>
            </div>
          </div>
        </div>

        <div className='p-[20px] xs:p-[40px] rounded-[15px] hover:bg-slate-800'>
          <img src={quotesIcon} alt="Quotes-Icon" />
          <p className='text-white text-[16px] xs:text-[18px] xl:text-[22px] leading-[25px] xs:leading-[32px] my-[30px] max-w-[300px] xl:max-w-[500px]'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>

          <div className='flex items-center gap-[15px]'>
            <img className='h-[48px] w-[48px] xl:h-[58px] xl:w-[58px]' src={client3} alt="Client-3" />
            <div>
              <h4 className='text-white text-[18px] xs:text-[20px] xl:text-[22px] font-semibold leading-[32px]'>Kenn Gallagher</h4>
              <p className='text-dimWhite text-[16px] xl:text-[18px] font-normal leading-[24px]'>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients;
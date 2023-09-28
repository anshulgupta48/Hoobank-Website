import starIcon from '../assets/star-icon.svg';
import shieldIcon from '../assets/shield-icon.svg';
import sendIcon from '../assets/send-icon.svg';

const Features = () => {
  return (
    <div id="features-container" className="px-[20px] xs:px-[50px] pt-[50px] flex flex-col md:flex-row justify-between items-start md:items-center gap-[40px]">
      <div>
        <h1 className="text-white text-[42px] xs:text-[48px] xl:text-[54px] leading-[55px] xs:leading-[60px] md:leading-[70px] font-semibold">You do the business, <br className='xl:hidden' /> we&apos;ll handle the money.</h1>

        <p className="text-dimWhite text-[16px] xs:text-[18px] xl:text-[20px] leading-[30px] font-normal my-[20px] max-w-[470px]">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <button className="bg-blue-gradient text-primary xl:text-[20px] font-medium px-[22px] py-[12px] rounded-[8px] hover:brightness-90">Get Started</button>
      </div>


      <div className='flex flex-col gap-[10px]'>
        <div className='max-w-[500px] xl:max-w-[800px] px-[10px] py-[15px] xs:p-[25px] rounded-[10px] xs:rounded-[20px] flex items-start gap-[20px] hover:bg-slate-800'>
          <div className='h-[60px] w-[93px] rounded-full bg-dimBlue flex justify-center items-center'>
            <img src={starIcon} alt="Star-Icon" />
          </div>

          <div>
            <h4 className='text-white text-[18px] font-semibold leading-[23px] mb-[5px]'>Rewards</h4>
            <p className='text-dimWhite text-[16px] leading-[24px]'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
          </div>
        </div>

        <div className='max-w-[500px] xl:max-w-[800px] px-[10px] py-[15px] xs:p-[25px] rounded-[10px] xs:rounded-[20px] flex items-start gap-[20px] hover:bg-slate-800'>
          <div className='h-[60px] w-[93px] rounded-full bg-dimBlue flex justify-center items-center'>
            <img src={shieldIcon} alt="Shield-Icon" />
          </div>

          <div>
            <h4 className='text-white text-[18px] font-semibold leading-[23px] mb-[5px]'>100% Secured</h4>
            <p className='text-dimWhite text-[16px] leading-[24px]'>We take proactive steps make sure your information and transactions are secure.</p>
          </div>
        </div>

        <div className='max-w-[500px] xl:max-w-[800px] px-[10px] py-[15px] xs:p-[25px] rounded-[10px] xs:rounded-[20px] flex items-start gap-[20px] hover:bg-slate-800'>
          <div className='h-[60px] w-[93px] rounded-full bg-dimBlue flex justify-center items-center'>
            <img src={sendIcon} alt="Send-Icon" />
          </div>

          <div>
            <h4 className='text-white text-[18px] font-semibold leading-[23px] mb-[5px]'>Balance Transfer</h4>
            <p className='text-dimWhite text-[16px] leading-[24px]'>A balance transfer credit card can save you a lot of money in interest charges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
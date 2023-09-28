import product1 from '../assets/product-1.png';
import appleStore from '../assets/apple-store.svg';
import googleStore from '../assets/google-store.svg';
import product2 from '../assets/product-2.png';

const Products = () => {
  return (
    <div id="products-container" className='px-[20px] xs:px-[50px] pt-[50px]'>
      <div className='flex flex-col-reverse md:flex-row items-center gap-[30px]'>
        <div>
          <img src={product1} alt="Product-1" />
        </div>


        <div>
          <h1 className='text-white text-[36px] xs:text-[48px] xl:text-[60px] font-semibold leading-[50px] xs:leading-[66px] md:leading-[76px]'>Easily control your billing & invoicing</h1>
          <p className='text-dimWhite text-[16px] xs:text-[18px] xl:text-[22px] leading-[25px] xs:leading-[30px] max-w-[470px] my-[15px] xs:my-[30px]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className='flex flex-col xs:flex-row items-start xs:items-center gap-[10px] xs:gap-[20px]'>
            <img src={appleStore} alt="Apple-Store" />
            <img src={googleStore} alt="Google-Store" />
          </div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row items-center gap-[30px] pt-[50px]'>
        <div>
          <h1 className='text-white text-[36px] xs:text-[48px] xl:text-[60px] font-semibold leading-[45px] xs:leading-[60px] md:leading-[76px]'>Find a better card deal
            in few easy steps.</h1>
          <p className='text-dimWhite text-[16px] xs:text-[18px] xl:text-[22px] leading-[25px] xs:leading-[30px] max-w-[470px] my-[15px] xs:my-[30px]'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
          <button className="bg-blue-gradient text-primary xl:text-[22px] font-medium px-[22px] py-[12px] rounded-[8px] hover:brightness-90">Get Started</button>
        </div>


        <div>
          <img src={product2} alt="Product-2" />
        </div>
      </div>
    </div>
  )
}

export default Products;
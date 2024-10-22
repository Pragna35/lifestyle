import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {

    return (
  <>
<Carousel className='bannerDiv'>
      <Carousel.Item interval={1000}>
     <img className='banner-imgs' src="/assets/banners/banner.webp" alt="banner" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img className='banner-imgs'  src="/assets/banners/banner1.jpg" alt="banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='banner-imgs'  src="/assets/banners/banner3.jpg" alt="banner" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='banner-imgs' src="/assets/banners/banner4.jpg" alt="banner" />
      </Carousel.Item>
    </Carousel>
</> 
    )
}

export default Banner;
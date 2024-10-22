import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar.jsx'
import MensCollection from '../components/mensCollection.jsx';
import WomensCollection from '../components/womenCollection.jsx';
import Footer from '../components/footer.jsx';
import KidsCollection from '../components/kids.jsx';
import BeautyCollection from '../components/beauty.jsx';

import Banner from '../components/Banner.jsx'

 const Mens = {
    title:"Mens Collection",
    image1:"/assets/men/shirt1.jpg",
    image2:"/assets/men/shirt2.jpg",
    image3:"/assets/men/shirt3.jpg",
    image4:"/assets/men/shirt4.jpg",
    image5:"/assets/men/shirt5.jpg",
}

 const Womens = {
    title:"Womens Collection",
    image1:"/assets/women/top1.jpg",
    image2:"/assets/women/top2.jpg",
    image3:"/assets/women/top3.jpg",
    image4:"/assets/women/top4.jpg",
    image5:"/assets/women/top5.jpg",
}

const Kids = {
    title:"Kids Collection",
    image1:"/assets/kids/kid1.jpg",
    image2:"/assets/Kids/kid2.jpg",
    image3:"/assets/Kids/kid3.jpg",
    image4:"/assets/Kids/kid4.jpg",
    image5:"/assets/Kids/kid5.jpg",
}

const Beauty = {
    title:"Beauty Collection",
    image1:"/assets/beauty/beauty1.jpg",
    image2:"/assets/beauty/beauty2.jpg",
    image3:"/assets/beauty/beauty3.jpg",
    image4:"/assets/beauty/beauty4.jpg",
    image5:"/assets/beauty/beauty5.jpg",
}



const MainPage = () => {

    return (
        <>
    
        <NavBar/>
        <Banner/>
        <MensCollection mensFashion = {Mens}/>
        <WomensCollection womensFashion = {Womens}/>
        <KidsCollection kidsFashion = {Kids}/>
        <BeautyCollection beauty = {Beauty}/>
        <Footer/>
        </>
    )
}

export default MainPage;
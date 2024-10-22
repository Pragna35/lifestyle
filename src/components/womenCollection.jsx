

const WomensCollection = (props) => {



   // console.log(props,"women")
    const  {title,image1,image2,image3,image4,image5} = props.womensFashion;
    return (
     <div className="womenDiv">
        <div className="womenBanner">
            <img src='/assets/festive-banner.gif' alt="womenbanner" />
        </div>
        <h2 className="headings">{title}</h2>
        <div className="womensCollection">
           
            <img src={image1} alt="womenwear" />  
            <img src={image2} alt="womenwear" />
            <img src={image3} alt="womenwear" />
            <img src={image4} alt="womenwear" />
            <img src={image5} alt="womenwear" />
            
        </div>
     </div>
    )
}

export default WomensCollection;
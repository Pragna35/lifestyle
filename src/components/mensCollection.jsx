
 
const MensCollection = (props) => {

// console.log(props,"mens")
 const  {title,image1,image2,image3,image4,image5} = props.mensFashion;
    return (
        <div className="menDiv">
        <div className="menBanner">
            <img src='/assets/mensbanner.webp' alt="menbanner" />
        </div>
         <h2 className="headings">{title}</h2>
        <div className="mensCollection">
           
            <img src={image1} alt="menwear" />  
            <img src={image2} alt="menwear" />
            <img src={image3} alt="menwear" />
            <img src={image4} alt="menwear" />
            <img src={image5} alt="menwear" />
            
        </div>
     </div>
 
    )
}

export default MensCollection;
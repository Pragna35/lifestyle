
const KidsCollection = (props) => {

   const {title , image1,image2,image3,image4,image5} = props.kidsFashion
    console.log(props,"kids")
    return (
        <div className="kidsDiv">

            <div className="kidsBanner" id="kids">
            <img src='./assets/kidsBanner.gif' alt="kidsbanner" />
        </div>

        <h2 className="headings">{title}</h2>

        <div className="kidsCollection">
           
            <img src={image1} alt="kidswear" />  
            <img src={image2} alt="kidswear" />
            <img src={image3} alt="kidswear" />
            <img src={image4} alt="kidswear" />
            <img src={image5} alt="kidswear" />
            
        </div>  
     </div>
    )
}

export default KidsCollection;
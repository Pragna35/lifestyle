

// const beautyHeading = {
//     color:"white",
// textAlign:"center",
// margin:"1.5% 1.2%",
// padding:"10px",
// backgroundColor: "rgb(86, 90, 78)",

// }
const BeautyCollection = (props) => {

   const {title , image1,image2,image3,image4,image5} = props.beauty
    //console.log(props,"beauty")
    return (
        <div className="beautyDiv">

            <div className="beautyBanner" id="beauty">
            <img src='./assets/beautyBanner.jpg' alt="beautybanner" />
        </div>

        <h2 className="headings">{title}</h2>

        <div className="kidsCollection">
           
            <img src={image1} alt="beauty" />  
            <img src={image2} alt="beauty" />
            <img src={image3} alt="beauty" />
            <img src={image4} alt="beauty" />
            <img src={image5} alt="beauty" />
            
        </div>  
     </div>
    )
}

export default BeautyCollection;
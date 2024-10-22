

const NavBar = () => {
    return (
        <div className="headerSection">
        <div className="left">
            <div className="title">
                <h2>LifeStyle</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
          <input type="search"  placeholder="Search..."/>
        </div>
        <div className="right">
            <div className="signin">
                Signin/Signup
            </div>
            <div className="cart">
                Cart
            </div>
            <div  className="menuBtn">
            Menu
              
            </div>
        </div>
        </div>
       
    )
}

export default NavBar;
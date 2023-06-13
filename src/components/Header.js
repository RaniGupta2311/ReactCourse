const Title=()=>{
    return (
      <a href="/"><img src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7?0" alt="logo" className="logo"/></a>
    )
  }

const Header=()=>{
    return (
      <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }
  export default Header;
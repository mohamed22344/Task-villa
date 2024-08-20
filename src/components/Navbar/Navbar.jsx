import './Navbar.css'
const Navbar = () => {
  return (
    
    <>
    <div className='navbar'>
      <h2 className='title'>VILLA</h2>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Properties</li>
        <li>Property Details</li>
        <li> Contact Us</li>
      </ul>
      <div className='right-navbar'>
      <img className='img 1' src='/images/111.png'></img>
      <button>schedule a visit</button>
    </div>
      </div>
      
    </>
    
  )
}

export default Navbar
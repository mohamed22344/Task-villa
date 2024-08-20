import './Header.css'
const Header = () => {
  return (
    <>
    <div className='header'>
      <div className='Email'>
      <img  src="/images/email-icon.png" alt="" />
      <h3>info@company.com</h3>
      <h3>Sunny lsles Beach, FL33160</h3>
      </div>
               <div>
               <ul className='media-menu'>
          <li><i className="fa-brands fa-facebook"></i></li>
          <li><i className="fa-brands fa-square-twitter"></i></li>
          <li><i className="fa-brands fa-linkedin"></i></li>
          <li><i className="fa-brands fa-square-instagram"></i></li>
        </ul>
               </div>
        
          
    </div>
    <hr></hr>
    </>
    
   
  
  )
}

export default Header
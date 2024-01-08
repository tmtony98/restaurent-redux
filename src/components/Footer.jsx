import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div style={{ width:'100%',height:'300px'}} className='footer mt-5 d-flex text-primary  flex-column align-items-center justify-content-center'>
    <div className='d-flex mt-3 justify-content-evenly w-100' >
      <div style={{width:'300px'}} className='website'>
        <h1> <i class="fa-brands fa-react mx-3 fa-fade"></i>      
       Cafe Papaya</h1>
       <p>DEsigned and built with all love in the world by bootsrtap team. code liceaned by MIT </p>
      </div>

      <div className="links d-flex flex-column">
        <h4>Links</h4>
<Link to={"/"}>Home</Link>
<Link to={"/"}>Restaurent list</Link>
<Link to={"/"}>Restaurent list</Link>



      </div>
      <div className="guides d-flex flex-column">
        <h4>Guides</h4>

      </div>

    </div>
    <p style={{marginTop:'25px'}}>Copyright @2023 Media Player. Build using React.</p>
   </div>
   </>
  )
}

export default Footer
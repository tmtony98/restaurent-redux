import React from 'react'

function Header() {
  return (
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cafe Papaya</a>
   
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link  active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#"> Features </a>
      </div>
    </div>
  </div>
</nav>
</>  )
}

export default Header
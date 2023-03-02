import './Header.css';

function Header(){
return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand logo"  href="#">Veg. ShOp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link active" aria-current="page" href="#">About</a>
        <a className="nav-link active" aria-current="page" href="#">Blog</a>
        <a className="nav-link active" aria-current="page" href="#">Profile</a>
       
        
      </div>
    </div>
  </div>
</nav>


</>
);


}

export default Header;
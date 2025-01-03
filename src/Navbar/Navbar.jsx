import './Navbar.css';
import mnistry_logo from "../assets/meity-logo-2.png";

export default function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">ISEA bootcamp 2024</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link hidden" href="#">Home <span class="sr-only hidden">(current)</span></a>
                </li>
                <li class="nav-item hidden">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item hidden">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown hidden">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <img src={mnistry_logo} alt="ministry logo" srcset="" id='minisrty_logo'/>
                </ul>
            </div>
        </nav>
    );
}
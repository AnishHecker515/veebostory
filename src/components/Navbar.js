// // import React from 'react';
// // import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
// // import logo from '../assets/logo.png';  // Update with your actual logo image path
// // import background from '../assets/Group 1.png'; // Add your navbar background image
// // import '../styles/Navbar.css'; // Custom styles

// // const CustomNavbar = () => {
// //   return (
// //     <Navbar expand="lg" style={{
// //       backgroundImage: `url(${background})`, 
// //       backgroundSize: 'cover', 
// //       backgroundPosition: 'center',
// //       padding: '10px 0'
// //     }}>
// //       <Container>
// //         {/* Logo */}
// //         <Navbar.Brand href="/">
// //           <img src={logo} alt="Veebo Story Logo" width="150" />
// //         </Navbar.Brand>

// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           {/* Navigation Links */}
// //           <Nav className="mx-auto">
// //             <Nav.Link href="/">Home</Nav.Link>
// //             <Nav.Link href="/about">About us</Nav.Link>
// //             <Nav.Link href="/write">Write</Nav.Link>
// //             <Nav.Link href="/read">Read</Nav.Link>
// //             <Nav.Link href="/pricing">Pricing</Nav.Link>
// //           </Nav>

// //           {/* Language Dropdown and Sign-in Button */}
// //           <div className="d-flex align-items-center">
// //             <Dropdown className="me-2">
// //               <Dropdown.Toggle variant="light" id="dropdown-basic">
// //                 English
// //               </Dropdown.Toggle>
// //               <Dropdown.Menu>
// //                 <Dropdown.Item href="#/action-1">English</Dropdown.Item>
// //                 <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
// //               </Dropdown.Menu>
// //             </Dropdown>

// //             <Button variant="warning">
// //               Sign in <span>🔵</span>
// //             </Button>
// //           </div>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // };

// // export default CustomNavbar;



// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css"; // Import CSS file
// import logo from "../assets/logo.png"; // Ensure correct path
// import backgroundImage from "../assets/Group 1.png"; // Navbar background image

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="navbar-logo">
//           <img src={logo} alt="Veebo Story Logo" />
//         </Link>

//         {/* Navigation Links */}
//         <ul className="nav-menu">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/write">Write</Link>
//           </li>
//           <li>
//             <Link to="/read">Read</Link>
//           </li>
//           <li>
//             <Link to="/pricing">Pricing</Link>
//           </li>
//         </ul>

//         {/* Right Section (Language & Sign In) */}
//         <div className="nav-right">
//           <select className="language-select">
//             <option>English</option>
//             <option>French</option>
//           </select>
//           <button className="sign-in-btn">Sign In</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import CSS file
import logo from "../assets/logo.png"; // Ensure correct path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Veebo Story Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
          <li>
            <Link to="/read">Read</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>

        {/* Right Section (Language & Sign In) */}
        <div className="nav-right">
          <select className="language-select">
            <option>English</option>
            <option>French</option>
          </select>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
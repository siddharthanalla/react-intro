// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav} from 'react-bootstrap';

const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				backgroundColor:"#A3C1D4"
			}}>
				
				
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link href="#home" style={{color:"white"}}>
							Home
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							About
						</Nav.Link>
						<Nav.Link href="#services" style={{color:"white"}}>
							Services
						</Nav.Link>
						<Nav.Link href="#contact" style={{color:"white"}}>
							Contact
						</Nav.Link>
					</Nav>
					
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default BlogNav;

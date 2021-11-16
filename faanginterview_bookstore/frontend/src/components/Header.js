import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>FAANG INTERVIEW Tips</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='#home' active>
								Home
							</Nav.Link>
							<Nav.Link href='#about'>About</Nav.Link>
							<Nav.Link href='#guide'>Guide</Nav.Link>
							<Nav.Link href='#testimonial'>Testimonial</Nav.Link>
							<Nav.Link href='#faq'>FAQ</Nav.Link>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart'></i> Cart
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user'></i> Sign In
								</Nav.Link>
							</LinkContainer>

							<NavDropdown title='User' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									View Profile
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>Sign Out</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;

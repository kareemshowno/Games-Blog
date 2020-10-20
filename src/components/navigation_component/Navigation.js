import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';



const Navigation = () => {
 const [isSticky, setSticky] = React.useState(false);

  const ref = React.useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }

  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
	return (<Navbar ref={ref} className={isSticky ? 'sticky_nav':''} fixed='top' variant='dark'  expand='lg'>
		 <Navbar.Brand id='brand'>
		 <NavLink  to={{pathname:'/'}}>
      <FontAwesomeIcon icon={faGamepad} />
      </NavLink>
    </Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav"/>
		<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
		<Nav >
		
				<NavLink to={{pathname:'/'}} exact>	
				Home
				</NavLink>	
	
			
				<NavLink to={{pathname:'/Trailers'}}>
				Trailers
				</NavLink>
		
		
			<NavLink to={{pathname:'/Posts'}}>
			Posts
			</NavLink>
	
				
					<NavLink to={{pathname:'/Newpost'}}>
					New Post
					</NavLink>
			
		</Nav>
		</Navbar.Collapse>
	
		</Navbar>);
}

export default Navigation;
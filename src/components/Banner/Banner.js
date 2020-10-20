import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

const Banner = () => {
	return(<Container id='banner' className='banner_full d-flex justify-content-space-between' fluid>
		<Row className='align-items-center w-100'>
			<Col xs={8} md={8} lg={8} >
				<h2 style={{color:'#f22613'}} className='text-white banner_h1' >
					Welcome to our games blog,<br/>
					you can checkout posts or add new ones
					
				</h2>
			</Col>
			<Col xs={4} md={4} lg={4} className='d-flex justify-content-end'  >
			<div className='social_bar ' >
			<FontAwesomeIcon className='fa-3x p-2 social_icon'  icon={faFacebookSquare} />
			<FontAwesomeIcon className='fa-3x p-2 social_icon'  icon={faInstagram} />
			<FontAwesomeIcon className='fa-3x p-2 social_icon'  icon={faTwitter} />
			</div>
			</Col>
		</Row>
	</Container>);
}

export default Banner;

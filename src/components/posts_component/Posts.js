import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {games} from './games';
import './Posts.css';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
 class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
		
			 showModal: true,
		 game:null,
		}
	}



	render() {
					const openModal = (game) => {
   this.setState({showModal: true,game:game});
  }
 const closeModal = () => {
   this.setState({showModal: false,game:null})
  }
		return (
			<React.Fragment>
			<Container className='posts_container pt-5 ' fluid>
				<Row className='justify-content-center '>
					{this.props.games.map(game => {
						return (
							<Col className='d-flex shadow m-2 ' key={game.id} xs={12} md={4} lg={4}>
							<Container fluid className='p-0 w-100'>
							<Row className='w-100'>
					<Col xs={6} md={4} lg={6} className='img_container p-0'>
						<img width='75%'   className='img-fluid' src={game.img} alt={game.mini_desc} />
						</Col>
						<Col xs={6} md={6} className=' post_info text-center p-0'>
							<h5 className='text-white text-uppercase p-2'>{game.name}</h5>
							<p className='text-muted text-capitalize p-2'>{game.mini_desc}</p>
							<button onClick={()=> openModal(game)} className='btn btn-danger'>View Post</button>
						</Col>
						</Row>
						</Container>
							</Col>
							);
					})}
				</Row>

			</Container>
			{this.state.game !== null ? 
		 <Modal id='modal' isOpen={this.state.showModal} 
		  ariaHideApp={
    false
  /* Boolean indicating if the appElement should be hidden */}>
		<Zoom cascade>
		 <Container fluid  className='container_modal shadow py-5 '>
		<Row className='w-100'>
			<Col className='border-right' xs={12} md={12} lg={6}>
		<iframe className='img-fluid shadow rounded mx-auto ' width="600" height="300" src={this.state.game.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
			 encrypted-media; gyroscope; picture-in-picture" 
			 title='Watch_dogs_2' allowFullScreen></iframe>
			 </Col>
			
		</Row>
		<hr  />
		<Row>
			<Col xs={12} md={12} lg={12}>
			<h3  className='text-center text-uppercase'>{this.state.game.name}</h3>
			<p  className='text-center'>{this.state.game.description}</p>
			<button onClick={()=>closeModal()} className='btn btn-outline-danger text-center'>Close</button>
			</Col>
		</Row>
		</Container></Zoom>
		</Modal>: this.state.game == null}</React.Fragment>
		);
	}
}

export default Posts;

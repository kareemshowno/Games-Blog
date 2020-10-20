import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Form,Button} from 'react-bootstrap';
import './Newpost.css';



const Newpost = ({typeChange,onSubmit,name,mini_desc,description,img}) => {


	return(<Container fluid className='newpost_container pt-5 '>
		<Row>
			<Col xs={12} md={12} lg={12}>
			<h2 className='text-center pt-5 newpost_h2 text-capitalize text-danger'>how would you like to add a new post to our posts list</h2>
			</Col>
		</Row>
		<Row>
			<Col>
					<Form onSubmit={onSubmit} className='p-0 align-items-center'>
			<Container fluid className='forma mt-3 mb-3 w-50 py-5 rounded shadow'>
  <Row className=' justify-content-center '>
  <Col xs={12} md={12} lg={12}>
  <Form.Group controlId="formBasicText">
  
   
    <Form.Control onChange={typeChange}  required name='name' className='type_field' type="text" placeholder="Game Name" />
  
  </Form.Group>
  </Col>
  </Row>
<Row className=' justify-content-center'><Col xs={12} md={12} lg={12}>
  <Form.Group controlId="formBasicText">
  
    <Form.Control onChange={typeChange}  name='mini_desc' required className='type_field' type="text" placeholder="Produceing company/Date released" />
  </Form.Group>
 </Col>
   </Row><Row className=' justify-content-center'><Col xs={12} md={12} lg={12}>
  <Form.Group controlId="formBasicText">
  
    <Form.Control onChange={typeChange}  required name='img' className='type_field' type="url" placeholder="Game img url" />
  </Form.Group>
 </Col>
   </Row>
    <Row className=' justify-content-center'>
   <Col xs={12} md={12} lg={12}>
   	 <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control onChange={typeChange}  required name='description' className='type_field' as="textarea" rows={3} placeholder='Game Description' />
  </Form.Group>
   </Col></Row>
   <Row className=' justify-content-center'>
   <Col xs={12} md={12} lg={12}>
  <Button variant="danger"  type="submit">
   Add Post
  </Button></Col></Row>
  </Container>
</Form>
			</Col>
		</Row>

	</Container>);
}


export default Newpost;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Trailers.css';

	const Trailers = () => {
	return(<div className='container-fluid trailers_container pt-3 d-flex justify-content-center'>
		<div className='row w-100 py-5 mt-5'>
				<div className='col-xs-12 col-md-4 pt-3 '>
				<iframe className='img-fluid shadow rounded' width="400" height="300" src="https://www.youtube.com/embed/ssrNcwxALS4" frameBorder="0" allow="accelerometer; autoplay;
				 clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				 title='assassins_creed_valhala' allowFullScreen></iframe>
				</div>
				<div className='col-xs-12 col-md-4 pt-3'>
					<iframe className='img-fluid shadow rounded' width="400" height="300" src="https://www.youtube.com/embed/K0u_kAWLJOA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
			 encrypted-media; gyroscope; picture-in-picture" 
			 title='god_of_war_4' allowFullScreen></iframe>
				</div>
				<div className='col-xs-12 col-md-4 pt-3'>
				<iframe className='img-fluid shadow rounded' width="400" height="300" src="https://www.youtube.com/embed/5xy4n73WOMM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
			 encrypted-media; gyroscope; picture-in-picture" 
			 title='forza_horizon_4' allowFullScreen></iframe>
				</div>
				<div className='col-xs-12 col-md-4 pt-3'>
								 <iframe className='img-fluid shadow rounded' width="400" height="300" src="https://www.youtube.com/embed/eaW0tYpxyp0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
			  encrypted-media; gyroscope; picture-in-picture" 
			  title='red_dead_redemption_2' allowFullScreen></iframe>

				</div>
				<div className='col-xs-12 col-md-4 pt-3'>
			<iframe className='img-fluid shadow rounded' width="400" height="300" src="https://www.youtube.com/embed/xk69qfTRIgY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
			 encrypted-media; gyroscope; picture-in-picture" 
			 title='L.a_noire' allowFullScreen></iframe>
				</div>	<div className='col-xs-12 col-md-4 pt-3'>
			<iframe className='img-fluid shadow rounded' width="400" height="300" src="https://www.youtube.com/embed/hh9x4NqW0Dw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
			 encrypted-media; gyroscope; picture-in-picture" 
			 title='Watch_dogs_2' allowFullScreen></iframe>
				</div>
				</div>
				</div>
		);
}
export default Trailers;
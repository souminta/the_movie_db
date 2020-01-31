import React from 'react';
//import LastestMovie from './LastestMovie';

const MvList = (props) => {
	console.log(props,"MvList");
	return (
	<div className="col s12 m6 13">
		<div className="card">
			<div className="card-image waves-effect waves-block waves-light">
				{
					props.image == null ? <img src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} alt="card-image" style={{width: "50%", height: "30"}} /> :
					<img src={'https://image.tmdb.org/t/p/w185${props.image}'} alt="card-image" style={{width: "50%", height: "30"}} />
				}
			</div>
		</div>
	</div>
	)
}


export default MvList;
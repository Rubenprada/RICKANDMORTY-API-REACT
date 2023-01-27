import React from 'react';
import './Paginations.scss';

const Paginations = props => {
	return (
		<div className="endPage">
			<div className="btn_group">
				<button className="btn" onClick={props.prevPage}>
					Prev
				</button>
				<button className="btn1" onClick={props.nextPage}>
					Next
				</button>
			</div>
			<div className="paginacions">
				<p>Pagina {props.page}</p>
			</div>
		</div>
	);
};

export default Paginations;
import React from 'react';

const Paginations = props => {
	return (
		<div className="endPage">
			<div className="btn_group">
				<button className="btn" onClick={props.prevPage}>
					Prev
				</button>
				<button className="btn" onClick={props.nextPage}>
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
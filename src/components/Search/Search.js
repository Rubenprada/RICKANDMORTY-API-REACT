import React from 'react';

const Buscador = (props) => {
	const handleChange = (eve) => {
		props.searchData(eve.target.value);
	};

	return (
		<form className="formSearch">
			<input type="text" placeholder="" name="search" id="search" onChange={handleChange} />
		</form>
	);
};

export default Buscador;
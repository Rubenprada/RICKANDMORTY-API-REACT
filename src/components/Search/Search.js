import React from 'react';


const Buscador = props => {
	const handleChanges = e => {
		props.searchData(e.target.value);

	};

	return (
		
	<form action="" onSubmit={(ev) => ev.preventDefault()}>
      <input type="text" placeholder="Rick" onChange={handleChanges} value={props.search} />
    </form>
		
	);
};

export default Buscador;

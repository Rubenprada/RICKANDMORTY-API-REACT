import React from 'react';
import './Search.module.scss';



const Buscador = props => {
	const handleChanges = e => {
		props.searchData(e.target.value);

	};

	return (
	<>
	<form className= 'form__busca' action="" onSubmit={(ev) => ev.preventDefault()}>
      <input className='busca' type="text" placeholder="Rick" onChange={handleChanges} value={props.search} />
    </form>
	
	</>
		
	);
};

export default Buscador;

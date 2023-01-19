import React, { useState, useEffect } from 'react';
import './CallToApi.scss';

import Character   from '../Characters/Characters';
import Buscador from '../Search/Search';

function CallApi(){
	let urlCharacters = `https://rickandmortyapi.com/api/character/`;
	let dataURL = {
		info: {},
		character: [],
		error: '',
	};

	const [ characters, setCharacters ] = useState(dataURL);
	const [ ulr, setURL ] = useState(urlCharacters);
	const [ page, setPage ] = useState(1);

	useEffect(
		() => {
			const fetchAPI = () => {
				fetch(ulr)
					.then(res => res.json())
					.then(data => setCharacters({ character: data.results, info: data.info, error: data.error }))
					.catch(error => console.log(error));
			};
			fetchAPI();
		},
		[ ulr ]
	);

	const nextPage = () => {
		setURL(characters.info.next);
		setPage(page + 1);
		scroll();
	};

	const prevPage = () => {
		if (characters.info.prev != null) {
			setURL(characters.info.prev);
			setPage(page - 1);
			scroll();
		}
	};

	const scroll = () => {
		const elemento = document.querySelector('.container');
		elemento.scrollIntoView('auto', 'start');
	};

	const searchData = data => {
		urlCharacters = `https://rickandmortyapi.com/api/character/?name=${data}`;
		setURL(urlCharacters);
		setPage(1);
	};

	return (
		<div className="container">
			<h1 className="title">Rick and Morty</h1>
			<Buscador className="Buscador" searchData={searchData} />
			<Character character={characters} prevPage={prevPage} nextPage={nextPage} page={page} />
		</div>
	);
}

export default CallApi;

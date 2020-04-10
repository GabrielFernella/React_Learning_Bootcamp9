import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes(){
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={ Main } />
				<Route path="/repository" component={ Repository } />
			</Switch>
		</BrowserRouter>
	);
}


/*
	BroweRouter = para realizar a comunicação entre praginas
	Swith = garante que apenas uma rota seja chamada por momento
*/

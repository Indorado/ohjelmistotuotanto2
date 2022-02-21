import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Koti from './components/Koti';
import OmatMatkat from './components/OmatMatkat';
import PorukanMatkat from './components/PorukanMatkat';
import Jasenet from './components/Jasenet';
import Matkakohde from './components/Matkakohde';
import OmatTiedot from './components/OmatTiedot';


function App() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Koti/>} />
					<Route path="/OmatMatkat"element={<OmatMatkat/>} />
					<Route path="/Jasenet" element={<Jasenet/>} />
					<Route path="/Matkakohde" element={<Matkakohde/>} />
					<Route path="/PorukanMatkat" element={<PorukanMatkat/>} />
					<Route path="/OmatTiedot" element={<OmatTiedot/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

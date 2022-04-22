import { useEffect, useState } from "react"; //ScrollTop

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

//import Navbar from './components/Navbar';
import Footer from './modules/Footer';
import BootstrapNavbar from './modules/BootstrapNavbar';

import { Koti } from './components/Koti';
import OmatMatkat from './components/OmatMatkat';
import PorukanMatkat from './components/PorukanMatkat';
import Jasenet from './components/Jasenet';
import Matkakohde from './components/Matkakohde';
import OmatTiedot from './components/OmatTiedot';
import Create from "./components/create";
import CreateUser from "./components/createUser";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import UserList from "./components/userList";
import EditOmatmatkat from "./components/editOmatmatkat";
import CreateOmatmatkat from "./components/createOmatmatkat";
import TripList from "./components/tripList";

// Tähän on lisätty Bootstrap
/*<Navbar />*/
function App() {
	//Rullaa ylös nappi on piilotettu kunnes tarpeeksi alhaalla sivu
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	//Rullaa ylös
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<div className="app">
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
				integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
				crossOrigin="anonymous"
			/>
			<Router>
				<BootstrapNavbar />
				<Routes>
					<Route path="/" element={<Koti />} />
					<Route path="/OmatMatkat" element={<OmatMatkat />} />
					<Route path="/Jasenet" element={<Jasenet />} />
					<Route path="/Matkakohde" element={<Matkakohde />} />
					<Route path="/PorukanMatkat" element={<PorukanMatkat />} />
					<Route path="/OmatTiedot" element={<OmatTiedot />} />
					<Route path="/create" element={<Create />} />
					<Route path="/createUser" element={<CreateUser />} />
					<Route path="/recordList" element={<RecordList />} />
					<Route path="/userList" element={<UserList />} />
					<Route path="/edit/:id" element={<Edit />} />
					<Route path="/editOmatmatkat" element={<EditOmatmatkat />} />
					<Route path="/createOmatmatkat" element={<CreateOmatmatkat/>}/>
					<Route path="/tripList" element={<TripList />} />

				</Routes>
			</Router>
			<Footer />

			{/*ScrollUp nappi*/}
			<>
				{showButton && (
					<button onClick={scrollToTop} className="back-to-top">
						&#8679;
					</button>
				)}
			</>
		</div>


	);
}

export default App;
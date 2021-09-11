import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from '../HomePage';

import SunPage from '../SunPage';
import sun from '../../planets-better/sun.png';

import VenusPage from '../VenusPage';
import venus from '../../planets-better/venus.png';

import MercuryPage from '../MercuryPage';
import mercury from '../../planets-better/mercury.png';

import EarthPage from '../EarthPage';
import earth from '../../planets-better/earth.png';

import MarsPage from '../MarsPage';
import mars from '../../planets-better/mars.png';

import JupiterPage from '../JupiterPage';
import jupiter from '../../planets-better/jupiter.png';

import SaturnPage from '../SaturnPage';
import saturn from '../../planets-better/saturn.png';

import NeptunePage from '../NeptunePage';
import neptune from '../../planets-better/neptune.png';

import UranusPage from '../UranusPage';
import uranus from '../../planets-better/uranus.png';

import PlutoPage from '../PlutoPage';
import pluto from '../../planets-better/pluto.png';

// import Meme from '../Meme';

const gridAreas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'];
function goToMiddle(gridArea) {
	document.querySelector(`.${gridArea}`).classList.add(`isSelected`);
	document.querySelectorAll('.content').forEach((li) => li.classList.add('planetsLeave'));
	document.querySelector(`.isSelected`).classList.remove('planetsLeave');
	document.querySelector(`.isSelected`).classList.add('e');
	document.querySelector(`.isSelected`).classList.remove(`${gridArea}`);

	return;
}

function reverseSpaceTime() {
	document.querySelectorAll('.content').forEach((li) => li.classList.remove('isSelected'));
	document.querySelectorAll('.content').forEach((li) => li.classList.remove('planetsLeave'));
	document.querySelectorAll('.content').forEach((li) => li.classList.remove('e'));
	document
		.querySelectorAll('.content')
		.forEach((li, index) => li.classList.add(gridAreas[index]));
}
function App() {
	const [memes, setMemes] = useState([]);
	useEffect(() => {
		fetch(`https://meme-api.herokuapp.com/gimme/9`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setMemes(data.memes.map((mem) => mem.url));
			});
	}, []);
	// console.log(memes);

	return (
		<>
			<Router>
				<nav>
					<div id="grid-container">
						<li className="header">
							<Link to="/">
								<h1>INTERGALACTIC DANK MEMES</h1>
							</Link>
						</li>
						<li
							className="header reverse"
							onClick={() => {
								reverseSpaceTime('reverse');
							}}
						>
							<Link to="/">
								<h5>REVERSE SPACE TIME CONTINUUM</h5>
							</Link>
						</li>
						<li
							className="content a"
							onClick={() => {
								goToMiddle('a');
							}}
						>
							<Link to="/venus">
								<img src={venus} alt="mars" />
							</Link>
						</li>
						<li
							className="content b"
							onClick={() => {
								goToMiddle('b');
							}}
						>
							<Link to="/mercury">
								<img src={mercury} alt="mercury" />
							</Link>
						</li>
						<li
							className="content c"
							onClick={() => {
								goToMiddle('c');
							}}
						>
							<Link to="/earth">
								<img src={earth} alt="happy earth" />
							</Link>
						</li>
						<li
							className="content d"
							onClick={() => {
								goToMiddle('d');
							}}
						>
							<Link to="/mars">
								<img src={mars} alt="mars" />
							</Link>
						</li>
						<li
							className="content e"
							onClick={() => {
								goToMiddle('e');
							}}
						>
							<Link to="/sun">
								<img src={sun} alt="happy sun" />
							</Link>
						</li>
						<li
							className="content f"
							onClick={() => {
								goToMiddle('f');
							}}
						>
							<Link to="/jupiter">
								<img src={jupiter} alt="jupiter" />
							</Link>
						</li>
						<li
							className="content g"
							onClick={() => {
								goToMiddle('g');
							}}
						>
							<Link to="/saturn">
								<img src={saturn} alt="saturn" />
							</Link>
						</li>
						<li
							className="content h"
							onClick={() => {
								goToMiddle('h');
							}}
						>
							<Link to="/uranus">
								<img src={uranus} alt="uranus" />
							</Link>
						</li>
						<li
							className="content i"
							onClick={() => {
								goToMiddle('i');
							}}
						>
							<Link to="/neptune">
								<img src={neptune} alt="neptune" />
							</Link>
						</li>
						<li
							className="content k"
							onClick={() => {
								goToMiddle('k');
							}}
						>
							<Link to="/pluto">
								<img src={pluto} alt="pluto" />
							</Link>
						</li>
					</div>
				</nav>
				<Switch>
					<Route path="/sun">
						<SunPage />
					</Route>
					<Route path="/venus">
						<VenusPage />
					</Route>
					<Route path="/mercury">
						<MercuryPage memes={memes} />
					</Route>
					<Route path="/earth">
						<EarthPage />
					</Route>
					<Route path="/mars">
						<MarsPage />
					</Route>
					<Route path="/jupiter">
						<JupiterPage />
					</Route>
					<Route path="/saturn">
						<SaturnPage />
					</Route>
					<Route path="/uranus">
						<UranusPage />
					</Route>
					<Route path="/neptune">
						<NeptunePage />
					</Route>
					<Route path="/pluto">
						<PlutoPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;

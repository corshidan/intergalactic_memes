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

// const gridAreas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'];

function App() {
	const [memes, setMemes] = useState([]);
	const [selectedPlanet, setSelectedPlanet] = useState(null);
	const [isHidden, setIsHidden] = useState(false);

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
	function goToMiddle(planet) {
		setSelectedPlanet(planet);
		setIsHidden(true);
		return;
	}
	function reverseSpaceTime() {
		setIsHidden(false);
		setSelectedPlanet(null);
	}

	return (
		<>
			<Router>
				<nav>
					<li className="header">
						<Link to="/" onClick={reverseSpaceTime}>
							<h1>INTERGALACTIC DANK MEMES</h1>
						</Link>
					</li>
					<div className="grid-container">
						{/* <li
							className="header reverse"
							onClick={() => {
								reverseSpaceTime('reverse');
							}}
						>
							<Link to="/">
								<h5>REVERSE SPACE TIME CONTINUUM</h5>
							</Link>
						</li> */}
						<li
							className={
								selectedPlanet === 'venus'
									? 'selected a'
									: isHidden
									? 'a hidden'
									: 'a'
							}
							onClick={() => {
								goToMiddle('venus');
							}}
						>
							<Link to="/venus">
								<img src={venus} alt="mars" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'mercury'
									? 'selected b'
									: isHidden
									? 'b hidden'
									: 'b'
							}
							onClick={() => {
								goToMiddle('mercury');
							}}
						>
							<Link to="/mercury">
								<img src={mercury} alt="mercury" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'earth'
									? 'selected c'
									: isHidden
									? 'c hidden'
									: 'c'
							}
							onClick={() => {
								goToMiddle('earth');
							}}
						>
							<Link to="/earth">
								<img src={earth} alt="happy earth" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'mars'
									? 'selected d'
									: isHidden
									? 'd hidden'
									: 'd'
							}
							onClick={() => {
								goToMiddle('mars');
							}}
						>
							<Link to="/mars">
								<img src={mars} alt="mars" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'sun'
									? 'selected e'
									: isHidden
									? 'e hidden'
									: 'e'
							}
							onClick={() => {
								goToMiddle('sun');
							}}
						>
							<Link to="/sun">
								<img src={sun} alt="happy sun" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'jupiter'
									? 'selected f'
									: isHidden
									? 'f hidden'
									: 'f'
							}
							onClick={() => {
								goToMiddle('jupiter');
							}}
						>
							<Link to="/jupiter">
								<img src={jupiter} alt="jupiter" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'saturn'
									? 'selected g'
									: isHidden
									? 'g hidden'
									: 'g'
							}
							onClick={() => {
								goToMiddle('saturn');
							}}
						>
							<Link to="/saturn">
								<img src={saturn} alt="saturn" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'uranus'
									? 'selected h'
									: isHidden
									? 'h hidden'
									: 'h'
							}
							onClick={() => {
								goToMiddle('uranus');
							}}
						>
							<Link to="/uranus">
								<img src={uranus} alt="uranus" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'neptune'
									? 'selected i'
									: isHidden
									? 'i hidden'
									: 'i'
							}
							onClick={() => {
								goToMiddle('neptune');
							}}
						>
							<Link to="/neptune">
								<img src={neptune} alt="neptune" />
							</Link>
						</li>
						<li
							className={
								selectedPlanet === 'pluto'
									? 'selected k'
									: isHidden
									? 'k hidden'
									: 'k'
							}
							onClick={() => {
								goToMiddle('pluto');
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

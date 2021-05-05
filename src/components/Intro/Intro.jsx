import { Link } from "react-router-dom";
import './intro.css';

const Intro = () => {
	return (
		<header class="intro">
			<div class="header__logo-box">
				<p class="header__logo">IChatU</p>
			</div>
			<div class="header__heading-box">
				<h1 class="heading-primary">
					<span class="heading-primary--main mb-1">Next Z</span>
					<span class="heading-primary--main">Communication</span>
					<span class="heading-primary--tagline mt-2">to spice up life's essence</span>
				</h1>
				<Link to="/signup" class="button button--white button--animated mx-1">SignUp</Link> 
				<Link to='/login' class="button button--purple button--animated text-light mx-1">Login Up</Link>
			</div>
		</header>
	);
};

export default Intro;

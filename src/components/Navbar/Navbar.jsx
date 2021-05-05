import { NavLink, Link } from "react-router-dom";
import './navbar.css';

const Navbar = ({Links}) => {
	return (
		<header className="header" role="navigation" >

			<div className="container">
				<div className="logo float-left">
					<h1 className="text-light">
						<Link>
							<span>IChatYou</span>
						</Link>
					</h1>
				</div>

				<nav className="desktop-nav float-right d-flex navbar">
					<ul>
						{Links.map((link,index) =>
							(
								<li key={`a-${index}`}>
								<NavLink to={link.url} className='nav_link' >{link.text}</NavLink>
								</li>
							)
						)}
					</ul>
				</nav>

			</div>
		</header >
	);
};

export default Navbar;

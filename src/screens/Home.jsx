import React from "react";
import Footer from "../components/features/Footer";
import {ReactComponent as ClockLogo} from '../pictures/logos/clockicon.svg';
import { ReactComponent as Stars} from '../pictures/logos/Stars.svg';
import {ReactComponent as Wrench} from '../pictures/logos/logo1.svg';
import {ReactComponent as Serviceman} from '../pictures/logos/logo4.svg';
import {ReactComponent as Dollares} from '../pictures/logos/logo5.svg';



const Home = () => {
	return (
		<div className="home-container">
			<div className="header">
				<div className="header-left">
					<h1>Get your vehicle service done online at one place</h1>
					<button>Book a service</button>
					<div className="header-left-bottom">
						<ClockLogo/>
						<div className="header-left-bottom-right">
							<p>We are open</p>
							<p>Monday to Friday 9:00 AM to  10:00  AM</p>
						</div>
					</div>
				</div>
				<div className="header-right">
					<div className="quick-service">
						<div className="green-circle">
							<p>24</p>
							<p>hr</p>
						</div>
						<p>Quick service</p>
					</div>
					<div className="rating-container">
						<div className="rating">
							<p>4.5/5</p>
							<p>Rating</p>
						</div>
						<Stars/>
					</div>
				</div>
			</div>

			<div className="quote-container">
				<div className="quote-left">
					<h2>We are taking car servicing seriously</h2>
					<div className="feature">
						<Wrench/>
						<div className="feature-heading">
							<p>Convenient service</p>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
					<div className="feature">
						<Serviceman/>
						<div className="feature-heading">
							<p>Expert mechanics</p>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
					<div className="feature">
						<Dollares/>
						<div className="feature-heading">
							<p>Transparent pricing</p>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
					<div className="quote-link">
						<p>Know more about us ⟶</p>
					</div>
				</div>
				<div className="quote-right">
					<h3>Get a quote for the car service</h3>
					<div className="quote-inputs">
						<input type="text" placeholder="Enter your location"></input>
						<input type="text" placeholder="Enter your location"></input>
						<input type="text" placeholder="Enter your location"></input>
						<input type="text" placeholder="Enter your location"></input>
					</div>
					<button>Get your quote</button>
				</div>
			</div>

			<div className="process-section">
				<div className="process-left">
					<h2>We follow a clear process to help you out.</h2>
					<p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire</p>
					<button>Learn more</button>
				</div>
				<div className="process-right">
					<div className="process-right-feature">
					<div className="process-right-logo">
						<p>01</p>
					</div>
					<div className="process-right-text">
						<p>Get a Quote</p>
						<p>Through True Rich Attended does no end it his mother since real had half every.</p>
					</div>
					</div>
					<div className="process-right-feature">
					<div className="process-right-logo">
						<p>02</p>
					</div>
					<div className="process-right-text">
						<p>Book an Appointment</p>
						<p>Through True Rich Attended does no end it his mother since real had half every.</p>
					</div>
					</div>
					<div className="process-right-feature">
					<div className="process-right-logo">
						<p>03</p>
					</div>
					<div className="process-right-text">
						<p>Get your Service Done</p>
						<p>Through True Rich Attended does no end it his mother since real had half every.</p>
					</div>
					</div>
				</div>
			</div>
            <Footer/>
		</div>
	);
};

export default Home;

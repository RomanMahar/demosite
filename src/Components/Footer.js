import React from 'react';

const Footer = () => {
	return (
	<footer className="footer">
		<div className="container container-sm">
			<div className="row">
				<div className="col-12 col-lg-6 footer-inputs">
					<div className="row">
						<div className="col-12 footer-brand">
							<span className="bold-text">tooth</span><span className="light-text">meister</span>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<a href="mailto:support@toothmeister.com">support@toothmeister.com</a>
						</div>
					</div>
					<div className="row">
						<div className="col-10 input-holder">
							<input type="text" placeholder="Enter your email address" />
							<button className="btn btn-primary">
								Sign Up
							</button>
						</div>
					</div>
				</div>

				<div className="col-4 col-lg-2">
					<h6>Heading 1</h6>
					<ul className="footer-nav">
						<li className="footer-nav-item">
							<a href="#">Who We Are</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">Contact Us</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">Jobs</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">FAQ</a>
						</li>
					</ul>
				</div>

				<div className="col-4 col-lg-2">
					<h6>About</h6>
					<ul className="footer-nav">
						<li className="footer-nav-item">
							<a href="#">Who We Are</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">Contact Us</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">Jobs</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">FAQ</a>
						</li>
					</ul>
				</div>

				<div className="col-4 col-lg-2">
					<h6>Heading 3</h6>
					<ul className="footer-nav">
						<li className="footer-nav-item">
							<a href="#">Who We Are</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">Contact Us</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">Jobs</a>
						</li>
						<li className="footer-nav-item">
							<a href="#">FAQ</a>
						</li>
					</ul>
				</div>

			</div>

			<div className="row hr-rule lower-footer">
				<div className="col-12 col-lg-4"><span>© 2018 Toothmeister</span></div>
				<div className="col-12 col-lg-4">
					<a href="#">&nbsp; Terms of use &nbsp;</a>
					· 
					<a href="#">&nbsp; Privacy policy &nbsp;</a>
					·
					<a href="#">&nbsp; Trust &amp; Safety &nbsp;</a>
				</div>
				<div className="col-12 col-lg-4 social-links">
					<ul className="nav">
						<li className="nav-item">
							<a href="#" className="nav-link">
								<i class="fab fa-facebook-f"></i>
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								<i class="fab fa-twitter"></i>
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								<i class="fab fa-instagram"></i>
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								<i class="fab fa-google-plus-g"></i>
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								<i class="fab fa-linkedin-in"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	);
};

export { Footer };

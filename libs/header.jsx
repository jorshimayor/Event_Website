import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
	return (
		<header>
			<div>
				<div className="topNav">
					<Image
						alt="logo"
						src={'/images/favicon.ico'}
						width={50}
						height={50}
					/>
					<nav>
						<ul>
							<li>
								<Link
									href="/"
									passhref>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/events"
									passhref>
									Events
								</Link>
							</li>
							<li>
								<Link
									href="/about-us"
									passhref>
									About Us
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<h1>luberty event centre</h1>
			</div>
		</header>
	);
};

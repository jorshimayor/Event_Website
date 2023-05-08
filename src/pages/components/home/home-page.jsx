import Image from 'next/image';
import Link from 'next/link';

export default HomePage = ({ data }) => {
	return (
		<div className="home_body">
			{data.map((ev) => (
				<Link
					className="card"
					key={ev.id}
					href={`/events/${ev.id}`}
					passHref>
					<div className="image">
						<Image
							width={600}
							height={400}
							alt={ev.title}
							src={ev.image}
						/>
					</div>
					<div className="content">
						<h1> {ev.title} </h1>
						<p> {ev.description} </p>
					</div>
				</Link>
			))}
		</div>
	);
};

import React from "react";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Banner from "../components/About/Banner";
import Collapsible from "../components/About/Collapsible";

const About = () => {
	return (
		<>
			<div className="container">
				<Header />
				<Banner />
				<Collapsible
					open
					title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
				>
					Consectetur adipiscing elit pellentesque habitant morbi
					tristique. Pulvinar pellentesque habitant morbi tristique.
					Vel quam elementum pulvinar etiam. Pulvinar pellentesque
					habitant morbi tristique senectus et netus et. Elementum
					integer enim neque volutpat. Faucibus in ornare quam viverra
					orci sagittis. Amet volutpat consequat mauris nunc congue
					nisi vitae suscipit. Dui accumsan sit amet nulla. Proin
					sagittis nisl rhoncus mattis. Enim nulla aliquet porttitor
					lacus. Arcu odio ut sem nulla pharetra diam sit amet.
					Gravida rutrum quisque non tellus orci ac auctor augue
				</Collapsible>
			</div>
			<Footer />
		</>
	);
};

export default About;

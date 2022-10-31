import { NextPage } from "next";
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import AboutSection from "../components/home/AboutSection";
import LatestFiction from "../components/home/LatestFiction";
import LatestNonFiction from "../components/home/LatestNonFiction";
import LatestVideo from "../components/home/LatestVideo";
import PodcastSection from "../components/home/PodcastSection";
import TeamSection from "../components/home/TeamSection";
import Layout from "../components/Layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>Abudardapedia</title>
			</Head>

			{/* About */}
			<AboutSection />
			{/* Latest Video */}
			<LatestVideo />
			{/* Podcast */}
			{/* <PodcastSection /> */}
			{/* Fiction Article */}
			<LatestFiction />
			{/*Non Fiction */}
			<LatestNonFiction />
			{/* Team */}
			<TeamSection />
			{/* News Letter */}
		</Layout>
	);
};

export default Home;

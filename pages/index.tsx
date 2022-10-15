import { NextPage } from "next";
import { AppContext } from "next/app";
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import AboutSection from "../components/home/AboutSection";
import LatestArticle from "../components/home/LatestArticle";
import LatestVideo from "../components/home/LatestVideo";
import PodcastSection from "../components/home/PodcastSection";
import ShortStorySection from "../components/home/ShortStorySection";
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
			<PodcastSection />
			{/* Latest Article */}
			<LatestArticle />
			{/* Latest Short Story */}
			<ShortStorySection />
			{/* Team */}
			<TeamSection />
			{/* News Letter */}
		</Layout>
	);
};

export default Home;

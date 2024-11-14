import { GetStaticProps } from "next";
import { fetchProjects } from "../lib/fetch-projects";
import { pageContainer } from "../styles/intex.css";
import { NavBar } from "../components/nav-bar";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetchProjects();

  return {
    props: { projects },
  };
};

const Home = ({ projects }) => (
  <div className={pageContainer}>
    <NavBar />
  </div>
);

export default Home;

import { GetStaticProps } from "next";
import fetchProjects from "../lib/fetch-projects";

const Home = ({ projects }) => <div>Have fun!</div>;

export const getStaticProps: GetStaticProps = async () => {
  // fetch projects from the Database

  const projects = await fetchProjects();

  return {
    props: { projects },
  };
};

export default Home;

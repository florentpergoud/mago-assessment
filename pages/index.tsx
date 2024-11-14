import { GetStaticProps } from "next";
import { fetchProjects } from "../lib/fetch-projects";
import Image from "next/image";
import {
  createProjectButton,
  pageContainer,
  projectListItem,
  projectListItemContent,
  projectsContainer,
  projectsList,
  projectsListSideMenu,
} from "../styles/intex.css";
import { NavBar } from "../components/nav-bar";
import { SideMenu } from "../components/side-menu";
import { useState } from "react";
import { ThemeButton } from "../components/theme-button";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetchProjects();
  return {
    props: { projects },
  };
};

const Home = ({ projects }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className={pageContainer}>
      <NavBar onProjectPress={() => setIsSideMenuOpen(true)} />
      <div className={projectsContainer}>
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={() => setIsSideMenuOpen(false)}
        >
          <div className={projectsListSideMenu}>
            <ThemeButton className={createProjectButton}>
              {"Create new project +"}
            </ThemeButton>
            <div className={projectsList}>
              {projects.map((project) => (
                <ThemeButton
                  key={project.id}
                  className={projectListItem}
                  onPress={() => setSelectedProject(project)}
                >
                  <div
                    className={projectListItemContent}
                    data-active={selectedProject.id === project.id}
                  >
                    {project.name}
                    {selectedProject.id === project.id && (
                      <Image
                        src="/assets/images/check.png"
                        alt="check"
                        width={32}
                        height={32}
                      />
                    )}
                  </div>
                </ThemeButton>
              ))}
            </div>
          </div>
        </SideMenu>
      </div>
    </div>
  );
};

export default Home;

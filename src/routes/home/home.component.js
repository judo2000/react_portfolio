import { Outlet } from "react-router-dom";

import AboutMe from "../../components/aboutMe/aboutMe.component";
const Home = () => {
  return (
    <div>
      <Outlet />
      <AboutMe />
    </div>
  );
};

export default Home;

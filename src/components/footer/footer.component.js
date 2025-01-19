import Icons from "../icons/icons.component";

import "./footer.style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="footer"
      className="footer text-center"
    >
      <Icons />
      <br />
      &copy; {currentYear}. All Rights Reserved
    </footer>
  );
};

export default Footer;

import "./footer.style.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer text-center">
      <a href="/">Home</a> | <a href="/work">My Work</a> |{" "}
      <a href="/contact">Contact Me</a>
      <br />@ 2021. All Rights Reserved
    </footer>
  );
};

export default Footer;

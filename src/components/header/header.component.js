import "./header.styles.css";

export default function Header() {
  return (
    <header
      className="header mb-4"
      role="img"
      aria-label="Background image of a screen with html code"
    >
      <div className="row">
        <div className="col-lg-5 header_img centered">
          <img
            src="img/stephen_moore_london_2012.jpg"
            alt="Picture of Stephen Moore"
          />
        </div>
        <div className="col-lg-7 header_main text-center align-items-center">
          <h1 className="display_1">Stephen "Scott" Moore</h1>
          <hr />
          <h2 className="display_2">Full Stack Developer</h2>
        </div>
      </div>
    </header>
  );
}

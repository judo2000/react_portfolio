import "./header.styles.css";

export default function Header() {
  return (
    <header
      class="header mb-4"
      role="img"
      aria-label="Background image of a screen with html code"
    >
      <div class="row">
        <div class="col-lg-5 header_img centered">
          <img
            src="img/stephen_moore_london_2012.jpg"
            alt="Picture of Stephen Moore"
          />
        </div>
        <div class="col-lg-7 header_main text-center align-items-center">
          <h1 class="display_1">Stephen "Scott" Moore</h1>
          <hr />
          <h2 class="display_2">Full Stack Developer</h2>
        </div>
      </div>
    </header>
  );
}

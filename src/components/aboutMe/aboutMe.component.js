import { Outlet } from "react-router-dom";
import "./aboutMe.styles.css";
import Pdf from "../../components/resume/Stephen_Scott_Moore_resume.pdf";
const AboutMe = () => {
  return (
    <div>
      <Outlet />
      <div id="about" className="anchor">
        &nbsp;
      </div>
      <section className="about_section sect_mt4" sect_pt4>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box_shadow_full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <div className="about_img">
                          <img
                            src="/img/stephen_moore_London_2012_small.png"
                            className="img-fluid rounded shadow_about"
                            alt="Stephen Moore"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-8">
                        <div className="about_info">
                          <p>
                            <span className="title_small pe-3">Name: </span>
                            <span>Stephen Scott Moore</span>
                          </p>
                          <p>
                            <span className="title_small pe-3">Title: </span>
                            <span>Full Stack Developer</span>
                          </p>
                          <p>
                            <span className="title_small pe-3">Email: </span>
                            <span>judo2000@comcast.net</span>
                          </p>
                          <p>
                            <span className="title_small pe-3">Phone: </span>
                            <span>720.500.2644</span>
                          </p>
                          <p>
                            <span className="title_small pe-3">My Resume:</span>
                            <a href={Pdf} target="_blank">
                              <i className="far fa-file-pdf fa-2x"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skills pb-5">
                      <h4>Technical Skills</h4>
                      HTML | CSS | Bootstrap | JavaScript
                      <br />
                      React | Graphql | MySQL | Express
                      <br />
                      Node | Sequelize | jQuery | Git
                      <br />
                      Express | Handlebars | React | Graphql
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h2>About Me</h2>
                    <hr className="about_hr" />
                    <p>
                      My name is Stephen Moore. I am a full stack web developer
                      with previous experience in HTML, CSS, and Classic ASP. I
                      was completely self-taught but have recently earned a
                      Certificate in Full Stack Web Development from the
                      University of Denver coding bootcamp. I am very passionate
                      about web development and I am excited to combine my
                      experience with my new skills to provide excellent
                      experiences for the web. I am an eager learner and love to
                      help other. I often helped my classmates with homework in
                      the coding bootcamp. It felt very rewarding to help them
                      understand a concept and walking them through problems
                      helped to better my understanding as well.
                    </p>

                    <p>
                      My other passion in life is judo. I have practiced judo
                      for just over 33 years. I hold the rank of 6th degree
                      black belt and am the head instructor along with my wife
                      at{" "}
                      <a
                        href="http://www.denverjudo.com"
                        target="_blank"
                        rel="noReferrer"
                      >
                        Denver Judo
                      </a>
                      . I am also a former World and Paralympic champion and
                      have been the head coach of the USA Paralympic Judo Team
                      since 20010.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutMe;

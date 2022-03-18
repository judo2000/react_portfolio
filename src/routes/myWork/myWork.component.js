import { Outlet } from "react-router-dom";

import "./myWork.styles.css";

const MyWork = () => {
  return (
    <div>
      <Outlet />
      <section className="my_work sect_mt4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 title text-center">
              <h3 className="title">My Work</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="card col-sm-12 col-md-4 col-lg-3 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="http://judo2000-pms.herokuapp.com/"
                      target="_blank"
                      rel="noReferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/project_management.png"
                          className="card-img-top img-fluid work_img"
                          alt="Project Management System App"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">
                        Project Managment System
                      </span>
                      <br />
                      <span className="title_small_sub">
                        Expressjs, MySQLSequelize, Handlebars, CSS/Bootstrap,
                        JavaScript,
                      </span>
                      <p>
                        <a
                          href="https://github.com/judo2000/proManagementSyst"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="http://judo2000-pms.herokuapp.com/"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-sm-12 col-md-4 col-lg-3 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="http://judo2000-pms.herokuapp.com/"
                      target="_blank"
                      rel="noReferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/gigabytes.png"
                          className="card-img-top img-fluid work_img"
                          alt="Project Management System App"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">Gigabytes Tech Blog</span>
                      <br />
                      <span className="title_small_sub">
                        Expressjs, MySQLSequelize, Handlebars, CSS/Bootstrap,
                        JavaScript,
                      </span>
                      <p>
                        <a
                          href="https://github.com/judo2000/GigaBytes_tech_blog"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="http://judo2000-gigabytes.herokuapp.com/"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-sm-12 col-md-4 col-lg-3 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <div className="work_img_box">
                      <img
                        src="/img/weather_dashboard.png"
                        className="card-img-top img-fluid work_img"
                        alt="Weather Dashboard App"
                      />
                    </div>
                    <div className="card-body">
                      <span className="title_small">Weather Dashboard</span>
                      <br />
                      <span className="title_small_sub">
                        HTML, Bootstrap, JavaScript, jQuery
                      </span>
                      <p>
                        <a
                          href="https://github.com/judo2000/week6_weather_dashboard"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000.github.io/week6_weather_dashboard/"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-sm-12 col-md-4 col-lg-3 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <div className="work_img_box">
                      <img
                        src="/img/the_judo_quiz.png"
                        className="card-img-top img-fluid work_img"
                        alt="The Judo Quiz app"
                      />
                    </div>
                    <div className="card-body">
                      <span className="title_small">The Judo Quiz</span>
                      <br />
                      <span className="title_small_sub">
                        HTML, CSS/Bootstrap, JavaScript, jQuery
                      </span>
                      <p>
                        <a
                          href="https://github.com/judo2000/week4-quiz"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000.github.io/week4-quiz/"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card col-sm-12 col-md-4 col-lg-3 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="https://judo2000.github.io/week3-password-generator/"
                      target="_blank"
                      rel="noReferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/password_generator.png"
                          className="card-img-top img-fluid work_img"
                          alt="Crypto & Cocktails App"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">Password Generator</span>
                      <br />
                      <span className="title_small_sub">HTML, JavaScript</span>
                      <p>
                        <a
                          href="https://github.com/judo2000/week3-password-generator"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000.github.io/week3-password-generator/"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-sm-12 col-md-4 col-lg-3 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="https://judo2000.github.io/week5_day_planner/"
                      target="_blank"
                      rel="noReferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/day_planner.png"
                          className="card-img-top img-fluid work_img"
                          alt="Crypto & Cocktails App"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">Day Planner</span>
                      <br />
                      <span className="title_small_sub">
                        HTML, CSS/Bootstrap, JavaScript, jQuery
                      </span>
                      <p>
                        <a
                          href="https://github.com/judo2000/week5_day_planner"
                          rel="noReferrer"
                          target="_blank"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000.github.io/week5_day_planner/"
                          target="_blank"
                          rel="noReferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
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
export default MyWork;

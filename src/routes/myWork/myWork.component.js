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
                <div className="card col-sm-12 col-md-4 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="https://judo2000-project-mgnt.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
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
                        A full stack project management system that allows uses
                        to create projects, add and remove tasks from the
                        project and make tasks as complete.
                      </p>
                      <p>
                        <a
                          href="https://github.com/judo2000/proManagementSyst"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000-project-mgnt.herokuapp.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-sm-12 col-md-4 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="https://judo2000-gigabytes.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
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
                        About Ful stack CMS -styled tech blog for developers to
                        post articles about technology. Users can edit and
                        delete their own articles as well as comment on other
                        users' posts.
                      </p>
                      <p>
                        <a
                          href="https://github.com/judo2000/GigaBytes_tech_blog"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="http://judo2000-gigabytes.herokuapp.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-sm-12 col-md-4 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="https://judo2000.github.io/weather_dashboard/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/weather_dashboard.png"
                          className="card-img-top img-fluid work_img"
                          alt="Weather Dashboard App"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">Weather Dashboard</span>
                      <br />
                      <span className="title_small_sub">
                        HTML, Bootstrap, JavaScript, jQuery
                      </span>
                      <p>
                        An app allows users to view a 5-day forecast using the
                        OpenWeatherMap api. The app also uses local storage to
                        save searched cities.
                      </p>
                      <p>
                        <a
                          href="https://github.com/judo2000/weather_dashboard"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000.github.io/weather_dashboard/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-sm-12 col-md-4 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="https://judo2000.github.io/Judo-Quiz/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/the_judo_quiz.png"
                          className="card-img-top img-fluid work_img"
                          alt="The Judo Quiz app"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">The Judo Quiz</span>
                      <br />
                      <span className="title_small_sub">
                        HTML, CSS/Bootstrap, JavaScript, jQuery
                      </span>
                      <p>
                        A quiz app built with JavaScript that gives users a set
                        amount of time to answer questions and removes 10
                        seconds with ever wrong answer.
                      </p>
                      <p>
                        <a
                          href="https://github.com/judo2000/Judo-Quiz"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000.github.io/Judo-Quiz/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card col-sm-12 col-md-4 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="https://judo2000.github.io/Password-Generator/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/password_generator.png"
                          className="card-img-top img-fluid work_img"
                          alt="Password Generator"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">Password Generator</span>
                      <br />
                      <span className="title_small_sub">HTML, JavaScript</span>
                      <p>
                        A JavaScript password generator that allows users to
                        pick characters types and length, then returns a random
                        password.
                      </p>
                      <p>
                        <a
                          href="https://github.com/judo2000/password-generator"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000.github.io/Password-Generator/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Project
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card col-sm-12 col-lg-4 mx-md-4 my-4 py-1">
                  <div className="work_box">
                    <a
                      href="https://judo2000.github.io/day_planner/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/day_planner.png"
                          className="card-img-top img-fluid work_img"
                          alt="Day Planner"
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
                        {" "}
                        A JavaScript app that uses the moments.js API to display
                        the hours of the current day and uses local storage to
                        save a user's daily schedule.
                      </p>
                      <p>
                        <a
                          href="https://github.com/judo2000/day_planner"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://judo2000.github.io/day_planner/"
                          target="_blank"
                          rel="noreferrer"
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

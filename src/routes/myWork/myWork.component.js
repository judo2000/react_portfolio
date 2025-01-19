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
                      href="https://matscout.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="work_img_box">
                        <img
                          src="/img/matscout_screenshot.png"
                          className="card-img-top img-fluid work_img"
                          alt="Weather Dashboard App"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">MatScout</span>
                      <br />
                      <span className="title_small_sub">
                        HTML, Bootstrap, JavaScript, React, MongoDB
                      </span>
                      <br />
                      <br />
                      <p>
                        This is a MERN application that allows coaches to create
                        teams and add athletes. Coaches can create scouting
                        reports for their athletes. Athletes can also create
                        accounts and join/create teams and track and display
                        match results. Teams and athlete profiles can be public
                        or private.
                      </p>
                      <p>
                        This project is currently under construction. I am
                        hoping to have this project finished by the end of
                        March, 2025.
                      </p>
                      <p>The repository is private</p>
                      <p>
                        <a
                          href="https://matscout.com/"
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
                          src="/img/amazona-home.png"
                          className="card-img-top img-fluid work_img"
                          alt="Amazona - Amazone Clone"
                        />
                      </div>
                    </a>
                    <div className="card-body">
                      <span className="title_small">
                        Amazona Ecommerce Site
                      </span>
                      <br />
                      <span className="title_small_sub">
                        Expressjs, MongoDB, React, CSS/Bootstrap, JavaScript
                      </span>
                      <p>
                        This app allows user to add products for sale with
                        product images stored on Cloudinary.com. Users can
                        create accounts and purchase products using the PayPal
                        API.
                      </p>
                      <p>
                        <a
                          href="https://github.com/judo2000/amazona-2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github Repository
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://mern-amazona2-judo2000.herokuapp.com/"
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
                        This app allows users to view a 5-day forecast using the
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

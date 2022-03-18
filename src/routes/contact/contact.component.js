const Contact = () => {
  return (
    <section className="contact_me sect_mt4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3 className="title">Contact Me</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card col-10 mb-4 pb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="title_small pb-2">Send Me a Message:</div>
                  <form
                    action="mailto:someone@example.com"
                    method="post"
                    enctype="text/plain"
                  >
                    <div className="mb-3">
                      <label for="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="form-control"
                        name="message"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button type="send" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-sm-12 col-md-6 pt-sm-5">
                  <div className="title_small pb-2">Get in touch with me:</div>
                  <p className="text-dark">
                    <i className="fas fa-envelope fa-lg pe-3"></i>
                    <a href="mailto:judo2000@comcast.net">
                      judo2000@comcast.net
                    </a>
                  </p>
                  <p className="text-dark">
                    <i className="fas fa-mobile-alt fa-lg pe-3"></i>
                    720.500.2644
                  </p>

                  <p className="text-dark">
                    <a
                      href="https://www.linkedin.com/in/stephen-moore-ply-mcis-b94bab18/"
                      target="_blank"
                      className="pe-3"
                    >
                      <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/judo2000" target="_blank">
                      <i className="fab fa-github fa-2x"></i>
                    </a>
                  </p>
                  <p className="text-dark"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

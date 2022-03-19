import { useState } from "react";
import emailjs from "emailjs-com";

import Icons from "../../components/icons/icons.component";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (name === "name") {
      return setName(value);
    } else if (name === "email") {
      return setEmail(value);
    } else if (name === "subject") {
      return setSubject(value);
    } else if (name === "message") {
      return setMessage(value);
    }
  };

  const handleBlur = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (value === "") {
      alert(`${name} cannot be blank`);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_50q7t4j",
        "template_0a3rkwk",
        e.target,
        "Ks2sBCa5CIPhtiwHp"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    alert("Your email has been sent to Stephen and you have been cc'd. ");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

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
                  <form onSubmit={sendEmail} method="post" encType="text/plain">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        name="name"
                        placeholder="Name"
                        required
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        name="email"
                        placeholder="Email"
                        aria-describedby="emailHelp"
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={subject}
                        placeholder="Subject"
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        value={message}
                        className="form-control"
                        name="message"
                        placeholder="Your Message"
                        onBlur={handleBlur}
                        onChange={handleInputChange}
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
                  <Icons />

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

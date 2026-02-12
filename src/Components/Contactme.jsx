import { useEffect, useState } from "react";
import "../stylesheets/contactme.css";

function Contactme() {
  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false,
      );
    });
  }, []);
  let [status, setStatus] = useState("");
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [message, setMessage] = useState("");

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const formData = { name: name, email: email, message: message };
  //   const response = await fetch("https://formspree.io/f/mpqjqvny", {
  //     method: "POST",
  //     body: formData,
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });
  //   if (response.ok) {
  //     setStatus("Message Sent Successfully!");
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   } else {
  //     setStatus("Some error occurred!");
  //   }
  // }
  return (
    <div id="Contactme" className="section">
      <h2 className="section text-4xl font-semibold text-center mt-40">
        Contact Me
      </h2>
      <h2 style={{ fontSize: "1rem", opacity: 0.6 }} className="text-center">
        Get In Touch
      </h2>
      <div className="contact">
        <div className="left-container">
          <h3 className="section text-md font-semibold text-center ">
            Talk To Me
          </h3>
          <div className="box shadyborder">
            <i class="fa-solid fa-envelope"></i>
            <p>Email</p>
            <p>santhoshbojanapally@gmail.com</p>
            <button style={{ backgroundColor: "transparent" }}>
              <a href="mailto:santhoshbojanapally@gmail.com?subject=Hello%20Santhosh&body=Hi%20Santhosh,%0A%0A">
                Write to me
              </a>
            </button>
          </div>
          <div className="box shadyborder">
            <i class="fa-brands fa-linkedin"></i>
            <p>LinkedIn</p>
            <span style={{ textDecoration: "none", color: "black" }}>
              <a href="https://www.linkedin.com/in/bojanapally-santhoshkumar/">
                Let's Connect!
              </a>
            </span>
          </div>
        </div>
        <div style={{ textAlign: "center", width: "20rem" }}>
          <h2 className="section text-md font-semibold text-center ">
            Write Me Your Message
          </h2>
          <form
            className="section contactme needs-validation"
            noValidate
            action="https://formspree.io/f/mpqjqvny"
            method="POST"
          >
            <div className="coolinput mb-3">
              <label htmlFor="name" className="text form-label">
                Name:
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="John Doe"
                required
              />
              <div className="invalid-feedback">Please enter a valid name.</div>
            </div>

            <div className="coolinput mb-3">
              <label htmlFor="email" className="text form-label">
                Email:
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Johndoe@yahoo.com"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email.
              </div>
            </div>

            <div className="coolinput mb-3">
              <label htmlFor="message" className="text form-label">
                Write Your Message:
              </label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="6"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
                style={{ borderRadius: "10px", border: "2px solid black" }}
              ></textarea>
              <div className="invalid-feedback">
                Please enter a valid message.
              </div>
            </div>

            <button className="btn btn-dark" type="submit">
              Send &nbsp;<i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactme;

import { React, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server
      await axios.post('/sms', {
        fullname,
        email,
        message,
      });

      // Reset form input values
      setFullname('');
      setEmail('');
      setMessage('');

      // Display a success message or perform any other desired action
      alert('Message sent successfully!');
    } catch (error) {
      // Handle any error that occurred during form submission
      console.error('Error submitting form:', error);
      alert('An error occurred while sending the message. Please try again.');
    }
  };


  return (
    <Container id="footer">
      <Profile>
        <Zoom delay={1}>
          <h1>Portfolio</h1>
        </Zoom>
        <div className="address">
          <Zoom >
            <h1>Address:</h1>
          </Zoom>
          <Zoom>
            <p>Migdal Ha Emek, Israel</p>
          </Zoom>
        </div>
        <div className="links">
          <Zoom>
            <h1>Contact me directly:</h1>
          </Zoom>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Zoom>
              <a href="tel:+972509525201">+972 50 952 5201</a>
            </Zoom>
          </div>
          <div>
            <Zoom>
              <span>
                <HiOutlineMailOpen />
              </span>
            </Zoom>
            <Zoom>
              <a href="mailto:yuvalleberstein21@gmail.com">yuvalleberstein21@gmail.com</a>
            </Zoom>
          </div>
        </div>
        <div className="profiles">
          <Fade>
            <h1>Check my profiles</h1>
          </Fade>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/yuvalleberstein21">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/yuval-leberstein/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
        <Fade>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input
                type="text"
                placeholder="Fullname..."
                value={fullname}
                onChange={handleFullnameChange}
              />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input
                type="email"
                placeholder="Email..."
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea
                cols="30"
                rows="10"
                placeholder="Message..."
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Fade>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
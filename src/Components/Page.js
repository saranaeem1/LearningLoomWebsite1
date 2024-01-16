
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import FaqImage from "../Assets/faq1.png";
import webdev from "../Assets/web-dev.jpg";
import homebg from "../Assets/girlbg.png";
import appdev from "../Assets/app-dev.jpg";
import graphic from "../Assets/graphic-design.jpg";
import teacher1 from "../Assets/t1.jpg";
import teacher2 from "../Assets/t2.jpg";
import teacher3 from "../Assets/t3.jpg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import aboutusImage from "../Assets/aboutus.jpg";
import "./page.css";
 

const FAQSection = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="FAQ">
      <div className="FAQcontainer">
        <h1 className="title">Frequently Asked Questions</h1>
        <div className="FAQandImg_container">
          <div className="faq-img-container">
            <img src={FaqImage} alt="" className="faq-img" />
          </div>
          <div className="faq-content">
            {faqData.map((faq, index) => (
              <div key={index} className="question-answer">
                <div className="question">
                  <h3 className="title-question">{faq.question}</h3>
                  <button
                    className="question-btn"
                    onClick={() => toggleAnswer(index)}
                  >
                    <span
                      className={`up-icon ${
                        activeIndex === index ? "show-text" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faChevronUp} />
                    </span>
                    <span
                      className={`down-icon ${
                        activeIndex !== index ? "show-text" : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </button>
                </div>
                <div
                  className={`answer ${
                    activeIndex === index ? "show-text" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Main = () => {

  {
    /* For FAQ */
  }
  const faqData = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus deserunt dolor facilis. Itaque saepe modi quaerat? Modi veniam sunt corporis!",
    },
    {
      question:
        "Are the courses self-paced or do they have a specific schedule?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis temporibus minus esse, nam provident porro ratione aliquid distinctio quisquam.",
    },
    {
      question: "Is there a fee for enrolling in courses?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, iusto.",
    },
    {
      question: "How can I contact if I have a query?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus consectetur officia perferendis consequuntur dolorum, temporibus non porro autem minus.",
    },
  ];
  
  const MainContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  `;

  const SectionContainer = styled.div`
    margin-bottom: 100px;
    text-align: center;
  `;

  const SectionTitle = styled.h2`
    font-size: 2em;
    margin-bottom: 20px;
    display: inline-block;
  `;

  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  const Card = styled.div`
    width: 250px;
    margin: 10px;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

  const CardImage = styled.img`
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
  `;

  return (
    <>
      <section>
        <div className="HomePageContainer">
          <div className="HomePageContent">
            <h1>Embark on a Journey of Learning with Learning Loom</h1>
            <p>
              Explore a world of knowledge and skills through our diverse range
              of courses designed to help you succeed. Whether you're a beginner
              or an expert, we have something for everyone.
            </p>
            <button className="ExploreButton">Explore</button>
          </div>
          <div className="HomePagePic">
            <img src={homebg} alt="" className="Homeimage" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <MainContainer>
        <SectionContainer>
          <SectionTitle id="courses">Courses</SectionTitle>
          <CardContainer>
            <Card className="CourseCard">
              <CardImage src={webdev} alt="Course 1" />
              <h3>Web Development</h3>
              <p>
                Elevate your digital prowess with our Web Development course —
                where the art of design meets the magic of code.
              </p>
            </Card>

            <Card className="CourseCard">
              <CardImage src={graphic} alt="Course 2" />
              <h3> Graphic Designing </h3>
              <p>
                Unleash your creativity and master the art of visual
                storytelling in our Graphic Designing course.
              </p>
            </Card>

            <Card className="CourseCard">
              <CardImage src={appdev} alt="Course 3" />
              <h3>App Development</h3>
              <p>
                Embark on a coding odyssey and shape the future with our App
                Development course.
              </p>
            </Card>

            {/* Add more Course components as needed */}
          </CardContainer>
        </SectionContainer>

        <SectionContainer id="instructors">
          <SectionTitle>Course Instructors</SectionTitle>
          <CardContainer>
            <Card className="Teachercard">
              <CardImage src={teacher1} alt="Teacher 1" />
              <h3>Elizabeth Alaister</h3>
              <h5>'App Development Teacher '</h5>
              <p>Passionate about inspiring students to learn.</p>
            </Card>

            <Card className="Teachercard">
              <CardImage src={teacher2} alt="Teacher 2" />
              <h3>Anna Michael </h3>
              <h5>'Graphic Designing Teacher '</h5>

              <p>
                Famous for transforming ideas into visually stunning realities.
              </p>
            </Card>

            <Card className="Teachercard">
              <CardImage src={teacher3} alt="Teacher 3" />
              <h3>Andrew Davidson </h3>
              <h5>'Web Development Teacher '</h5>
              <p>Expert in making complex concepts easy to understand.</p>
            </Card>

            {/* Add more Teacher components as needed */}
          </CardContainer>
        </SectionContainer>
      </MainContainer>
      {/* About Us Section */}
      <section id="about" className="aboutus">
        <div className="aboutusPic" id="aboutus_img">
          <div style={{ backgroundImage: `url(${aboutusImage})` }}></div>
        </div>
        <div className="aboutusContent">
          <h1>About Us</h1>
          <p>
            Welcome to SkillSprint, where continuous learning propels
            individuals toward their goals. Our dynamic platform is a premier
            destination for transformative experiences, offering essential
            skills in various fields. Whether you're a seasoned professional or
            a new learner, SkillSprint provides diverse courses curated by
            industry experts. We're committed to fostering an enriching and
            accessible learning environment, empowering you on an educational
            adventure where innovation meets expertise. Join us to reach new
            heights in personal and professional development.
          </p>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricingHeading">
          <h1>Choose the Perfect Plan For You</h1>
        </div>
        <div className="pricingContainer">
          <PricingCard
            title="Beginner"
            icon="fa-book"
            price="25"
            options={[
              { text: "Access to 10 Courses", available: true },
              { text: "3 Assignments", available: true },
              { text: "Forum Support", available: true },
              { text: "Personal Tutor", available: false },
            ]}
          />
          <PricingCard
            title="Intermediate"
            icon="fa-graduation-cap"
            price="50"
            options={[
              { text: "Access to 20 Courses", available: true },
              { text: "5 Assignments", available: true },
              { text: "Forum Support", available: true },
              { text: "Personal Tutor", available: false },
            ]}
          />
          <PricingCard
            title="Advanced"
            icon="fa-trophy"
            price="100"
            options={[
              { text: "Unlimited Course Access", available: true },
              { text: "Unlimited Assignments", available: true },
              { text: "Priority Forum Support", available: true },
              { text: "Personal Tutor Included", available: true },
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection id="feedback" faqData={faqData} />

      {/* Contact us Section */}

      <section id="ContactContainer">
        <div className="box-wrapper">
          <div className="contact-info-wrap">
            <h2 className="contact-info-title">Contact Information</h2>
            <h3 className="contact-info-subtitle">
              Here is the contact information
            </h3>
            <ul className="contact-info-details">
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>Phone:</span> <a href="tel:+12345678">+1234567898</a>
              </li>
              <li>
                <i className="fas fa-paper-plane"></i>
                <span>Email:</span>{" "}
                <a href="mailto:questionaire@gmail.com">
                  skillsprint@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-globe"></i>
                <span>Website:</span> <a href="#">website.com</a>
              </li>
            </ul>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form-wrap">
            <h1>Contact Us</h1>
            <form action="" method="POST">
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <input type="submit" name="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;





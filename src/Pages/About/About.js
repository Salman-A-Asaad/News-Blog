import React from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
import image from "../../Assests/member_1.jpg";
import {
  BsFillTelephoneFill,
  BsEnvelopeAtFill,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
const About = () => {
  const dataAbout = [
    {
      qus: "Who We Are",
      ans: (
        <p className=" text-secondary ms-lg-2">
          At News Blog, we are passionate about delivering accurate and engaging
          news to our readers. Our team of dedicated journalists and writers is
          committed to providing you with the latest updates on a wide range of
          topics, from breaking news to in-depth analysis.
        </p>
      ),
    },
    {
      qus: "Our Mission",
      ans: (
        <p className=" text-secondary ms-lg-2">
          Our mission is to keep you informed and inspired. We believe in the
          power of information to empower individuals and shape a better world.
          Through our carefully curated content, we aim to spark conversations,
          foster understanding, and encourage a well-informed community.
        </p>
      ),
    },
    {
      qus: "What Sets Us Apart",
      ans: (
        <p className=" text-secondary ms-lg-2">
          <span className=" text-success fw-bold">Unbiased Reporting:</span> We
          strive to present news in a fair and unbiased manner, allowing our
          readers to form their own opinions.
          <br />
          <span className=" text-success fw-bold">
            Diverse Perspectives:
          </span>{" "}
          Our team comes from diverse backgrounds, bringing unique perspectives
          to our coverage. readers to form their own opinions.
          <br />
          <span className=" text-success fw-bold">Quality Journalism: </span> We
          uphold the highest standards of journalism, ensuring that our content
          is well-researched, accurate, and reliable.
        </p>
      ),
    },
  ];
  return (
    <div className="container py-5">
      <H2 className="text-center text-capitalize mb-3">about news blog</H2>
      {dataAbout.map((ele, index) => {
        return (
          <div key={index}>
            <H3>{ele.qus}</H3>
            {ele.ans}
          </div>
        );
      })}
      <H3 className="mt-4">Our Team</H3>
      <CardMemer className="card">
        <img className="card-img-top" src={image} alt="member_1" />
        <div className="card-body">
          <div className="">
            <div className="mb-2">
              <FullName>full name: </FullName>
              <span className=" text-secondary fw-bold text-capitalize">
                salman asaad
              </span>
            </div>
            <div className="mb-2">
              <CallAndEmailIcons>
                <BsFillTelephoneFill />
              </CallAndEmailIcons>
              <span className=" text-secondary fw-bold">+963988514601</span>
            </div>
            <div className="mb-2">
              <CallAndEmailIcons>
                <BsEnvelopeAtFill />
              </CallAndEmailIcons>
              <span className=" text-secondary fw-bold">
                salman.a.a.601@gmail.com
              </span>
            </div>
            <div className=" text-center">
              <a
                rel="noopener noreferrer"
                className=" text-decoration-none"
                href="https://www.facebook.com/profile.php?id=100010923374122"
                target="_blank"
              >
                {" "}
                <MediaIcons>
                  <BsFacebook />
                </MediaIcons>
              </a>
              <a
                rel="noopener noreferrer"
                className=" text-decoration-none"
                href="https://www.linkedin.com/in/salman-asaad-7695932a2/"
                target="_blank"
              >
                {" "}
                <MediaIcons>
                  <BsLinkedin />
                </MediaIcons>
              </a>
              <a
                rel="noopener noreferrer"
                className=" text-decoration-none"
                href="https://github.com/Salman-A-Asaad"
                target="_blank"
              >
                {" "}
                <MediaIcons>
                  <BsGithub />
                </MediaIcons>
              </a>
            </div>
          </div>
        </div>
      </CardMemer>
    </div>
  );
};
const H2 = styled.h2`
  color: ${mainColor};
`;
const H3 = styled.h3`
  color: ${mainColorHover};
`;
const FullName = styled.span`
  color: ${mainColor};
  text-transform: capitalize;
  font-weight: bold;
`;
const CallAndEmailIcons = styled.span`
  color: ${mainColor};
  font-size: 20px;
  margin-right: 5px;
`;
const MediaIcons = styled(CallAndEmailIcons)`
  margin-right: 15px;
  transition: all 0.5s;
  &:hover {
    color: ${mainColorHover};
  }
`;
const CardMemer = styled.div`
  width: 100%;
  max-width: 325px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export default About;

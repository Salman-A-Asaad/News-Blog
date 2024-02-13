import React, { useRef } from "react";
import styled from "styled-components";
import { mainColor, mainColorHover } from "../../Styles/index";
import {
  BsFillTelephoneFill,
  BsEnvelopeAtFill,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";
import { FAQs } from "../../Components/index";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
const Contact = () => {
  const userNameRef = useRef();
  const emailSenderRef = useRef();
  const messageRef = useRef();
  const handleSendMessage = async () => {
    const userName = userNameRef.current.value;
    const emailSender = emailSenderRef.current.value;
    const message = messageRef.current.value;
    if (!userName || !emailSender || !message) {
      return toast.error("Fill all required fields");
    } else {
      try {
        const colRef = collection(fireDB, "email");
        await toast.promise(
          addDoc(colRef, {
            emailSender: emailSender,
            message: message,
            userName: userName,
          }),
          {
            loading: "Sending...",
            success: <b>Sent</b>,
            error: <b>Could not Send.</b>,
          }
        );
        userNameRef.current.value = "";
        emailSenderRef.current.value = "";
        messageRef.current.value = "";
      } catch (error) {
        toast.error("Message Failed");
        console.log(error);
      }
    }
  };
  const faqData = [
    {
      id: "1",
      question: "How often is the news updated?",
      answer:
        "We strive to update our news content regularly, typically multiple times a day to provide you with the latest information.",
    },
    {
      id: "2",
      question: "Can I submit a news tip or story idea?",
      answer:
        "Absolutely! We encourage our readers to submit news tips or story ideas. You can reach out to us through our contact page.",
    },
    {
      id: "3",
      question: "Are the news articles fact-checked?",
      answer:
        "Yes, we are committed to providing accurate and reliable information. Our team follows a thorough fact-checking process before publishing any news articles.",
    },
  ];
  return (
    <div className="container py-5">
      <H2 className="text-center text-capitalize mb-3">
        get in touch with news blog
      </H2>
      <p className="text-center text-secondary mb-5">
        Have questions, feedback, or a news tip? We'd love to hear from you!
      </p>
      <div className="row mb-5">
        <div className="mb-sm-4 col-sm-12 col-md-6 col-lg-6">
          <form action="">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <Input
                ref={userNameRef}
                id="name"
                type="text"
                placeholder="Name"
                name="name"
              />
              <Input
                ref={emailSenderRef}
                id="email"
                type="email"
                placeholder="Email"
                name="email"
              />
              <TextArea
                ref={messageRef}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></TextArea>
            </div>
            <div className="d-flex align-item-end justify-content-center mt-3">
              <SendButton onClick={handleSendMessage} type="button">
                send
              </SendButton>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-center mt-sm-5">
          <H3 className="text-capitalize mb-2">our address</H3>
          <p className="text-secondary fs-5 mb-5">Syria-Latakia-Jablah</p>
          <div className="mb-2">
            <CallAndEmailIcons>
              <BsFillTelephoneFill />
            </CallAndEmailIcons>
            <span className=" text-secondary fw-bold">+963988514601</span>
          </div>
          <div className="mb-5">
            <CallAndEmailIcons>
              <BsEnvelopeAtFill />
            </CallAndEmailIcons>
            <span className=" text-secondary fw-bold">
              salman.a.a.601@gmail.com
            </span>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      <div className="accordion" id="accordionFAQs">
        <H3 className="text-capitalize mb-4 text-center">FAQs</H3>
        {faqData.map((ele, index) => {
          return <FAQs key={index} faqs={ele} />;
        })}
      </div>
    </div>
  );
};
const H2 = styled.h2`
  color: ${mainColor};
`;
const H3 = styled.h3`
  margin-top: 20px;
  color: ${mainColor};
  font-weight: 400;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${mainColor};
  margin-bottom: 10px;
  width: 80%;
  padding: 10px;
  transition: all 0.5s;
  &:focus {
    border-bottom-color: ${mainColorHover};
    outline: none;
  }
`;
const TextArea = styled.textarea`
  resize: none;
  border: none;
  border-bottom: 1px solid ${mainColor};
  margin-bottom: 10px;
  width: 80%;
  padding: 10px;
  transition: all 0.5s;
  &:focus {
    border-bottom-color: ${mainColorHover};
    outline: none;
  }
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
const SendButton = styled.button`
  color: ${mainColor};
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 5px;
  padding: 15px 25px;
  background-color: white;
  border: 1px solid ${mainColor};
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: white;
    border-color: white;
    background-color: ${mainColor};
  }
`;
export default Contact;

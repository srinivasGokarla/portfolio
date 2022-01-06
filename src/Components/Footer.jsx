import styled from "styled-components";
import { BsLinkedin, BsGithub, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
//import { SiHackerrank } from "react-icons/si";

const Foot = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #222831;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 10px 5px 10px 10px;
    height: 60px;

    @media only screen and (max-width: 767px) {
        height: 40px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    svg {
        font-size: 30px;
        cursor: pointer;
        margin: 0px 20px;

        @media only screen and (max-width: 767px) {
            font-size: 20px;
        }
    }

    .linkedin:hover {
        color: #0866c2;
    }

    .github:hover {
        color: #161b22;
    }

    .hackerrank:hover {
        color: #2fc866;
    }

    .email > svg {
        font-size: 35px;
        @media only screen and (max-width: 767px) {
            font-size: 25px;
        }
    }

    .email:hover {
        color: #cd3c30;
    }

    .phone:hover {
        color: cyan;
    }
`;

export default function Footer() {
    return (
        <Foot>
            <div>
                <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/srinivas-gokarla-38b912199/"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="github"
                    href="https://github.com/srinu217"
                    target="_blank"
                    rel="noreferrer"
                    title="Github"
                >
                    <BsGithub />
                </a>
                <a
                    className="email"
                    href="mailto: srinivasgokarla@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    title="Email"
                >
                    <MdEmail />
                </a>
                <a className="phone" href="tel:+918790844853" title="Phone">
                    <BsTelephoneFill />
                </a>
            </div>
        </Foot>
    );
}

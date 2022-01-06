import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Proj = styled.div`
    margin-top: 80px;
    padding-bottom: 40px;

    .items {
        margin: auto;
        padding: 10px;
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin-bottom: 5px;
        color: #5c5b5b;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }
`;

export default function Projects() {
    const data = [
        {
            id: 1,
            title: "nykaa",
            desc: "Nykaa is India’s leading beauty and fashion platform that offers a comprehensive range of cosmetics, engagement prodducts and expert assistance.",
            demo: null,
            github: "https://srinu217.github.io/nykaa/",
            Demo:"https://drive.google.com/file/d/1ulVwrmh8x6q_1m3K5bh7SjfAqKxkY4ns/view?usp=sharing",
            main: "/nykaa.jpg",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
               
            ],
        },
        {
            id: 2,
            title: "HealthKart",
            desc: " HealthKart is India’s leading nutrition and supplement platform that offers a comprehensive range of products, engagement tools.",
            demo: null,
            github:"https://hemantjayas.github.io/HealthKart/" ,
            Demo:"https://drive.google.com/file/d/1pYKckOUoaMDmfYYx1Dqzd_1af4OJKDOw/view?usp=sharing",
            main: "/HealthKart-image.jpg",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                "nodejs.webp",
                "mongodb.webp",
                "express.webp",
                "reactjs.webp",
        
            ],
        },
    ];
    return (
        <Proj>
            <h1>Projects</h1>

            <div className="items">
                {data.map((el) => (
                    <div key={el.id}>
                        <ProjectItem el={el}></ProjectItem>
                    </div>
                ))}
            </div>
        </Proj>
    );
}

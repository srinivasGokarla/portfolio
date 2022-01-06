import styled from "styled-components";
import Proficiencies from "./Proficiencies";

const Tech = styled.div`
    padding: 10px 0 30px;
    background-color: #fff;
    border-bottom: 1px solid #d8d2d2;
    margin-top:30px;

    .stacks {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        width: 95%;
        align-items: center;
        justify-content: center;
    }

    .stack-item {
        width: 90px;
        height: 90px;
        margin: 30px 85px;
    }
    .top-section {
        padding: 15px;
    }
    .logo {
        height: 90%;
    }

    .stack-item > h5 {
        margin-top: 3px;
        color: #494848;
    }
`;

export default function TechStack() {
    const data = [
        { src: "/html.webp", name: "HTML 5" },
        { src: "/css.webp", name: "CSS 3" },
        { src: "/javascript.webp", name: "JAVASCRIPT" },
        { src: "/nodejs2.webp", name: "NODE JS" },
        { src: "/mongodb.webp", name: "MONGO DB" },
        { src: "/express.webp", name: "EXPRESS" },
        { src: "/reactjs.webp", name: "REACT JS" },
        { src: "/redux.webp", name: "REDUX" },
        { src: "/tailwind.webp", name: "TAILWIND CSS" },
        { src: "/bootstrap.png", name: "BOOTSTRAP" },
        
    ];
    return (
        <Tech>
            <h1>Tech Stack</h1>
            <div className="stacks">
                {data.map((el, i) => (
                    <div key={i} className="stack-item">
                        <img src={el.src} alt={el.name} className="logo" />
                        <h5>{el.name}</h5>
                    </div>
                ))}
                 <Proficiencies />
            </div>
        </Tech>

    );
}

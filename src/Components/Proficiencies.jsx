import styled from "styled-components";

const Pro = styled.div`
    padding: 10px 0 70px;
    background-color: #fff;
    margin-bottom: 40px;

    .stacks {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        width: 95%;
        align-items: center;
        justify-content: center;
    }

    .stack-item {
        width: 100px;
        height: 100px;
        margin: 30px 85px;
    }

    .logo {
        width: 100%;
        height: 100%;
    }

    .stack-item > h5 {
        margin-top: 5px;
        color: #494848;
    }
`;

export default function Proficiencies() {
    return (
        <Pro>
            <h1>Proficiencies</h1>
            <div className="stacks">
                <div className="stack-item">
                    <img className="logo" src="/ds.webp" alt="" />
                    <h5>Data Structures & Algorithms</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/frontend.webp" alt="" />
                    <h5>Frontend</h5>
                </div>
                <div className="stack-item">
                    <img className="logo" src="/backend.webp" alt="" />
                    <h5>Backend</h5>
                </div>
            </div>
        </Pro>
    );
}

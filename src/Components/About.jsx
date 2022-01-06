import styled from "styled-components";


const Container = styled.div`
    margin-top: 80px;
  
    h1 {
        margin-bottom: 5px;
        color: black;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }

    .top-section {
        padding: 15px;
    }

    .top-section > img {
        width: 150px;
    }

    .about {
        padding-bottom: 30px;
        border-bottom: 1px solid #d8d2d2;
        background-color: #6998AB;
    }

    p {
        font-size: 1.1em;
        font-weight: 500;
        color: black;
    }
`;

export default function About() {
    return (
        <Container>
            <div className="about">
                <h1>About</h1>
                <div className="top-section">
                    <img src="photo.jpg" alt="" />
                    <p>
                    A Passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai school’s intensive and immersive learning.<br />
                     Look forward to joining a company where I will be able to contribute towards individual and company growth. <br/>. 
                       
                    </p>
                </div>
            </div>
            
        </Container>
    );
}

import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Services = () => {
    return (
        <Container id="service">
            <Fade direction="down">
                <h4>
                    My <span className="green">services</span>
                </h4>
                <h1>What I Do</h1>
            </Fade>
            <Cards>

                <Card
                    Icon={MdDesignServices}
                    title={<h4>Front-End Developer</h4>}
                    disc={<p className="card-disc">HTML5 | CSS3 | Bootstrap | JavaScript | ReactJS | Redux</p>}
                />

                <Card
                    Icon={FiCodesandbox}
                    title={<h4>Back-End Developer</h4>}
                    disc={<p className="card-disc">Node.js + Express | MySQL | MongoDB + Mongoose</p>}
                />
            </Cards>
        </Container>
    );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  /* h1 {
    padding-top: 1rem;
  } */
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
import React, { Component } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Projects from "./Projects/Projects";
import Video1 from "./Video1";
import ScrollableAnchor from "react-scrollable-anchor";
import Tech from "./TechSection/Tech";
import Footer from "./Footer";
import Topbar from "./NavBar";
import BottomNav from "./BottomNav";

// Header Video Style
const Vid1 = {
  width: "100%",
  objectFit: "fill"
};

class Landing extends Component {
  // constructor(props) {
  //   super(props);
  //   // Don't call this.setState() here!
  //   this.state = { prevScrollpos: window.pageYOffset, visible: true };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // // Adds an event listener when the component is mount.
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // // Remove the event listener when the component is unmount.
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // // Hide or show the menu.
  // handleScroll = () => {
  //   const { prevScrollpos } = this.state;

  //   const currentScrollPos = window.pageYOffset;
  //   const visible = prevScrollpos > currentScrollPos;

  //   this.setState({
  //     prevScrollpos: currentScrollPos,
  //     visible
  //   });
  // };

  render() {
    return (
      <>
        <Head>
          <Topbar />
        </Head>
        <Body>
          {/* ScrollableAnchor is used to navigate/auto scroll to the section once its selected
          from navbar */}
          <ScrollableAnchor id={"Home"}>
            <Video1 style={Vid1} />
          </ScrollableAnchor>
          <AboutMeDiv>
            <ScrollableAnchor id={"About_me"}>
              <Title> About Me </Title>
            </ScrollableAnchor>
            <AboutMeCoreDiv>
              <Tech />
              <AboutMe />
            </AboutMeCoreDiv>
          </AboutMeDiv>
          <ProjectsDiv>
            <ScrollableAnchor id={"Projects"}>
              <Projects />
            </ScrollableAnchor>
          </ProjectsDiv>
          <ScrollableAnchor id={"Contact"}>
            <Footer />
          </ScrollableAnchor>
          <BottomNav />
        </Body>
      </>
    );
  }
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
  background-color: #fffb9b;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-family: Bangers;
  align-items: center;
  font-size: 68px;
  padding-bottom: 10px;
  color: black;
`;
const AboutMeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 26px 0;
  margin: 0%;
`;

const AboutMeCoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 15px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1230px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background: linear-gradient(to right bottom, #fffb9b 55%, #cdcdcd 45%);
`;

export default Landing;

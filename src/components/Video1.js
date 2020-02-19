import React from "react";
import styled from "styled-components";
import VideoOne from "./vid1.mp4";
import VideoTwo from "./vid2.mp4";

class Video1 extends React.Component {
  state = {
    video1Finished: false
  };
  componentDidMount = () => {
    this.playVideo();
  };

  componentWillUnmount = () => {
    this.pauseVideo();
  };

  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
  };

  switchVideo = async () => {
    console.log(this.state);
    await this.setState({ video1Finished: true });
    console.log(this.state);
  };

  render = () => {
    const StartVideo = {
      height: "auto",
      position: "absolute",
      zIndex: this.state.video1Finished ? "0" : "2",
      opacity: this.state.video1Finished ? "0" : "1"
    };

    const Video2 = {
      height: "auto",
      position: "absolute",
      zIndex: this.state.video1Finished ? "2" : "0",
      opacity: this.state.video1Finished ? "1" : "0"
    };

    return (
      <Container>
        <video
          style={StartVideo}
          ref="vidRef"
          onEnded={this.switchVideo}
          src={VideoOne}
          type="video/mp4"
          autoPlay
          muted
        />
        <video
          style={Video2}
          ref="vidRef"
          onEnded={this.switchVideo}
          src={VideoTwo}
          type="video/mp4"
          loop
          autoPlay
          muted
        />
      </Container>
    );
  };
}

const Container = styled.div`
  height: auto;
  width: 100%;
`;

export default Video1;

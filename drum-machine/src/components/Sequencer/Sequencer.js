import React from "react";
import { Container, Row, Col } from "reactstrap";
import Sequence from "./Sequence";
import Timeline from "./Timeline";
import styled from "styled-components";

const LedSpacer = styled.div`
  width: 100%;
  height: 10px;
`;

class Sequencer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
    };
  }

  render() {
    return (
      <Container>
        <LedSpacer />
        <Timeline
          currentBeat={this.props.currentBeat}
          sequenceLength={this.props.sequenceLength}
        />
        <LedSpacer />
        {[...Array(this.props.tracks).keys()].map((value, index) => {
          return (
            <Sequence
              currentBeat={this.props.currentBeat}
              sequenceLength={this.props.sequenceLength}
              //needs to be passed sound function/file
            />
          );
        })}
      </Container>
    );
  }
}

export default Sequencer;

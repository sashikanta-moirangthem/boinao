import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
class Clock extends React.Component {
    constructor(props) {
      super(props);
        this.state = { date: new Date() };
        this.handleClick = this.handleClick.bind(this);
        // console.log('I am inside constructor')
    }
  
    // componentDidMount() {
    //   this.timerID = setInterval(
    //     () => this.tick(),
    //     1000
    //   );
    // }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    handleClick() {
        console.log("click")
        this.setState({
              date: new Date()
              });
      }
    // tick() {
    //   this.setState({
    //     date: new Date()
    //   });
    // }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
              <button onClick={this.handleClick}>click
          </button>
          <Row className="mx-0">
  <Button as={Col} variant="primary">Button #1</Button>
 
</Row>
          <Container>
 
  <Row>
    <Col sm> <Button as={Col} variant="primary">Button #1</Button>
 </Col>
    <Col sm> <Button as={Col} variant="primary">Button #1</Button>
 </Col>
    <Col sm> <Button as={Col} variant="primary">Button #1</Button>
 </Col>
  </Row>
</Container>
        </div>
      );
    }
}
export default Clock;

//  const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<Clock />);
import React, { useEffect, useState } from "react";
import "./bootstrap.min.css";
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  ProgressBar,
} from "react-bootstrap";
import Footer from "./Footer";

function App() {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <div>
      <main>
        {showButton && (
          <i
            onClick={scrollToTop}
            className="back-to-top fas fa-arrow-alt-circle-up"
          ></i>
        )}
        <Container className="mt-5">
          <Row>
            <Col className="m-auto">
              <h className="projName">Project Name</h>
              <p className="projDesc">One liner of the project</p>
              <Button className="buttonCustom btn-sm">Machine Learning</Button>
              <Button className="buttonCustom btn-sm">
                Artificial Intelligence
              </Button>
              <Button className="buttonCustom btn-sm">ReactJS</Button>
              <Row className="mt-1"></Row>
              <br></br>
              <Button className="buttonAchievement btn-sm">
                # 1 : Achievement
              </Button>
            </Col>
            <Col>
              <img className="image" src={require("./custom/titleImage.png")} />
            </Col>
          </Row>

          <Row className="highMarginTop highMarginBottom mr-3">
            <Col>
              <h3 className="subTitles">Solution Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum laoreet auctor lorem, at aliquet lectus euismod vel.
                Pellentesque auctor neque metus, quis dapibus lacus tincidunt
                ut. Donec quis metus in libero euismod fermentum.
              </p>
            </Col>
            <Col>
              <h3 className="subTitles">Features</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum laoreet auctor lorem, at aliquet lectus euismod vel.
                Pellentesque auctor neque metus, quis dapibus lacus tincidunt
                ut. Donec quis metus in libero euismod fermentum.
              </p>
            </Col>
          </Row>

          <Row>
            <img className="image" src={require("./custom/secondImage.png")} />
            <p className="mt-3 mx-3">Description about the image</p>
          </Row>

          <Row className="midMarginTop highMarginBottom">
            <Col className="mr-5">
              <Card className="card p-3">
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Some Feature Name
                  </Card.Title>
                  <Row>
                    <Col>
                      <Card.Text className="mt-3">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum laoreet auctor lorem, at aliquet
                          lectus euismod vel. Pellentesque auctor neque metus,
                          quis dapibus lacus tincidunt ut. Donec quis metus in
                          libero euismod fermentum.
                        </p>
                      </Card.Text>
                    </Col>
                    <Col>
                      <img
                        className="image"
                        src={require("./custom/featureImage.png")}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col className="mr-5">
              <Card className="card p-3">
                <Card.Body>
                  <Card.Title className="cardTitle">
                    Some Feature Name
                  </Card.Title>
                  <Row>
                    <Col>
                      <Card.Text className="mt-3">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum laoreet auctor lorem, at aliquet
                          lectus euismod vel. Pellentesque auctor neque metus,
                          quis dapibus lacus tincidunt ut. Donec quis metus in
                          libero euismod fermentum.
                        </p>
                      </Card.Text>
                    </Col>
                    <Col>
                      <img
                        className="image"
                        src={require("./custom/featureImage.png")}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <img className="image" src={require("./custom/secondImage.png")} />
            <p className="mt-3 mx-3">Description about the image</p>
          </Row>

          <Row>
            <img className="image" src={require("./custom/secondImage.png")} />
            <p className="mt-3 mx-3">Description about the image</p>
          </Row>

          <Row className="midMarginTop highMarginBottom">
            <Button
              href="https://github.com/rxthxnrxj/baseProjectApp"
              className="codeButton"
            >
              SOURCE CODE
            </Button>
          </Row>

          <Row className="midMarginTop highMarginBottom mr-3">
            <Col>
              <h3 className="subTitles">About the Author</h3>
              <p className="mt-3">
                Glad to hear your comments !<br></br> Contact me :
              </p>
              <p>
                <i class="fa-solid fa-envelope" />
                &nbsp;&nbsp;yourEmailID
              </p>
              <p>
                <i class="fa-solid fa-phone" />
                &nbsp;+91 99999 99999
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

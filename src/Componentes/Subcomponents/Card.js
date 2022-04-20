import { React, useState } from "react";
import { Col, Card, CardBody, CardTitle } from "reactstrap";
  
export const CardInfo = (props) => {
  const [fontSize, setFontSize] = useState("20px");

  const changeFontSize = () => {
    fontSize === "20px" ? setFontSize("25px") : setFontSize("20px");
  };

  return (
    <>
      <Col className="col-md-4 mx-auto col-12 py-3">
        <Card
          className="h-100"
          onMouseLeave={() => changeFontSize()}
          onMouseEnter={() => changeFontSize()}
        >
          <CardTitle className="pt-4 cards text-center" style={{ fontSize: fontSize, transition: ".5s" }}>
            {props.icono}
          </CardTitle>
          <CardBody className="h4 py-0 text-center">{props.title}</CardBody>
          <CardBody className="text-justify">{props.content}</CardBody>
        </Card>
      </Col>
    </>
  );
};

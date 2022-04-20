import { React } from "react";
import { Col, Card, CardBody, CardTitle } from "reactstrap";

export const DeviceCard = (props) => {
  return (
    <>
      <Col className="col-md-3 mx-auto col-12 py-3">
        <Card className="h-100">
          <CardTitle className="pt-4">{props.image}</CardTitle>
          <CardBody className="h4 py-0">{props.title}</CardBody>
          <CardBody className="text-left">{props.content}</CardBody>
        </Card>
      </Col>
    </>
  );
};

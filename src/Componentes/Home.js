import { React, useState } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardText,
} from "reactstrap";
import { CardInfo } from "./Subcomponents/Card";
import {
  FcGlobe,
  FcIdea,
  FcReadingEbook,
  FcStart,
  FcTodoList,
} from "react-icons/fc";
import { Footer } from './Subcomponents/Footer'
import "./Home.css";

export const Home = () => {
  const [isF1Open, setIsF1Open] = useState(false);
  const [isF2Open, setIsF2Open] = useState(false);
  const [isF3Open, setIsF3Open] = useState(false);
  const [isF4Open, setIsF4Open] = useState(false);
  const [isF5Open, setIsF5Open] = useState(false);
  const [isF6Open, setIsF6Open] = useState(false);
  const [isF7Open, setIsF7Open] = useState(false);
  const [isF8Open, setIsF8Open] = useState(false);
  const [isF9Open, setIsF9Open] = useState(false);
  const [isF10Open, setIsF10Open] = useState(false);
  const toggle = (faqNumber, setFaqNumber) => setFaqNumber(!faqNumber);

  const [widthFirst, setWidthFirst] = useState("col-md-3 col-12 my-2 mx-auto");
  const [widthSecond, setWidthSecond] = useState(
    "col-md-3 col-12 my-2 mx-auto"
  );
  const [widthThird, setWidthThird] = useState("col-md-3 col-12 my-2 mx-auto");

  const changeWidth = (width, setWidth) => {
    width === "col-md-3 col-12 my-2 mx-auto"
      ? setWidth("col-md-5 col-12 my-2 mx-auto")
      : setWidth("col-md-3 col-12 my-2 mx-auto");
  };

  return (
    <>
      <section className="home-section py-5">
        <Container>
          <Row className="pt-md-4 justify-content-center">
            <Col className="text-white col-10 text-left">
              <p className="p-2 main-letter">
                Tecnologias Encargadas de Controlar tu Hogar
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="py-5 my-5">
            <Col className="col-12">
              <p className="h2 py-1">
                Tecnolog??a en el hogar: el prop??sito de tenerla
              </p>
              <p>
                Los robots y la inteligencia artificial llegaron para quedarse y
                esta vez en tu hogar. Los avances tecnol??gicos han permitido que
                las familias innoven, se transformen y se adapten al mundo
                virtual.
              </p>
              <p className="h3 py-4">Como nos ayuda la tecnolog??a?</p>
            </Col>
            <CardInfo
              icono={<FcIdea size="4em" />}
              title="Fomenta la creatividad"
              content="Da paso a la creatividad, pues gracias a las herramientas y a los art??culos tecnol??gicos se estimula la creatividad de toda la familia."
            />
            <CardInfo
              icono={<FcGlobe size="4em" />}
              title="Facilita el acceso a la informaci??n"
              content="Permite tener varios canales virtuales para aprender m??s y ayuda a que todos logren encontrar informaci??n importante en la web."
            />
            <CardInfo
              icono={<FcTodoList size="4em" />}
              title="Automatiza procesos"
              content="Proporciona herramientas para las tareas dom??sticas."
            />
            <CardInfo
              icono={<FcStart size="4em" />}
              title="Entretenimiento en casa"
              content="Aumenta el entretenimiento en casa y si se utiliza con conciencia, logra que toda la familia disfrute de estos aparatos."
            />
            <CardInfo
              icono={<FcReadingEbook size="4em" />}
              title="Desarrollo intelectual temprano"
              content="Con los ni??os, ayuda a que sus facultades se desarrollen desde temprana edad."
            />
          </Row>
        </Container>
      </section>

      <section className="py-5 unete-section">
        <p className="h1 pb-2 mb-3">Unete a la tranformaci??n</p>
        <Row className="justify-content-center col-12 mx-auto">
          <Col className="col-md-7 col-11">
            <img
              className="imagen rounded-circle"
              alt="..."
              src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/internet-de-las-cosas-domotica-android.jpg?alt=media&token=c62d57b1-89c7-4abc-b79d-f2a83582bc0f"
            />
          </Col>
          <Col className="col-md-5 col-11 my-auto">
            <p className="h5 text-md-left text-center mx-3 py-3">
              La vivienda inteligente no es ciencia ficci??n. Hoy en d??a, es
              bastante f??cil automatizar las diversas funciones del equipo en el
              hogar. Desde persianas y bombillas hasta lavadoras.
            </p>
            <p className="h5 text-md-left text-center mx-3 py-3">
              Tener una casa inteligente es cada a??o m??s f??cil, barato y ??til
              que nunca. M??ltiples compa????as ofrecen una variedad de productos
              que pueden facilitarnos la estancia en nuestro hogar con peque??os
              aparatos que se encarguen de realizar las tareas dom??sticas.
              Cierto que no ser??n saltos de calidad de vida tan grandes como la
              invenci??n de la lavadora o la nevera, pero los electrodom??sticos
              inteligentes y los aparatos electr??nicos para el hogar en general
              son una realidad consolidada.
            </p>
          </Col>
        </Row>
      </section>

      <section className="py-3 my-5">
        <p className="h2 pb-4">Proyectos de casas inteligentes</p>
        <Row className="col-12 mx-auto">
          <Card
            onMouseEnter={() => changeWidth(widthFirst, setWidthFirst)}
            onMouseLeave={() => changeWidth(widthFirst, setWidthFirst)}
            className={widthFirst}
            style={{ transition: ".5s" }}
          >
            <CardTitle className="h4 pt-3">
              Smart House, La Moraleja Espa??a
            </CardTitle>
            <CardBody className="text-left">
              <CardImg src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/20141028-jaimev-smarthouse.jpg?alt=media&token=1904b1f4-6a1c-41ec-a7a2-c84a2f8be0b2" />
              <CardText>
                Una tarjeta o un tel??fono celular con cualquiera de estos
                objetos el propietario de esta casa valorada en ???7.750.000,
                puede controlar los sistemas de c??maras de seguridad,
                iluminaci??n, m??sica, adem??s de abrir y cerrar cortinas y puertas
              </CardText>
              <CardText>
                De acuerdo con la revista ??Hola! Espa??a, esta residencia apuesta
                por la sostenibilidad, cuenta con la calificaci??n energ??tica
                ???A???, basada en un sistema de climatizaci??n (fr??o-calor)
                geot??rmico, cubierta ventilada y sistemas de iluminaci??n por
                leds.
              </CardText>
            </CardBody>
          </Card>
          <Card
            onMouseEnter={() => changeWidth(widthSecond, setWidthSecond)}
            onMouseLeave={() => changeWidth(widthSecond, setWidthSecond)}
            className={widthSecond}
            style={{ transition: ".5s" }}
          >
            <CardTitle className="h4 pt-3">
              Casa Cero en Utah Estados Unidos
            </CardTitle>
            <CardBody className="text-left">
              <CardImg src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/nullenergiehaus-innova.jpg?alt=media&token=845c8340-b701-4b5f-b30c-38a480063869" />
              <CardText>
                En 2013 se encendi?? por primera vez esta casa que con un
                conjunto de paneles solares instalados en el techo produce m??s
                energ??a de la que utiliza. Seg??n el sitio web de Forbes est??
                vivienda tiene un sistema de administraci??n de energ??a que
                incluye un termostato inteligente y an??lisis del consumo
                energ??tico, as?? que la casa puede relacionar la producci??n de
                energ??a solar con el consumo del inmueble.
              </CardText>
            </CardBody>
          </Card>
          <Card
            onMouseEnter={() => changeWidth(widthThird, setWidthThird)}
            onMouseLeave={() => changeWidth(widthThird, setWidthThird)}
            className={widthThird}
            style={{ transition: ".5s" }}
          >
            <CardTitle className="h4 pt-3">
              Complejo Seahorses en Dub??i
            </CardTitle>
            <CardBody className="text-left">
              <CardImg src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/floating-seahorse-3.jpg?alt=media&token=5e9fd37f-f86f-4b3d-8f1f-17fa71c0e2c9" />
              <CardText>
                En medio de la Europa artificial, una serie de islas que busca
                imitar en menor escala al viejo continente. Se desarrolla desde
                2016 a 4 kil??metros de la costa de Dubai.
              </CardText>
              <CardText>
                Este lujoso complejo comprende una serie de 42 casas submarinas,
                en la isla San Petersburgo, de tres pisos, uno bajo el agua de
                25 m2 y dos en la superficie. Las etapas 1 y 2 se vendieron en
                cuesti??n de 8 meses. Cuenta con sistema automatizado con el que
                se puede controlar todos los equipos del hogar. La
                desarrolladora fue Kleindienst Group.
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </section>

      <section className="faqs-section py-1 m-5">
        <p className="h2 py-4">Preguntas frecuentes</p>
        <Row>
          <Col className="col-md-6 col-12">
            <ListGroup>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF1Open, setIsF1Open)}
              >
                <p className="h5">??Que es un hogar inteligente?</p>
                <Collapse isOpen={isF1Open} className="text-left py-2">
                  Es una casa equipada con dispositivos que se pueden controlar
                  a trav??s de una conexi??n a Internet en el escritorio, tableta
                  o tel??fono inteligente. Estos dispositivos conectados pueden
                  ser electrodom??sticos, luces, sistemas de seguridad, c??maras ,
                  sistemas de audio y video, televisores, termostatos e incluso
                  rociadores.
                </Collapse>
              </ListGroupItem>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF2Open, setIsF2Open)}
              >
                <p className="h5">
                  ??Cu??les son los beneficios de la automatizaci??n del hogar?
                </p>
                <Collapse isOpen={isF2Open} className="text-left py-2">
                  Los beneficios de la automatizaci??n del hogar por lo general
                  se dividen en algunas categor??as, que incluyen ahorro,
                  seguridad, conveniencia y control. Adem??s, algunos
                  consumidores compran la automatizaci??n del hogar para mayor
                  comodidad y tranquilidad. Aqu?? le ofrecemos una mirada m??s
                  cercana a algunos de los mayores beneficios que ofrece la
                  automatizaci??n del hogar:
                </Collapse>
              </ListGroupItem>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF3Open, setIsF3Open)}
              >
                <p className="h5">
                  ??Qu?? dispositivos se controlan en una casa inteligente?
                </p>
                <Collapse isOpen={isF3Open} className="text-left py-2">
                  Los dispositivos inteligentes conectados a casa m??s comunes se
                  dividen en cuatro categor??as: iluminaci??n, control de clima,
                  entretenimiento y seguridad.
                </Collapse>
              </ListGroupItem>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF4Open, setIsF4Open)}
              >
                <p className="h5">
                  ??Cu??les son los elementos que integran un sistema dom??tico?
                </p>
                <Collapse isOpen={isF4Open} className="text-left py-2">
                  En el nivel m??s b??sico, los sistemas de automatizaci??n del
                  hogar se componen de tres elementos: un dispositivo
                  inteligente, un concentrador y una aplicaci??n conectada. Si
                  bien algunos sistemas inteligentes funcionan con solo dos de
                  los elementos anteriores, un solo dispositivo que funciona
                  directamente con una aplicaci??n o un centro de manos libres
                  que controla dispositivos inteligentes, la mayor??a de los
                  sistemas funcionan a trav??s de los tres.
                </Collapse>
              </ListGroupItem>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF5Open, setIsF5Open)}
              >
                <p className="h5">
                  ??Es asequible la automatizaci??n de una casa?
                </p>
                <Collapse isOpen={isF5Open} className="text-left py-2">
                  Las casas inteligentes son asequibles, siempre que establezca
                  un presupuesto antes de aventurarse en el mundo de la
                  automatizaci??n del hogar. Como regla general, el costo de la
                  automatizaci??n del hogar, para una configuraci??n m??s simple,
                  ser?? sustancialmente menor que una configuraci??n compleja. El
                  precio de su casa inteligente puede ser lo que usted quiera
                  que sea.
                </Collapse>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col className="col-md-6 col-12">
            <ListGroup>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF6Open, setIsF6Open)}
              >
                <p className="h5">??Cu??nto costar?? hacer mi casa inteligente?</p>
                <Collapse isOpen={isF6Open} className="text-left py-2">
                  Puede gastar tanto o tan poco dinero como desee para que su
                  hogar sea inteligente. Para mantener los costos de la
                  automatizaci??n del hogar bajo control, le recomendamos que
                  determine de antemano su asignaci??n de gastos y que priorice
                  la tecnolog??a que realmente le interesa.
                </Collapse>
              </ListGroupItem>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF7Open, setIsF7Open)}
              >
                <p className="h5">
                  ??La automatizaci??n del hogar aumentar?? el valor de mi casa?
                </p>
                <Collapse isOpen={isF7Open} className="text-left py-2">
                  La automatizaci??n del hogar aumenta el valor del hogar. Cada
                  vez m??s personas quieren la funcionalidad de un hogar
                  inteligente en sus pr??ximas viviendas. Si su casa est??
                  equipada con tecnolog??a inteligente, lo m??s probable es que
                  pueda aumentar el precio de venta. Sin embargo, debe trabajar
                  con un agente de bienes ra??ces con licencia para garantizar
                  que su precio se encuentre dentro de lo que el mercado puede
                  soportar.
                </Collapse>
              </ListGroupItem>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF8Open, setIsF8Open)}
              >
                <p className="h5">Es f??cil vender la casa del futuro?</p>
                <Collapse isOpen={isF8Open} className="text-left py-2">
                  Los sistemas y dispositivos de automatizaci??n del hogar a
                  menudo aumentan el valor del hogar en t??rminos de atracci??n. A
                  medida que los dispositivos inteligentes se vuelven m??s
                  frecuentes, m??s compradores de viviendas ver??n los beneficios
                  de los dispositivos conectados inteligentes en el hogar.
                </Collapse>
              </ListGroupItem>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF9Open, setIsF9Open)}
              >
                <p className="h5">??Vale la pena la automatizaci??n del hogar?</p>
                <Collapse isOpen={isF9Open} className="text-left py-2">
                  La dom??tica vale la pena la inversi??n. Para determinar si vale
                  la pena para usted, debe sopesar los beneficios potenciales,
                  lo que ahorrar?? en tiempo y dinero con el tiempo, en
                  comparaci??n con los costos iniciales.
                </Collapse>
              </ListGroupItem>
              <ListGroupItem
                className="list-group-item"
                onClick={() => toggle(isF10Open, setIsF10Open)}
              >
                <p className="h5">
                  ??C??mo puedo ahorrar el consumo de energ??a con la Dom??tica?
                </p>
                <Collapse isOpen={isF10Open} className="text-left py-2">
                  La automatizaci??n del hogar puede ayudarlo a ahorrar energ??a
                  al garantizar que su hogar use recursos como el agua y la
                  electricidad de manera m??s efectiva, reduciendo los
                  desperdicios en toda la casa. Ahorro de energ??a con las casas
                  dom??ticas de Control4 en Bogot??, Colombia Es posible que sepa
                  que la automatizaci??n del hogar puede ayudar a aumentar la
                  comodidad y seguridad de su hogar. ??Pero sab??as que tambi??n te
                  puede ahorrar dinero? Con la automatizaci??n del hogar, puede
                  hacer una peque??a diferencia para el medio ambiente y, como
                  resultado, ver?? facturas de servicios p??blicos reducidas.
                </Collapse>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </section>

      <Footer/>
    </>
  );
};

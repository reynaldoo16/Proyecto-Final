import { React } from "react";
import { Row, Col, Container } from "reactstrap";
import "./Dispositivos.css";
import { DeviceCard } from "./Subcomponents/DeviceCard";
import { Footer } from "./Subcomponents/Footer";

export const Dispositivos = () => {
  return (
    <>
      <section className="devices-section">
        <Row className="contenedor">
          <p className="display-3 devices-text">
            Dispositivos que te ayudarán a automatizar tu hogar
          </p>
          <Col className="mini-contenedor">
            <img
              className="imgs"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/EchoDot.png?alt=media&token=d4118e39-6106-4366-b9bb-885d136d74a7"
            />
            <img
              className="imgs"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/Adaptador.png?alt=media&token=bee85766-1630-4e31-9a84-97e03a5bc356"
            />
            <img
              className="imgs"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/Google%20Nest%20Wifi.png?alt=media&token=245d298b-68c8-4e9e-b26e-a0b3cb75a814"
            />
          </Col>
        </Row>
      </section>

      <section className="py-4">
        <Container fluid>
          <Row className="mb-5">
            <Col className="col-12 py-4 mb-4 bg-dark text-white">
              <p className="h1">Dispositivos de control</p>
            </Col>
            <DeviceCard
              image={
                <img
                  className="device-image"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/1567167640_349192_1567169170_sumario_normal_recorte1.jpg?alt=media&token=80a1b94f-3de6-4efc-9574-4f0d993d25de"
                />
              }
              title="Philips Hue Go"
              content="Con un diseño portátil y alimentado mediante conexión a la corriente o con una batería interna con hasta tres horas de autonomía, este sistema de iluminación se controla desde el teléfono móvil: es posible elegir entre siete efectos de iluminación diferentes entre los que se encuentran una luz blanca cálida funcional, luz fría energizante y cinco efectos de iluminación dinámica."
            />
            <DeviceCard
              image={
                <img
                  className="device-image"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/1567167640_349192_1567169228_sumario_normal_recorte1.jpg?alt=media&token=73a54c0f-68ea-4537-bd3b-8d70821f0339"
                />
              }
              title="TP-Link HS110"
              content="Podrás controlar a distancia y con la voz cualquier dispositivo que esté conectado a este enchufe inteligente. También analiza el consumo energético en tiempo real, realiza informes del gasto y admite programaciones."
            />
            <DeviceCard
              image={
                <img
                  className="device-image"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/1567167640_349192_1567169262_sumario_normal_recorte1.jpg?alt=media&token=d7e6b646-c9a6-4df3-a11d-63063eb390e4"
                />
              }
              title="Ambi Climate 2"
              content="Diseñado para controlar el aire acondicionado del hogar, recurre a la geolocalización del teléfono móvil de los habitantes de la casa para saber dónde se encuentran y, así, activa o desactiva la climatización de forma automática."
            />
          </Row>
          <Row className="my-5">
            <Col className="col-12 py-4 my-4 bg-dark text-white">
              <p className="h1">Dispositivos de automatización</p>
            </Col>
            <DeviceCard
              image={
                <img
                  className="device-image"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/1567167640_349192_1567169295_sumario_normal_recorte1.jpg?alt=media&token=fb1301d4-4472-4b43-8557-c2479e6fa6d8"
                />
              }
              title="Rowenta Smart Force Cyclonic"
              content="Programación de su funcionamiento e informes de actividad son dos de las funciones que ofrece la conexión de este robot aspirador con el smartphone. Se mueve con total soltura por el hogar gracias a una tecnología que combina cámara y láser para navegar esquivando todos los obstáculos."
            />
            <DeviceCard
              image={
                <img
                  className="device-image"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/1567167640_349192_1567169321_sumario_normal_recorte1.jpg?alt=media&token=602d3552-379f-4874-96ab-aee0156547c9"
                />
              }
              title="Cecotec Conga WinRobot 870"
              content="Aunque el control de este robot limpia ventanas se realiza a través de un mando a distancia, funciona de forma autónoma gracias a la Inteligencia Artificial: calcula la ruta, detecta los límites de las ventanas y limpia toda la superficie sin caerse."
            />
            <DeviceCard
              image={
                <img
                  className="device-image"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/1567167640_349192_1567169139_sumario_normal_recorte1.jpg?alt=media&token=b066dfaa-9866-4fb4-9af2-2c5a25bfc2c0"
                />
              }
              title="Simplehuman con Sensor de Vision Amplia Pro"
              content="Porque la mala iluminación puede hacer que nos veamos con mala cara e, incluso, alterar los colores del maquillaje, este espejo se ilumina simulando la luz natural. Incluso permite capturar los parámetros de iluminación de un momento del día concreto a través del móvil para recrearlos en él."
            />
          </Row>
          <Row className="my-5">
            <Col className="col-12 py-4 my-4 bg-dark text-white">
              <p className="h1">Dispositivos de visualización y demás</p>
            </Col>
            <DeviceCard
              image={
                <img
                  className="device-image"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/1567167640_349192_1567169200_sumario_normal_recorte1.jpg?alt=media&token=21a082fc-d7b9-4e30-922a-8f086026555a"
                />
              }
              title="LG 55 SK8500"
              content="Además de conectarse a Internet para acceder a todos los servicios de las Smart TV (navegar, acceder a aplicaciones…), este televisor de 55 pulgadas incorpora Inteligencia Artificial. Gracias a esta tecnología, es posible controlarla con órdenes de voz."
            />
            <DeviceCard
              image={
                <img
                  className="device-image"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/1567167640_349192_1567168989_sumario_normal_recorte1.jpg?alt=media&token=e00f4227-f80a-4adb-a6c2-a2e2db351c07"
                />
              }
              title="Ring Video Doorbell 2"
              content="Puedes sustituir el timbre de casa por esta versión conectada que detecta si alguien se acerca a la puerta y avisa cuando llaman. Toda la gestión se lleva a cabo desde el teléfono móvil, la tableta o un ordenador, desde los que se pueden ver las imágenes en directo (también de noche) con calidad Full HD o iniciar una conversación con las visitas."
            />
            <DeviceCard
              image={
                <img
                  className="device-image w-50"
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/6.jpg?alt=media&token=4dc1a7f0-a613-4f72-a536-edba08909f11"
                />
              }
              title="Ksix Cámara Inteligente Smart Wifi Con Detección De Movimiento"
              content="La Smart WiFi Camera es una cámara inteligente que permite monitorizar lo que sucede en tu casa en tiempo real. Funciona con detección de movimiento y envía notificaciones automáticas a tu smartphone cuando se detecta un cambio o movimiento."
            />
          </Row>
        </Container>
      </section>

      <Footer/>
    </>
  );
};

import { React } from "react";
import { CardInfo } from "./Subcomponents/Card";
import { Container, Row, Col } from "reactstrap";
import "./Domotica.css";
import { Footer } from './Subcomponents/Footer'
import {
  BiAccessibility,
  BiBoltCircle,
  BiBookReader,
  BiCctv,
  BiHeart,
  BiUserVoice,
} from "react-icons/bi";

export const Domotica = () => {
  return (
    <>
      <section className="tech-section">
        <Row>
          <Col>
            <p className="display-1 text-white">Domótica</p>
          </Col>
        </Row>
      </section>

      <section className="used-tech-section my-md-5">
        <Container>
          <Row className="text-justify">
            <Col className="col-12">
              <p className="h1 pt-md-5 pt-1 mb-4 text-center">Qué es?</p>
            </Col>
            <Col className="d-md-inline d-none">
              <img
                alt=""
                className="w-100"
                src="https://firebasestorage.googleapis.com/v0/b/tech-2f51a.appspot.com/o/queesdomotica.jpg?alt=media&token=ccb95067-77fc-4ae3-a1e0-6cbe6c5cf01c"
              />
            </Col>
            <Col className="col-md-8 col-12">
              <p className="h4">
                La domótica es el conjunto de tecnologías aplicadas al control y
                la automatización inteligente de la vivienda, que permite una
                gestión eficiente del uso de la energía, que aporta seguridad y
                confort, además de comunicación entre el usuario y el sistema.
              </p>
              <p className="h4 my-4">
                Un sistema domótico es capaz de recoger información proveniente
                de unos sensores o entradas, procesarla y emitir órdenes a unos
                actuadores o salidas. El sistema puede acceder a redes
                exteriores de comunicación o información.
              </p>
            </Col>
            <Col className="col-12">
              <p className="h4">
                El sector de la domótica ha evolucionado considerablemente en
                los últimos años, y en la actualidad ofrece una oferta más
                consolidada. Hoy en día, la domótica aporta soluciones dirigidas
                a todo tipo de viviendas, incluidas las construcciones de
                vivienda oficial protegida. Además, se ofrecen más
                funcionalidades por menos dinero, más variedad de producto, que
                gracias a la evolución tecnológica, son más fáciles de usar y de
                instalar. En definitiva, la oferta es mejor y de mayor calidad,
                y su utilización es ahora más intuitiva y perfectamente
                manejable por cualquier usuario. Paralelamente, los instaladores
                de domótica han incrementado su nivel de formación y los modelos
                de implantación se han perfeccionado.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-4 pt-3">
        <Container>
          <Row className="">
            <Col className="col-12">
              <p className="h1 pt-md-5 pt-1 mb-4 text-center">
                Qué aporta la domótica?
              </p>
              <p className="h4">
                La domótica contribuye a mejorar la calidad de vida del usuario,
                de manera que atribuye:
              </p>
            </Col>
            <CardInfo
              icono={<BiBoltCircle size="4em" />}
              title="Ahorro energético"
              content="Gestiona inteligentemente la iluminación, climatización, agua caliente sanitaria, el riego, los electrodomésticos, etc., aprovechando mejor los recursos naturales, utilizando las tarifas horarias de menor coste, y reduciendo así, la factura energética."
            />
            <CardInfo
              icono={<BiAccessibility size="4em" />}
              title="Accesibilidad"
              content="Facilita el manejo de los elementos del hogar a las personas con discapacidades de la forma que más se ajuste a sus necesidades, además de ofrecer servicios de teleasistencia para aquellos que lo necesiten."
            />
            <CardInfo
              icono={<BiCctv size="4em" />}
              title="Seguridad"
              content="Mediante la vigilancia automática de personas, animales y bienes, así como de incidencias y averías. Mediante controles de intrusión, cierre automático de todas las aberturas, simulación dinámica de presencia, fachadas dinámicas, cámaras de vigilancia, alarmas personales."
            />
            <CardInfo
              icono={<BiUserVoice size="4em" />}
              title="Comunicación"
              content="Transmisión de voz y datos, incluyendo textos, imágenes, sonidos (multimedia) con redes locales (LAN) compartiendo acceso a Internet, recursos e intercambio entre todos los dispositivos, acceso a nuevos servicios de telefonía sobre IP, televisión digital, televisión por cable, diagnóstico remoto, videoconferencias, etc."
            />
            <CardInfo
              icono={<BiHeart size="4em" />}
              title="Salud"
              content="Actuar en la sanidad mediante asistencia sanitaria, consultoría sobre alimentación y dieta, telecontrol y alarmas de salud, medicina monitorizada, cuidado médico, etc. No obstante, antes de incorporar un sistema domótico, es necesario valorar la funcionalidad, facilidad de uso y estética."
            />
            <CardInfo
              icono={<BiBookReader size="4em" />}
              title="Ocio y tiempo libre"
              content="Descansar y divertirse con radio, televisión, multi-room, cine en casa, videojuegos, captura, tratamiento y distribución de imágenes fijas (foto) y dinámicas (vídeo) y de sonido (música) dentro y fuera de la casa, a través de Internet, etc."
            />
          </Row>
        </Container>
      </section>

      <Footer/>
    </>
  );
};

import PropTypes from "prop-types";
import { Card, Row, Title, Container } from "./Event.styled";


export function Event({ name, start, end, location, speaker, iconTime, iconLocation, iconSpeaker }) {
  return ( 



    <Container>
    <Card>



      <Title>{name}</Title>
      <Row>{iconTime} {start} – {end}</Row>
      <Row>{iconLocation} {location}</Row>
      <Row>{iconSpeaker} {speaker}</Row>

    </Card>
    </Container>
  );

}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  iconTime: PropTypes.element.isRequired,
  iconLocation: PropTypes.element.isRequired,
  iconSpeaker: PropTypes.element.isRequired,
};

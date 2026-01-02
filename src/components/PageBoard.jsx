import { Event } from "./Event";
import { Container, MainTitle } from "./Event.styled";
import { FaCalendarAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { IoPersonSharp } from "react-icons/io5";

export function PageBoard({ events }) {
  return (
    <div>
        <MainTitle>24th Core World Coalition Conference</MainTitle>
      <Container>
      {events.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          start={event.time.start}
          end={event.time.end}
          location={event.location}
          speaker={event.speaker}
          iconTime={<FaCalendarAlt />}
          iconLocation={<TiLocation />}
          iconSpeaker={<IoPersonSharp />}
        />
      ))}
      </Container>
    </div>
  );
}


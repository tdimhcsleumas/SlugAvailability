import AvailabilitySelector from "../../components/AvailabilitySelector";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const params = useParams();

    return (
        <div>
            <p>Showing: {params.eventId}</p>
            <AvailabilitySelector
                startTime={1650124800}
                endTime={1650153600}
            />
        </div>
    );
};

export default EventDetails;

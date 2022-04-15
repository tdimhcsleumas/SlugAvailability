import AvailabilitySelector from "../../components/AvailabilitySelector";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const params = useParams();

    return (
        <div>
            <p>Showing: {params.eventId}</p>
            <AvailabilitySelector />
        </div>
    );
};

export default EventDetails;

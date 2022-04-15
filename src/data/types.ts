export interface Event {
    name: string;
    id: string;
    ownerId: string             // user id for the event owner
    proposedDates: number[];    // dates to be used for the selection (stored as UTC)
    timezone: string;           // timezone to be used for conversion. should be inherited from user by default
    earliestTime: number;       // unix timestamp for earliest time
    latestTime: number;         // unix timestamp for latest time
    participantList: string[];  // list of userId's
    status: string;             // created | decided
};

export interface UserProfile {
    ownerId: string;
    googleCalendarToken: string;    // placeholder
};

export interface UserAvailability {
    userId: string;     // id to the user
    startTime: number;  // unix time start date (utc)
    endTime: number;    // unix time end date (utc)
};


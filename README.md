# Power Calendar: Back end

This is the server/api side of Jared's power calendar app. Its based on NodeJS using Express and GraphQL to create an API that talks to a NoSQL database.

## Basic models (JSON data in a NoSQL database):
Event: {
    eventID: String?,
    title: String,
    startDateTime: datetime?,
    endDateTime: datetime?
}

## API functions (on an Express + GraphQL NodeJS server):
- Retrieve all events between dates/times
- Add event
- Remove event
- Update event

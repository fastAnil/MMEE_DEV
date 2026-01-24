import { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/search.svg";
import locationIcon from "../../assets/location.svg";
//import calendarIcon from "../../assets/calendar.svg";

const EVENTS = [
  "Birthday Party",
  "Wedding",
  "Corporate Event",
  "Sports Tournament",
  "Music Concert",
  "Exhibition",
  "College Fest",
];

const LOCATIONS = [
  "Delhi",
  "Goa"
];

export default function SearchBar() {
  const [eventOpen, setEventOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [eventQuery, setEventQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const eventRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

const dateRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!dateRef.current?.contains(e.target as Node)) {
        setDateOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !eventRef.current?.contains(e.target as Node) &&
        !locationRef.current?.contains(e.target as Node)
      ) {
        setEventOpen(false);
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filteredEvents = EVENTS.filter(e =>
    e.toLowerCase().includes(eventQuery.toLowerCase())
  );

  const filteredLocations = LOCATIONS.filter(l =>
    l.toLowerCase().includes(locationQuery.toLowerCase())
  );

  return (
    <>
    <div className="search-bar">

      {/* EVENTS */}
      <div className="dropdown" ref={eventRef}>
        <button onClick={() => setEventOpen(!eventOpen)}>
          {eventQuery || "Events"}
          <img
            src={searchIcon}
            alt="Search"
            height={17} width={17}
            style={{ float: "left", marginRight: "5px" }}
          />
        </button>
        
        {eventOpen && (
          <div className="menu-SearchBar">
            <input
              placeholder="Search events..."
              value={eventQuery}
              onChange={e => setEventQuery(e.target.value)}
            />
            {filteredEvents.map(item => (
              <div
                key={item}
                className="item"
                onClick={() => {
                  setEventQuery(item);
                  setEventOpen(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LOCATION */}
      <div className="dropdown" ref={locationRef}>
        <button onClick={() => setLocationOpen(!locationOpen)}>
          {locationQuery || "Location"}
          <img
            src={locationIcon}
            alt="Search"
            height={17} width={17}
            style={{ float: "left", marginRight: "5px" }}
          />
        </button>

        {locationOpen && (
          <div className="menu-SearchBar">
            <input
              placeholder="Search location..."
              value={locationQuery}
              onChange={e => setLocationQuery(e.target.value)}
            />
            {filteredLocations.map(item => (
              <div
                key={item}
                className="item"
                onClick={() => {
                  setLocationQuery(item);
                  setLocationOpen(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DATE BUTTON */}
      <div className="dropdown" ref={dateRef}>
        <button onClick={() => setDateOpen(!dateOpen)}>
          📅 {checkIn && checkOut ? `${checkIn} → ${checkOut}` : "Dates"}
        </button>

        {dateOpen && (
          <div className="date-menu">
            <label>
              Check-in
              <input
                type="date"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
              />
            </label>

            <label>
              Check-out
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={e => setCheckOut(e.target.value)}
              />
            </label>
          </div>
        )}
        
      </div>
      
    </div>

    <button className="search-btn" onClick={() => window.location.href = window.location.href}>Search</button>
    </>
  );
}

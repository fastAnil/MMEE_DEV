import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceProvider.css";

const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Music Concert",
  "Sports Event",
];

const SERVICE_TYPES = [
  "Decorator",
  "Caterer",
  "Photographer",
  "Videographer",
  "Sound & Lights",
];

export default function ServiceProvider() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [eventType, setEventType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [serviceSearch, setServiceSearch] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const filteredServiceTypes = SERVICE_TYPES.filter((s) =>
    s.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
    serviceType
  };

  const handleMapClick = () => {
    // Placeholder values
    setLat("28.6139");
    setLng("77.2090");
  };

  return (
    <div className="sp-wrapper">
      {/* Header */}
      <header className="sp-header">
        <div className="logo">
          <div className="logo-box">MMEE</div>
          <span>Make My Event Easy</span>
        </div>

        <div
          className="switch-client"
          onClick={() => navigate("/")}
        >
          Switch to Client
        </div>
      </header>

      {/* SECTION: SERVICE DETAILS */}
      <section className="sp-section">
        <h2>Your Service Details</h2>

        <div className="form-grid">
          <input placeholder="Service Provider Name *" />

          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="">Select Event Type *</option>
            {EVENT_TYPES.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>

          <div className="search-dropdown">
            <input
              placeholder="Search Service Type *"
              value={serviceSearch}
              onChange={(e) => setServiceSearch(e.target.value)}
            />
            <div className="dropdown">
              {filteredServiceTypes.map((s) => (
                <div
                  key={s}
                  onClick={() => {
                    setServiceType(s);
                    setServiceSearch(s);
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept=".png,.jpg,.jpeg,.svg,.mp4,.mov"
            onChange={handleFileChange}
          />
        </div>

        {/* Media Slider */}
        <div className="media-slider">
          {files.map((file, index) => (
            <div key={index} className="media-card">
              {file.type.startsWith("video") ? (
                <video src={URL.createObjectURL(file)} controls />
              ) : (
                <img src={URL.createObjectURL(file)} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: ADDRESS */}
      <section className="sp-section">
        <h2>Service Provider Address</h2>

        <div className="form-grid">
          <input placeholder="Address *" />
          <input placeholder="Address 2 *" />
          <input placeholder="Landmark" />

          <select defaultValue="India">
            <option>India</option>
          </select>

          <select defaultValue="Delhi">
            <option>Delhi</option>
          </select>

          <select defaultValue="New Delhi">
            <option>New Delhi</option>
          </select>
        </div>

        {/* Map */}
        <div className="map-section">
          <div className="map-box" onClick={handleMapClick}>
            Google Map (Click to select location)
          </div>

          <div className="latlng">
            <input placeholder="Latitude" value={lat} readOnly />
            <input placeholder="Longitude" value={lng} readOnly />
          </div>
        </div>
      </section>
    </div>
  );
}

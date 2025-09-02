import React, { useState } from "react";

function MyMap() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div>

        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15557.007063514431!2d80.2209362!3d12.891526!3m2!1i1024!2i768!4f13.1!2m1!1sRTO%20office%20near%2CSholinganallur%2CChennai-600119!5e0!3m2!1sen!2sin!4v1756745269803!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

    
    </div>
  );
}

export default MyMap;

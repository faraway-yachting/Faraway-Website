import { Fragment } from "react";

const AmaAvailability = () => {
  return (
    <Fragment>
      <div className="min-h-screen bg-white">
        <iframe 
          src="https://theflow2509.notion.site/ebd/26c48d42cddc457aab0571df4e616b2e" 
          width="100%" 
          height="1200" 
          frameBorder="0" 
          allowFullScreen
          className="w-full border-0"
          title="Amadeus Availability"
        />
      </div>
    </Fragment>
  );
};

export default AmaAvailability;
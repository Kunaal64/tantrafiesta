import SpeakerCard from "./bytes/SpeakerCard";

/**
 * SpeakersGrid Component
 * 
 * A responsive grid layout for displaying Speaker cards.
 * 
 * Features:
 * - Manually defines a set of `SpeakerCard` components for key speakers.
 * - Adapts columns based on screen size (lg: 2 cols, 2xl: 3 cols).
 */
const SpeakersGrid = () => {
  return (
    <div className="grid gap-1 place-content-center lg:grid-cols-2 2xl:grid-cols-3 mt-16">
      <SpeakerCard
        name="Devinder Maheshwari"
        details="Founder at Beebom"
        image="/assets/speakers/devinder_maheshwari.jpg"
        link="https://www.linkedin.com/in/devindermaheshwari/"
      />
      <SpeakerCard
        name="Siddharth Dungarwal"
        details="Founder Snitch.co.in"
        image="/assets/speakers/siddharth_dungarwal.jpg"
        link="https://www.linkedin.com/in/siddharthrdungarwal"
      />

      <SpeakerCard
        name="Rajeev Kapoor"
        details="Head at TATA Advanced Systems"
        image="/assets/speakers/rajeev_kapoor.jpg"
        link="https://www.linkedin.com/in/rajeev-kapoor-ba209935/"
      />
    </div>
  );
};

export default SpeakersGrid;



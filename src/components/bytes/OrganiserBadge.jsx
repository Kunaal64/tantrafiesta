/**
 * OrganiserBadge Component
 * 
 * A simple pill-shaped badge to display the organizer's name.
 * 
 * Props:
 * - text: The organizer's name.
 * - theme: The color theme for the badge border and text.
 */
const OrganiserBadge = ({ text, theme }) => {
  return (
    <p
      style={{
        borderColor: `${theme}`,
        color: `${theme}`,
      }}
      className="inline-block px-2 py-1 cursor-pointer text-center rounded-full  border font-semibold  text-xs  "
    >
      {text}
    </p>
  );
};

export default OrganiserBadge;



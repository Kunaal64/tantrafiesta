

/**
 * GPTGimmick Component
 * 
 * Displays a centered image as a visual gimmick for the GPT-3.5 event card.
 */
const GPTGimmick = ({ image }) => {
  return (
    <div className=" bg-transparent h-full w-full flex flex-col justify-center">
      <img src={image} height={699} width={465} />
    </div>
  );
};

export default GPTGimmick;


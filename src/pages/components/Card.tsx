import bgCard from "/src/assets/terrain.jpg";

interface Props {
  imgUrl: string;
  btn: string;
  text: string;
}

const Card = ({ imgUrl, btn, text}: Props) => {
  console.log(bgCard);

  return (
    <figure className="flex flex-col z-3  shadow-2xl bg-emerald-600 rounded-2xl mb-8 mt-16">
      <div
        className={`rounded-t-2xl h-56 w-full flex justify-center items-center`}
        style={{ backgroundImage: `url(${bgCard})` }}
      >
        <img src={imgUrl} className="size-80 object-contain p-5" alt="player-show" />
      </div>
      <h1 className="flex justify-center underline text-2xl font-bold text-white">
        {btn}
      </h1>
      <figcaption className="flex flex-col flex-1 justify-between items-center gap-3 py-5">
        <p className="text-center text-white w-60 b-3 ">
         {text}
        </p>

        <button className="rounded-xl relative p'2 flex justify-center items-center m-auto min-h-[50px] w-fit overflow-hidden border border-emerald-100 bg-white px-3 text-black font-bold cursor-pointer shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-emerald-400 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full hover:before:bg-emerald-200">
          <span className="relative z-10">{btn}</span>
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;

interface Props {
  imgUrl: string;
  btn: string;
  text: string;
}

const Card = (props: Props) => {
  const { imgUrl, btn, text } = props

  return (
    <figure className="flex flex-col shadow-2xl bg-emerald-600 overflow-hidden rounded-2xl mb-8 mt-16 shadow-nav">
      <img
        src={imgUrl}
        fetchPriority="high"
        decoding="async"
        width="1920"
        height="1080"
        className="size-80 object-contain p-5
              h-56 w-full flex justify-center items-center bg-[url(/src/assets/terrain.jpg)]" alt="player-show"
      />

      <figcaption className="flex flex-col flex-1 items-center gap-3 p-5">
        <button className="rounded-xl relative p-2 flex justify-center items-center min-h-[50px] w-fit overflow-hidden border border-emerald-100 bg-white px-3 text-black font-bold cursor-pointer shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-emerald-400 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full hover:before:bg-emerald-200">
          <span className="relative">{btn}</span>
        </button>
        <p className="text-center text-white w-60">
          {text}
        </p>
      </figcaption>
    </figure>
  );
};

export default Card;

const Shimmer = () => {
  return (
    <div className="shimmer-card w-[350px] h-[380px] border-transparent border-2 rounded-t-xl rounded-b-md  p-3 my-7 mx-4">
      <div className="shimmer-image-container">
        <div className="shimmer-img w-full h-[250px] bg-zinc-300 rounded-t-xl rounded-b-sm"></div>
      </div>
      <div className="shimmer-card-details">
        <div className="shimmer-res-name w-4/5 h-5 bg-zinc-300 rounded-xl mt-5"></div>
        <div className="shimmer-cuisines w-1/2 h-5 bg-zinc-300 rounded-xl mt-5"></div>
      </div>
    </div>
  );
};

export default Shimmer;

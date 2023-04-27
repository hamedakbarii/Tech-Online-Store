let HamburgerMenue = ({ HandleHamburgerActivation }) => {
  return (
    <div
      className="w-8 h-6 flex flex-col justify-between relative"
      onClick={() => {
        HandleHamburgerActivation(true);
      }}
    >
      <span className="absolute top-0 w-full h-1 rounded-full bg-white"></span>
      <span className="absolute top-[50%] -translate-y-[50%] w-full h-1 rounded-full bg-white"></span>
      <span className="absolute bottom-0  w-full h-1 rounded-full bg-white"></span>
    </div>
  );
};
export default HamburgerMenue;

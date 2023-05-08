
import background from "../assets/img/background.png";
import TextWrite from "./TextWrite";

const Header = () => {
  return (
    <div className="relative -z-50">
      <img
        src={background}
        alt="backgorund"
        className=" w-screen h-screen object-cove"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <p className="text-white text-2xl md:text-4xl lg:text-6xl">
          <TextWrite text="Welcome! Im Miguel Martínez, Software Engineer." />
        </p>
      </div>
    </div>
  );
};

export default Header;

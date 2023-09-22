import CardSignup from "@/components/signin/card-signup";
import poptartCat from "/nyancat-rainbow-cat.gif";

const Signup = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center rounded-lg p-8 ">
      <div className="flex flex-col space-y-5 md:space-y-14 items-center">
        <div className="flex justify-center items-center space-x-3 md:space-x-5 xl:space-x-10">
          <h1 className="text-4xl font-bold tracking-tight md:text-7xl">
            Url Shortener
          </h1>
          <img
            src={poptartCat}
            className="object-contain animate-bounce w-20 md:w-32 lg:w-40 xl:w-48"
            alt="Vite logo"
          />
        </div>

        <CardSignup />
      </div>
    </div>
  );
};

export default Signup;

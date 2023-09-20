import poptartCat from "/nyancat-rainbow-cat.gif";
import CardSignin from "@/components/signin/card-signin";
const Signin = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center rounded-lg p-8 ">
      <div className="flex flex-col space-y-14 items-center">
        <div className="flex justify-center items-center space-x-10">
          <h1 className="text-7xl font-bold tracking-tight">Url Shortener</h1>
          <img
            src={poptartCat}
            className="object-contain animate-bounce"
            alt="Vite logo"
          />
        </div>

        <CardSignin />
      </div>
    </div>
  );
};

export default Signin;

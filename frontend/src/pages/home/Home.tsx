// import poptartCat from "/nyan-cat-poptart-cat.gif";
import poptartCat from "/nyancat-rainbow-cat.gif";
import Container from "@/components/container";
import UrlForm from "@/components/home/form/url-form";
const Home = () => {
  return (
    <>
      <div
        // className="h-screen w-screen flex items-center justify-center rounded-lg p-8 "
        className="h-screen w-screen rounded-lg p-2 "
      >
        <Container>
          <div className="flex justify-center items-center space-x-3 space-y-14 md:space-x-5 xl:space-x-10 md:space-y-0">
            <h1 className="text-4xl font-bold tracking-tight md:text-7xl">
              Url Shortener
            </h1>
            <img
              src={poptartCat}
              className="object-contain animate-bounce w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
              alt="Vite logo"
            />
          </div>
          {/* <div className="flex justify-center items-center space-x-10 space-y-14">
            <h1 className="text-7xl font-bold tracking-tight">Url Shortener</h1>
            <img
              src={poptartCat}
              className="object-contain animate-bounce"
              alt="Vite logo"
            />
          </div> */}
          <UrlForm />
        </Container>

        {/* <div className="flex flex-col space-y-14 items-center">
          <div className="flex justify-center items-center space-x-10">
            <h1 className="text-7xl font-bold tracking-tight">Url Shortener</h1>
            <img
              src={poptartCat}
              className="object-contain animate-bounce"
              alt="Vite logo"
            />
          </div>
          <CardSignin />
        </div> */}
      </div>
    </>
  );
};

export default Home;

import React from "react";
// import poptartCat from "/nyan-cat-poptart-cat.gif";
import poptartCat from "/nyancat-rainbow-cat.gif";
import CardSignin from "@/components/signin/card-signin";
import Container from "@/components/container";
import UrlForm from "@/components/home/form/url-form";
const Home = () => {
  return (
    <>
      <div
        // className="h-screen w-screen flex items-center justify-center rounded-lg p-8 "
        className="h-screen w-screen rounded-lg p-8 "
      >
        <Container>
          <div className="flex justify-center items-center space-x-10 space-y-14">
            <h1 className="text-7xl font-bold tracking-tight">Url Shortener</h1>
            <img
              src={poptartCat}
              className="object-contain animate-bounce"
              alt="Vite logo"
            />
          </div>
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

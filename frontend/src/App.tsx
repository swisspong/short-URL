import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import gafield from "/rolling-cat-cat-rolling.gif";
import { Button } from "./components/ui/button";
import Signin from "./pages/signin/Signin";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  useEffect(() => {
    setPageLoading(true);
    setTimeout(() => {
      setPageLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {" "}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {pageLoading ? (
          <div className="h-screen w-screen rounded-lg p-8 flex justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src={gafield}
                className="object-contain animate-bounce max-h-11"
                alt="Vite logo"
              />
              <h1 className="text-xl font-bold tracking-tight">
                Please wait...
              </h1>
            </div>
          </div>
        ) : (
          <>
            <Router>
              <Routes>
                <Route element={<ModeToggle />}>
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/" element={<Home />} />
                </Route>
              </Routes>
            </Router>
          </>
        )}
      </ThemeProvider>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button>Click</Button> */}
      {/* <Signin /> */}
    </>
  );
}

export default App;

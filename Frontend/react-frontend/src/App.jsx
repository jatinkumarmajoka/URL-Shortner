import * as React from "react";
import { Analytics } from "@vercel/analytics/react";
import Form from "./components/Form";
import { Chip } from "@nextui-org/react";

function App() {
  // Subtext of "Made By" & "View on Github"
  const BottomText = () => {
    return (
      <>
        <div className="subtitle flex flex-col gap-4">
          <a
            href="https://github.com/jatinkumarmajoka/URL-Shortner"
            target="_blank"
            rel="noreferrer"
          >
            <Chip
              color="default"
              variant="faded"
              radius="full"
              endContent={<i className="devicon-github-original"></i>}
            >
              View Github Repository
            </Chip>
          </a>

          <a href="https://github.com/jatinkumarmajoka" className="subtitle_color">
            <Chip
              color="primary"
              variant="bordered"
              radius="full"
              style={{ borderColor: "#00bbff", color: "#00bbff" }}
            >
              Made by Jatin
            </Chip>
          </a>
        </div>
      </>
    );
  };

  // Main Image of Website. Onclick will re-navigate to the website
  

  return (
    <>
      <Analytics /> {/* Vercel Analytics */}
      <div className="h-screen w-screen flex flex-col justify-center items-center text-center dark text-foreground bg-background">
        <Form />
        <br></br>
        <BottomText />
      </div>
    </>
  );
}

export default App;
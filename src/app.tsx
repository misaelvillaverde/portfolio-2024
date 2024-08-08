import { Experience } from "./components/experience";
import { Github } from "./components/github";
import { Mongolerias } from "./components/mongolerias";
import { Piano } from "./components/piano";
import { Rumis } from "./components/rumis";
import { Spheres } from "./components/spheres";

export function App() {
  return (
    <div className="max-w-screen-lg mx-auto my-16 px-4 xl:px-0">
      <img
        src="/images/prof.jpeg"
        alt="Misael Villaverde"
        className="rounded-lg w-40 h-40 mt-6"
      />

      <h1 className="text-3xl font-medium text-title my-4">
        Hello, I’m Misael — Building Software at{" "}
        <span className="text-hampao">
          BabyHampao{" "}
          <img
            src="/images/bao.gif"
            alt="bao animation"
            className="inline w-9"
          />
        </span>
        . <span className="text-prevjob">Previously at Omniscape.</span>
      </h1>
      <p className="text-subtitle max-w-screen-sm">
        I am a full-stack software engineer that loves to solve real life
        problems with straightforward solutions.
      </p>

      <div className="card-grid mt-6">
        <div className="card area">
          <a href="https://rumis.app" target="_blank" rel="noreferrer">
            <Rumis />
          </a>
        </div>
        <div className="card exp">
          <Experience />
        </div>
        <div className="card github">
          <a
            href="https://github.com/misaelvillaverde"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
        <div className="card mongolerias">
          <a
            href="https://github.com/misaelvillaverde/mongolerias-calculator-pro"
            target="_blank"
            rel="noreferrer"
          >
            <Mongolerias />
          </a>
        </div>
        <div className="card piano aspect-[1/1] min-[480px]:aspect-[2/1]">
          <a href="https://piano.potifar.dev" target="_blank" rel="noreferrer">
            <Piano />
          </a>
        </div>
        <div className="card spheres">
          <a
            href="https://spheres.potifar.dev"
            target="_blank"
            rel="noreferrer"
          >
            <Spheres />
          </a>
        </div>
      </div>

      <div className="flex gap-1 items-center w-full justify-center mt-8">
        <img
          src="/images/construction.gif"
          alt="Under construction"
          className="w-[19px] h-[19px]"
        />
        <span className="text-subtitle text-sm">Under construction!</span>
      </div>
    </div>
  );
}

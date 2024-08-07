import { Experience } from "./components/experience";
import { Piano } from "./components/piano";
import { Spheres } from "./components/spheres";

export function App() {
  return (
    <div className="max-w-screen-md mx-auto my-16 px-4 lg:px-0">
      <img
        src="/images/prof.jpeg"
        alt="Misael Villaverde"
        className="rounded-lg w-40 h-40 mt-7"
      />

      <h1 className="text-3xl font-medium text-title my-7">
        Hello I’m Misael — Building Software at{" "}
        <span className="text-hampao font-bold">BabyHampao</span>.{" "}
        <span className="text-prevjob">Previously at Omniscape.</span>
      </h1>
      <p className="text-subtitle max-w-screen-sm">
        I am a full-stack software engineer that loves to solve real life
        problems with straightforward solutions.
      </p>

      <div className="card-grid mt-16">
        <div className="card area">1</div>
        <div className="card exp">
          <Experience />
        </div>
        <div className="card github">3</div>
        <div className="card mongolerias">4</div>
        <div className="card piano aspect-[1/1] min-[480px]:aspect-[2/1]">
          <Piano />
        </div>
        <div className="card spheres aspect-[1/1]">
          <Spheres />
        </div>
      </div>
    </div>
  );
}

import { Badge } from "./ui/badge";
import { Icons } from "./ui/icons";

const exp = [
  {
    company: "Hypernova Labs",
    year: 2021,
  },
  {
    company: "OmniscapeXR",
    year: 2021,
  },
  {
    company: "BabyHampao",
    year: 2024,
  },
] as const;

export const Experience = () => (
  <div className="flex relative justify-center items-center w-full h-full">
    <Badge
      icon={<Icons.briefcase />}
      title="Experience"
      className="absolute top-1 left-1"
    />
    <div className="relative mt-8">
      <div className="absolute top-[-8px] left-[-0.3px] h-full border-2 border-hampao"></div>
      <div>
        {exp.map((event, index) => (
          <div
            key={index}
            className="flex items-center mb-6 last:mb-0 last:text-hampao"
          >
            <div className="bg-hampao ml-[-0.4rem] rounded-full p-[0.5rem]"></div>
            <div className="ml-4">
              <h3 className="text-xs font-medium text-title">
                {event.company}
              </h3>
              <p className="text-[10px] text-gray-500">{event.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

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
  <div>
    <Badge icon={<Icons.briefcase />} title="Experience" />
    <div className="pt-4 h-full w-full relative">
      <div className="absolute left-[0.32rem] top-2 h-[80%] border-[0.1rem] border-title"></div>
      <div>
        {exp.map((event, index) => (
          <div
            key={index}
            className="flex items-center mb-3 last:mb-0 last:text-hampao"
          >
            <div className="bg-title rounded-full p-[0.4rem]"></div>
            <div className="ml-3">
              <h3 className="text-xs font-medium text-title">{event.company}</h3>
              <p className="text-[10px] text-gray-500">{event.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

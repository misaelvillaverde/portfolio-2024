import { Badge } from "./ui/badge";
import { Icons } from "./ui/icons";

export const Mongolerias = () => (
  <div className="h-full w-full relative">
    <Badge
      icon={<Icons.sphere />}
      title="Calculator"
      className="absolute bottom-1 right-1"
    />
    <img
      src="/images/calc.png"
      alt="calc"
      className="h-full w-full object-cover rounded-md"
    />
  </div>
);

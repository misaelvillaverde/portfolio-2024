import { Badge } from "./ui/badge";
import { Icons } from "./ui/icons";

export const Piano = () => (
  <div className="h-full w-full relative">
    <Badge
      icon={<Icons.sphere />}
      title="Projects: Piano"
      className="absolute top-1 left-1"
    />
    <img
      src="/images/piano.png"
      alt="piano"
      className="h-full w-full object-cover rounded-md object-[50%_65%]"
    />
  </div>
);

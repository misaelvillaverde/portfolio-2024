import { Badge } from "./ui/badge";
import { Icons } from "./ui/icons";

export const Spheres = () => (
  <div className="h-full w-full relative">
    <Badge
      icon={<Icons.sphere />}
      title="Projects: Spheres"
      className="absolute top-1 left-1"
    />
    <img
      src="/images/spheres.jpeg"
      alt="spheres"
      className="h-full w-full object-cover rounded-md"
    />
  </div>
);

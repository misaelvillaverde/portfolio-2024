import { type ReactNode } from "preact/compat";

export const Badge = ({
  icon,
  title,
  className,
}: {
  icon: ReactNode;
  title: string;
  className?: string;
}) => (
  <div className={className}>
    <div className="flex items-center bg-badge text-badge-foreground rounded-xl w-fit px-2 p-1">
      {icon}
      <span className="text-xs ml-1">{title}</span>
    </div>
  </div>
);

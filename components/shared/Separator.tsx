import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ISeparatorProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  withText?: string;
}

const Separator: FC<ISeparatorProps> = ({ withText, className, ...props }) => {
  return (
    <div className={cn("relative", className)} {...props}>
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      {withText && (
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {withText}
          </span>
        </div>
      )}
    </div>
  );
};

export default Separator;

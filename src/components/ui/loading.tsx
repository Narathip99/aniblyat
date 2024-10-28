import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: number;
  className?: string;
}

export const SpinnerLoader: React.FC<LoadingProps> = ({
  size = 24,
  className,
}) => (
  <Loader2 className={cn("animate-spin text-primary", className)} size={size} />
);

export const DotsLoader: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex space-x-1", className)}>
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="w-2 h-2 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

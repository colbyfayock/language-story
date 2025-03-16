import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5", className)}>
      {children}
    </div>
  );
};

export default Container;

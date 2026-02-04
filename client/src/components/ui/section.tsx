import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({ id, children, className, fullHeight = false, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto scroll-mt-20",
        fullHeight && "min-h-screen flex flex-col justify-center",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}


import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn('mb-10', centered && 'text-center', className)}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

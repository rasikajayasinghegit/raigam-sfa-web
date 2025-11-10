interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <div className="flex h-full flex-col gap-4 rounded-lg border border-dashed border-border p-8">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description ? <p className="text-muted-foreground">{description}</p> : null}
      <p className="text-sm text-muted-foreground">
        This is a placeholder screen. Replace it with the production-ready implementation when the
        API contracts and UI requirements are finalized.
      </p>
    </div>
  );
};

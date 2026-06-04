function ProficiencyCard({ title, children }) {
  return (
    <div className="card card-hover">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <div className="w-2 h-2 rounded-full bg-accent"></div>
        </div>
        <div>
          <h3 className="text-text-primary font-semibold mb-2">{title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default ProficiencyCard;

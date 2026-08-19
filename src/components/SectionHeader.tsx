interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="reveal">
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2 className="sec-title">{title}</h2>
      <div className="sec-rule" />
    </div>
  );
}

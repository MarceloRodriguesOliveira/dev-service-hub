const STATIC_COLOR = "#13FFAA";

export default function AuroraGradient({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundImage = `radial-gradient(125% 125% at 50% 0%, #020617 50%, ${STATIC_COLOR})`;
  return (
    <section style={{ backgroundImage }} className="relative min-h-screen">
      {children}
    </section>
  );
}

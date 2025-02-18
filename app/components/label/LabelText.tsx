type textProp = {
  children: React.ReactNode;
};

export default function LabelText({ children }: textProp) {
  return (
    <>
      <p className="text-lg front-grotesk md:text-left">{children}</p>
    </>
  );
}

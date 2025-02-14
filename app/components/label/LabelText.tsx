type textProp = {
  children: React.ReactNode;
};

export default function LabelText({ children }: textProp) {
  return (
    <div className="border-blue-300">
      <p className="text-lg front-grotesk text-center md:text-left">
        {children}
      </p>
    </div>
  );
}

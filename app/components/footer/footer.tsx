import CubeLogo from "@/public/cube.svg";

export default function Footer() {
  return (
    <footer className="w-full border-greyed border-t-2 mt-20 text-center py-10 flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-3">
        <CubeLogo width={50} height={50} />
        <h4 className="text-2xl font-grotesk">DevHub</h4>
      </div>
      <p className="text-sm">
        © 2025 <strong>DevHub</strong>. Todos os direitos reservados.
      </p>
    </footer>
  );
}

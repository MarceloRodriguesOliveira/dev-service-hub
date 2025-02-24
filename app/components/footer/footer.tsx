import CodeIcon from "@mui/icons-material/Code";

export default function Footer() {
  return (
    <footer className="w-full border-greyed border-t-2 mt-20 text-center py-10 flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-3">
        <CodeIcon />
        <h4 className="text-2xl font-grotesk">DevServiceHub</h4>
      </div>
      <p className="text-sm">
        © 2025 <strong>DevServiceHub</strong>. Todos os direitos reservados.
      </p>
    </footer>
  );
}

import { Card, CardContent, CardHeader } from "@mui/material";
import LoginForm from "./login-form";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen px-4">
      <Card className="max-w-sm w-full rounded-2xl mt-12 h-full ">
        <CardHeader
          title="Login"
          subheader="Faça seu login para prosseguir."
          slotProps={{
            title: { color: "#191a23", fontSize: "18px", fontWeight: "700" },
            subheader: { fontSize: "14px" },
          }}
        />
        <CardContent className="py-0">
          <LoginForm />
        </CardContent>
      </Card>
      <p className="text-sm text-white mt-3">
        Não possui uma conta?{" "}
        <Link className="text-gray-500 hover:underline" href="/register">
          Cadastre-se aqui
        </Link>
      </p>
    </div>
  );
}

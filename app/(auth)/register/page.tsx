import { Card, CardHeader, CardContent } from "@mui/material";
import RegisterForm from "./register-form";
import Link from "next/link";

export default async function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center  border border-red-950 h-full py-40">
      <Card className="max-w-sm w-full rounded-2xl mt-12 h-full">
        <CardHeader>
          <h2 className="text-xl font-bold">Cadastre-se</h2>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Já possui cadastro?{""}
        <Link className="text-gray-800 hover:underline" href="/login">
          Faça o login
        </Link>
      </p>
    </div>
  );
}

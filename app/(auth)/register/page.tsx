import { Card, CardContent } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import RegisterForm from "./register-form";
import Link from "next/link";

export default async function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen px-4">
      <Card className="max-w-sm w-full rounded-2xl mt-12 h-full ">
        <CardHeader
          title="Cadastre-se"
          subheader="Faça seu cadastro gratuitamente."
          slotProps={{
            title: { color: "#191a23", fontSize: "18px", fontWeight: "700" },
            subheader: { fontSize: "14px" },
          }}
        />
        <CardContent className="py-0">
          <RegisterForm />
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground text-white mt-3">
        Já possui cadastro?{" "}
        <Link className="text-gray-500 hover:underline" href="/login">
          Faça o login
        </Link>
      </p>
    </div>
  );
}

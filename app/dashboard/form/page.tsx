import { Card, CardContent, CardHeader } from "@mui/material";
import BuildMyProjectForm from "./project-form";

export default function HireOurServices() {
  return (
    <div className="flex flex-col justify-center items-center border border-red-600 min-h-screen bg-[url('/noise.svg')] bg-cover bg-center">
      <Card className="max-w-sm w-full rounded-2xl mt-12 h-full ">
        <CardHeader
          title="Discuta o seu projeto conosco"
          subheader="Nos conte um pouco sobre sua aplicação web!"
        />
        <CardContent className="py-0 ">
          <BuildMyProjectForm />
        </CardContent>
      </Card>
    </div>
  );
}

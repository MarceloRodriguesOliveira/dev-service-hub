"use client";

import { useActionState } from "react";
import registerAction from "./registerAction";
import Form from "next/form";
import { Button, TextField } from "@mui/material";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);

  return (
    <>
      {state?.success === false && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-5 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Erro!</strong>
          <span className="block">{state?.message}</span>
        </div>
      )}
      <Form action={formAction} className="flex flex-col gap-4 ">
        <div className="w-full">
          <TextField
            label="Nome"
            variant="outlined"
            className="w-full"
            name="name"
          ></TextField>
        </div>
        <div>
          <TextField
            label="E-mail"
            variant="outlined"
            className="w-full"
            name="email"
            type="email"
            slotProps={{
              input: { autoComplete: "new-password" },
            }}
          >
            email
          </TextField>
        </div>
        <div>
          <TextField
            label="Senha"
            variant="outlined"
            className="w-full"
            name="password"
            type="password"
            slotProps={{
              input: { autoComplete: "off" },
            }}
          ></TextField>
        </div>
        <div>
          <Button
            disabled={isPending}
            sx={{
              backgroundColor: "#191a23",
              color: "white",
              "&:hover": {
                backgroundColor: "#22232d",
              },
            }}
            className="w-full mt-6 text-white text-center text-base transition ease-in"
            type="submit"
          >
            Registrar
          </Button>
        </div>
      </Form>
    </>
  );
}

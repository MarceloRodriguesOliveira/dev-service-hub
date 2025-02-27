"use client";
import { useActionState } from "react";
import loginAction from "./loginAction";
import Form from "next/form";
import { Button, TextField } from "@mui/material";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
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
      <Form action={formAction} className="flex flex-col gap-4">
        <div className="w-full">
          <TextField
            label="E-mail"
            name="email"
            variant="outlined"
            className="w-full"
          />
        </div>
        <div>
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            className="w-full"
            type="password"
          />
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
            className="w-full  text-white text-center text-base transition ease-in"
            type="submit"
          >
            Login
          </Button>
        </div>
      </Form>
    </>
  );
}

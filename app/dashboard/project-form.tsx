"use client";
import { Button, MenuItem, TextField } from "@mui/material";
import Form from "next/form";
import SubmitAction from "./submitAction";
import { useActionState } from "react";
import { backEndTechnologies, frontEndTechnologies } from "@/techs";

interface Techs {
  id: number;
  tech: string;
}

export default function BuildMyProjectForm() {
  const frontEnd: Techs[] = frontEndTechnologies;
  const [state, formAction, isPending] = useActionState(SubmitAction, null);
  return (
    <Form
      action={formAction}
      className="flex flex-col border border-red-800 justify-center items-center gap-2"
    >
      <div className="w-full grid grid-cols-2 gap-2 auto-cols-fr">
        <div className="w-full">
          <TextField
            select
            name="frontend"
            label="Tecnologias Front-End"
            defaultValue="React"
            variant="filled"
            className="w-full"
          >
            {frontEnd.map((front) => (
              <MenuItem key={front.id} value={front.tech}>
                {front.tech}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <div className="w-full">
            <TextField
              select
              name="frontend"
              label="Tecnologias Front-End"
              defaultValue="React"
              variant="filled"
              className="w-full"
            >
              {backEndTechnologies.map((back) => (
                <MenuItem key={back.id} value={back.tech}>
                  {back.tech}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>

      <Button className=" bg-red-400" disabled={isPending} type="submit">
        Submit
      </Button>
    </Form>
  );
}

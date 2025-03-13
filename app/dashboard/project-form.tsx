"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Form from "next/form";
import SubmitAction from "./submitAction";
import { useActionState } from "react";
import {
  backEndTechnologies,
  frontEndTechnologies,
  databaseList,
} from "@/techs";

interface Techs {
  id: number;
  tech: string;
}

export default function BuildMyProjectForm() {
  const frontEnd: Techs[] = frontEndTechnologies;
  const [state, formAction, isPending] = useActionState(SubmitAction, null);
  if (state?.success === false) {
    console.log();
  }
  return (
    <Form
      action={formAction}
      className="flex flex-col justify-center items-center gap-6"
    >
      <FormControl fullWidth>
        <InputLabel id="backend-label">Tecnologias Front-End</InputLabel>
        <Select
          variant="outlined"
          multiple={true}
          name="frontend"
          label="Tecnologias Front-End"
          defaultValue={[]}
          className="w-full"
        >
          {frontEnd.map((front) => (
            <MenuItem key={front.id} value={front.tech}>
              {front.tech}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="backend-label">Tecnologias Back-End</InputLabel>
        <Select
          multiple={true}
          name="backend"
          label="Tecnologias Back-End"
          defaultValue={[]}
          className="w-full"
        >
          {backEndTechnologies.map((back) => (
            <MenuItem key={back.id} value={back.tech}>
              {back.tech}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="databse-label">Banco de dados</InputLabel>
        <Select
          multiple={true}
          name="database"
          label="banco de dados"
          defaultValue={[]}
          className="w-full"
        >
          {databaseList.map((option) => (
            <MenuItem key={option.id} value={option.tech}>
              {option.tech}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button className="bg-red-400" disabled={isPending} type="submit">
        Enviar Ticket
      </Button>
    </Form>
  );
}

"use client";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Form from "next/form";
import SubmitAction from "./submitAction";
import { useActionState, useEffect, useState } from "react";
import {
  frontendTechnologies,
  backendTechnologies,
  databaseList,
  microservices,
} from "@/techs";
import { toast, ToastContainer } from "react-toastify";

interface names {
  id: number;
  name: string;
}

export default function BuildMyProjectForm() {
  const frontEnd: names[] = frontendTechnologies;
  const [isOpen, setOpen] = useState<boolean>(false);
  const [state, formAction, isPending] = useActionState(SubmitAction, null);
  const getSubmitStatus = () => {
    return state?.success === true
      ? toast.success("Ticket enviado. Designando desenvolvedores...")
      : toast.error("Não foi possível enviar o ticket");
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(event.target.checked);
  };

  useEffect(() => {
    if (state) {
      getSubmitStatus();
    }
  }, [state]);

  return (
    <>
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
              <MenuItem key={front.id} value={front.name}>
                {front.name}
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
            {backendTechnologies.map((back) => (
              <MenuItem key={back.id} value={back.name}>
                {back.name}
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
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="databse-label">Microserviços</InputLabel>
          <Select
            multiple={true}
            //disabled={!isOpen}
            name="microservices"
            label="microservicos"
            defaultValue={[]}
            className="w-full"
          >
            {microservices.map((option) => (
              <MenuItem key={option.id} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          sx={{
            backgroundColor: "#191a23",
            color: "white",
            "&:hover": {
              backgroundColor: "#22232d",
            },
          }}
          className="w-full  text-white text-center text-base transition ease-in"
          disabled={isPending}
          type="submit"
        >
          Enviar Ticket
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
}

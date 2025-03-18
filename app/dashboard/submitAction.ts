"use server";

interface FormDataObject {
  frontEnd: string[];
  backEnd: string[];
  database: string[];
  microservices?: string[] | false;
}

export default async function SubmitAction(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _prevState: any,
  formData: FormData
) {
  try {
    const microservices = formData.getAll("microservices") as string[];
    const data: FormDataObject = {
      frontEnd: formData.getAll("frontend") as string[],
      backEnd: formData.getAll("backend") as string[],
      database: formData.getAll("database") as string[],
      ...(microservices.length > 0
        ? { microservices: formData.getAll("microservices") as string[] }
        : { microservices: false }),
    };

    console.log("=== Server Action Submit Ticket ===");
    console.log(data);

    if (
      data.frontEnd.length === 0 ||
      data.frontEnd.every((v) => v.trim() === "") ||
      data.backEnd.length === 0 ||
      data.backEnd.every((v) => v.trim() === "") ||
      data.database.length === 0 ||
      data.database.every((v) => v.trim() === "")
    ) {
      return { message: "Preencha todo os campos", success: false };
    }

    return {
      message: "Dados Enviados com Sucesso",
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Ocorreu um erro inesperado. Tente novamente.",
      success: false,
    };
  }
}

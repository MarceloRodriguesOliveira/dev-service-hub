"use server";

export default async function SubmitAction(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _prevState: any,
  formData: FormData
) {
  const data = {
    frontEnd: formData.getAll("frontend") as string[],
    backEnd: formData.getAll("backend") as string[],
    database: formData.getAll("database") as string[],
  };

  console.log("=== Server Action Submit Ticket");
  console.log(data);

  if (
    data.frontEnd.length === 0 ||
    data.backEnd.length === 0 ||
    data.database.length === 0
  ) {
    return {
      message: "Preencha todos os campos",
      success: false,
    };
  }
}

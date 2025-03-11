"use server";

export default async function SubmitAction(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _prevState: any,
  formData: FormData
) {
  console.log(formData);
}

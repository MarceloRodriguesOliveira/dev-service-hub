"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      redirectTo: "/dashboard/form",
    });

    return { success: true };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (isRedirectError(e)) {
      throw e;
    }
    if (e.type === "CredentialsSignin") {
      return { success: false, message: "Dados de login incorretos" };
    }
    console.error(e);
    return { success: false, message: "Oops, algum erro occoreu" };
  }
}

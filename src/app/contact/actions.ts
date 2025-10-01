"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get("name") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const company = (formData.get("company") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();

  const errors: ContactFormState["errors"] = {};

  if (!name) {
    errors.name = "Please share your name.";
  }

  if (!email || !email.includes("@")) {
    errors.email = "A valid email helps us follow up.";
  }

  if (!message) {
    errors.message = "Let me know a bit about the project.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Mind checking the highlighted fields?",
      errors,
    };
  }

  console.info("New contact request", {
    name,
    email,
    company,
    message,
  });

  return {
    status: "success",
    message: "Thanks for reaching out. I will respond within one business day.",
  };
}

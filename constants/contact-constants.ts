import {
  type ContactField,
  type ContactFormData,
} from "@/types/contact-types";

export const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

export const REQUIRED_FIELDS: ContactField[] = ["name", "email", "message"];

// The submission is a mailto: link, so this is what the visit is about rather
// than a price bracket.
export const BUDGET_OPTIONS = [
  { value: "Full-time role", label: "Full-time role" },
  { value: "Contract", label: "Contract" },
  { value: "Freelance", label: "Freelance" },
  { value: "Advisory", label: "Advisory" },
] as const;

export const ALERT_DURATION = 5000;

export const CONTACT_SUCCESS_MESSAGE =
  "Your email app is opening with the message ready to send.";
export const CONTACT_ERROR_MESSAGE =
  "Something went wrong. Please email me directly instead.";

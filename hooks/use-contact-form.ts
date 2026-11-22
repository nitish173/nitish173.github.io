"use client";

import { useCallback, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ALERT_DURATION,
  CONTACT_ERROR_MESSAGE,
  CONTACT_SUCCESS_MESSAGE,
  INITIAL_FORM_STATE,
  REQUIRED_FIELDS,
} from "@/constants/contact-constants";
import { CONTACT_EMAIL } from "@/constants/social-constants";
import {
  type AlertState,
  type AlertType,
  type ContactField,
  type ContactFormData,
} from "@/types/contact-types";

const HIDDEN_ALERT: AlertState = {
  visible: false,
  type: "success",
  message: "",
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [alert, setAlert] = useState<AlertState>(HIDDEN_ALERT);
  const alertTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const update = useCallback((key: ContactField, value: string) => {
    setFormData((previous) => ({ ...previous, [key]: value }));
  }, []);

  const completion = useMemo(() => {
    const filled = REQUIRED_FIELDS.filter((key) => formData[key].trim()).length;
    return filled / REQUIRED_FIELDS.length;
  }, [formData]);

  const showAlert = useCallback((type: AlertType, message: string) => {
    if (alertTimer.current) clearTimeout(alertTimer.current);
    setAlert({ visible: true, type, message });
    alertTimer.current = setTimeout(
      () => setAlert(HIDDEN_ALERT),
      ALERT_DURATION
    );
  }, []);

  // Static site: there is no API route, so the form composes an email in the
  // visitor's mail client. Works on GitHub Pages with no backend or secrets.
  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (completion < 1) {
        showAlert("danger", CONTACT_ERROR_MESSAGE);
        return;
      }

      const subject = encodeURIComponent(
        `Portfolio enquiry from ${formData.name}`
      );
      const body = encodeURIComponent(
        [
          formData.message,
          "",
          `From: ${formData.name} <${formData.email}>`,
          formData.budget ? `Interested in: ${formData.budget}` : "",
        ]
          .filter((line) => line !== "")
          .join("\n")
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      showAlert("success", CONTACT_SUCCESS_MESSAGE);
    },
    [completion, formData, showAlert]
  );

  return {
    formData,
    update,
    completion,
    isLoading: false,
    alert,
    handleSubmit,
  };
};

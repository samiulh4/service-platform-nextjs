"use client";

import Swal from "sweetalert2";

export function SuccessAlert(title, text) {
  return Swal.fire({
    icon: "success",
    title: title || "Success!",
    text: text || "Operation completed successfully.",
    confirmButtonText: "OK",
    confirmButtonColor: "#4f46e5",
  });
}

import Swal, { SweetAlertIcon } from "sweetalert2";

const defaultOptions = {
  icon: "info",
  confirmButtonText: "OK",
};

export const showAlert = (options) => {
  const mergedOptions = { ...defaultOptions, ...options };
  Swal.fire(mergedOptions).then((result) => {
    if (result.isConfirmed && options.func) {
      options.func();
    }
  });
};

export const showSuccessAlert = (title, text, func) => {
  showAlert({
    title,
    text,
    type: "success",
    icon: "success",
    confirmButtonText: "OK",
    func,
  });
};

export const showErrorAlert = (title, text, func) => {
  showAlert({
    title,
    text,
    type: "error",
    icon: "error",
    confirmButtonText: "OK",
    func,
  });
};

export const showInfoAlert = (title, text, func) => {
  showAlert({
    title,
    text,
    type: "info",
    icon: "info",
    confirmButtonText: "OK",
    func,
  });
};

export const showWarningAlert = (title, text, func) => {
  showAlert({
    title,
    text,
    type: "warning",
    icon: "warning",
    confirmButtonText: "OK",
    func,
  });
};

export const showConfirmAlert = (title, text, confirmButtonText, func) => {
  showAlert({
    title,
    text,
    type: "warning",
    icon: "warning",
    confirmButtonText,
    func,
  });
};

export const showCustomAlert = (options) => {
  showAlert(options);
};

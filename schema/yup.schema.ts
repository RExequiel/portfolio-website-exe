import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    senderEmail: Yup.string().email("Ingrese un correo electrónico válido").required("Este campo es obligatorio"),
    message: Yup.string().required("Este campo es obligatorio"),
  });
  
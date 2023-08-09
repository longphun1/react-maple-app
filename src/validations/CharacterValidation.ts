import * as yup from "yup";

export const characterValSchema = yup.object().shape({
  characterName: yup
    .string()
    .min(4, "Must be at least 4 characters long")
    .max(12, "Must be 12 or less characters")
    .required("Character name required"),
  characterClass: yup.string().required("Character class required"),
  characterLevel: yup
    .number()
    .integer()
    .positive("Must be a positive number")
    .required("Character level required"),
});

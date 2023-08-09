import * as yup from "yup";

export const dailyValSchema = yup.object().shape({
  dailyName: yup.string().required("Daily name required"),
});

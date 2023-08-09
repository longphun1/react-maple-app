import { useState } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { useFormik } from "formik";
import "./addDailyForm.styles.scss";
import { dailyValSchema } from "../../validations/dailyValidation";

type AddDailyProps = {
  character_id: string;
};

const AddDailyForm = ({ character_id }: AddDailyProps) => {
  const [newDaily, setNewDaily] = useState("");

  const dailyCollectionRef = collection(
    db,
    `charactersDailies/${character_id}/dailies`
  );

  const createDaily = async () => {
    await addDoc(dailyCollectionRef, { dailyName: newDaily });
    window.location.reload();
  };

  const formik = useFormik({
    initialValues: {
      dailyName: "",
    },
    validationSchema: dailyValSchema,
    onSubmit: async (values) => {
      await addDoc(dailyCollectionRef, {
        dailyName: values.dailyName,
      });
      window.location.reload();
    },
  });

  return (
    <div className="addDailyContainer">
      <form onSubmit={formik.handleSubmit}>
        <input
          className="addDailyInput"
          placeholder="Add a daily"
          {...formik.getFieldProps("dailyName")}
        />

        <button className="addDailyBTN" type="submit">
          ADD
        </button>
        {formik.touched.dailyName && formik.errors.dailyName ? (
          <div className="error">
            <h5>{formik.errors.dailyName}</h5>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default AddDailyForm;

import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { characterValSchema } from "../../validations/CharacterValidation";
import "./addCharacter.styles.scss";

const AddCharacter = () => {
  const [newCharacterName, setNewCharacterName] = useState("");
  const [newCharacterClass, setNewCharacterClass] = useState("");
  const [newCharacterLevel, setNewCharacterLevel] = useState("");

  const uid = useSelector(selectCurrentUser).uid;

  const characterCollectionRef = collection(
    db,
    `userCharacters/${uid}/characters`
  );

  const navigate = useNavigate();

  const createCharacter = async () => {
    await addDoc(characterCollectionRef, {
      characterName: newCharacterName,
      characterClass: newCharacterClass,
      characterLevel: newCharacterLevel,
    });
    navigate("/missions");
  };

  const backToMissions = () => {
    navigate("/missions");
  };

  const formik = useFormik({
    initialValues: {
      characterName: "",
      characterClass: "",
      characterLevel: "",
    },
    validationSchema: characterValSchema,
    onSubmit: async (values) => {
      await addDoc(characterCollectionRef, {
        characterName: values.characterName,
        characterClass: values.characterClass,
        characterLevel: values.characterLevel,
      });
      navigate("/missions");
    },
  });

  return (
    <div className="addCharacterContainer">
      <div className="go-back-container">
        <span className="go-back-hex" onClick={backToMissions}>
          &#8617;
        </span>
      </div>
      <h2 className="addCharacterTitle">ADD A CHARACTER</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {formik.touched.characterName && formik.errors.characterName ? (
            <div className="error">{formik.errors.characterName}</div>
          ) : null}
          <input
            className="addCharacterInput"
            placeholder="Character Name"
            {...formik.getFieldProps("characterName")}
          />
        </div>
        <div>
          {formik.touched.characterClass && formik.errors.characterClass ? (
            <div className="error">{formik.errors.characterClass}</div>
          ) : null}
          <input
            className="addCharacterInput"
            placeholder="Class"
            {...formik.getFieldProps("characterClass")}
          />
        </div>
        <div>
          {formik.touched.characterLevel && formik.errors.characterLevel ? (
            <div className="error">{formik.errors.characterLevel}</div>
          ) : null}
          <input
            className="addCharacterInput"
            placeholder="Level"
            type="number"
            {...formik.getFieldProps("characterLevel")}
          />
        </div>
        <button className="addCharacterBTN" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCharacter;

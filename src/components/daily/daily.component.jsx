import { db } from "../../utils/firebase/firebase.utils";
import { deleteDoc, doc } from "firebase/firestore";

const Daily = ({daily, character_id}) => {
    const { dailyName, id } = daily;

    const deleteDaily = async (id) => {
        const dailyDoc = doc(db, `charactersDailies/${character_id}/dailies`, id)
        await deleteDoc(dailyDoc)
        window.location.reload(false)
    }

    return (
        <div>
            <h4>{dailyName}</h4>
            <button onClick={() => deleteDaily(id)}>Delete</button>
        </div>
    )
};

export default Daily;
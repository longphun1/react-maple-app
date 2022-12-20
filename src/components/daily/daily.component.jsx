import { db } from "../../utils/firebase/firebase.utils";
import { deleteDoc, doc } from "firebase/firestore";

const Daily = ({daily, c_id}) => {
    const { dailyName, id } = daily;

    const deleteDaily = async (id) => {
        const dailyDoc = doc(db, `charactersDailies/${c_id}/dailies`, id)
        await deleteDoc(dailyDoc)
        window.location.reload(false)
    }

    return (
        <div>
            <h2>{dailyName}</h2>
            <h5>{c_id}</h5>
            <button onClick={() => deleteDaily(id)}>Delete</button>
        </div>
    )
};

export default Daily;
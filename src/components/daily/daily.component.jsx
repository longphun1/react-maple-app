import { db } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { deleteDoc, doc } from "firebase/firestore";

const Daily = ({daily}, {cid}) => {
    const { dailyName, id } = daily;
    
    const currentUser = useSelector(selectCurrentUser)

    const deleteDaily = async (id) => {
        const dailyDoc = doc(db, `charactersDailies/${cid}/dailies`, id)
        await deleteDoc(dailyDoc)
        window.location.reload(false)
    }

    return (
        <div>
            <h2>{dailyName}</h2>
            <h3>{cid}</h3>
            <button onClick={() => deleteDaily(id)}>Delete</button>
        </div>
    )
};

export default Daily;
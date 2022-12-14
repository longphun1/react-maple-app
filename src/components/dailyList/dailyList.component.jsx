import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Daily from "../daily/daily.component";

const DailyList = () => {
    const [dailies, setDailies] = useState([])

    const currentUser = useSelector(selectCurrentUser)

    const dailiesCollectionRef = collection(db, `userDailies/${currentUser.uid}/dailies`)

    useEffect(() => {
        const getDailies = async () => {
            const data = await getDocs(dailiesCollectionRef);
            setDailies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getDailies();
    }, []);

    return (
        <div>
            {dailies.map((daily) => {
                return (
                    <Daily key={daily.id} daily={daily} />
                )
            })}
        </div>
    )
};

export default DailyList;
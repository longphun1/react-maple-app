import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs
} from "firebase/firestore";
import Daily from "../daily/daily.component";

const DailyList = ({id}) => {
    const [dailies, setDailies] = useState([])

    const dailiesCollectionRef = collection(db, `charactersDailies/${id}/dailies`)

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
                    <Daily key={daily.id} daily={daily} id={id}/>
                )
            })}
        </div>
    )
};

export default DailyList;
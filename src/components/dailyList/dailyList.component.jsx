import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "firebase/firestore";
import Daily from "../daily/daily.component";

const DailyList = ({c_id}) => {
    const [dailies, setDailies] = useState([])

    const dailiesCollectionRef = collection(db, `charactersDailies/${c_id}/dailies`)

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
                    <div>
                        <Daily key={daily.id} daily={daily} c_id={c_id}/>
            
                        
                    </div>
                )
            })}
        </div>
    )
};

export default DailyList;
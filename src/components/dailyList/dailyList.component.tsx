import { useState, useEffect } from "react";
import { Fragment } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import Daily from "../daily/daily.component";
import './dailyList.styles.scss'

type DailyListProps = {
    character_id: string
}

export type Daily = {
    id: string;
    dailyName: string;
}

const DailyList = ({ character_id }: DailyListProps) => {
    const [dailies, setDailies] = useState<Daily[]>([])

    const dailiesCollectionRef = collection(db, `charactersDailies/${character_id}/dailies`)

    useEffect(() => {
        const getDailies = async () => {
            const data = await getDocs(dailiesCollectionRef);
            setDailies(data.docs.map((doc) => ({ 
                ...doc.data(), 
                id: doc.id,
                dailyName: doc.data().dailyName 
            })))
        };

        getDailies();
    }, []);

    return (
        <Fragment>
            {!dailies.length ?
                <div className="noDailies-container">
                    No current dailies
                </div>
                :
                <div className="DL-container">
                    {dailies.map((daily) => {
                        return (
                            <Daily key={daily.id} daily={daily} character_id={character_id} />
                        )
                    })}
                </div>
            }
        </Fragment>
    )
};

export default DailyList;
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBossesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setBosses } from "../../store/boss/boss.action";
import CharacterList from "../../components/characterList/characterList.component";
import WeeklyList from "../../components/weeklyList/weeklyList.component";

import './missions.styles.scss';

const Missions = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getBossesMap = async () => {
            const bosses = await getBossesAndDocuments();
            dispatch(setBosses(bosses));
        };

        getBossesMap();
    }, [dispatch]);

    return (
        <div className="missions-container">
            <div className="mission-banner-container">
                <div className="mission-banner-img" />
            </div>
            <div className="missions-sub-container">
                <h1 className="mission-titles">Daily Missions <a className="view-characters-link" href="characters">View All Characters</a></h1>
                <CharacterList />
                <h1 className="mission-titles">Weekly Missions</h1>
                <WeeklyList />
            </div>
        </div>
    )
};

export default Missions;
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectBossesMap } from "../../store/boss/boss.selector";
import BossCard from "../../components/bossCard/bossCard.component";
import './addWeekly.styles.scss'

const AddWeekly = () => {
    const navigate = useNavigate()

    const backToMissions = () => {
        navigate('/missions')
    }
    const bossesMap = useSelector(selectBossesMap).boss

    return (
        <div className="addWeeklyContainer">
            <div className="go-back-container">
                <span className="go-back-hex" onClick={backToMissions}>&#8617;</span>
            </div>

            {bossesMap.map((boss) => {
                return (
                    <BossCard key={boss.id} boss={boss} />
                )
            })}
        </div>
    )
}

export default AddWeekly;

import { WeeklyObject } from '../shared-types';
import './weekly.styles.scss'

type WeeklyProps = {
    weekly: WeeklyObject
}

const Weekly = ({ weekly }: WeeklyProps) => {
    const { weeklyName, weeklyPrice } = weekly

    const price = weeklyPrice.toString().slice(0, -6)

    return (
        <div className="weeklyNameContainer"> 
            <h3>{weeklyName}</h3>
            <h4>({price}m)</h4>
        </div>
    )
};

export default Weekly;
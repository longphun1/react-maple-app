import './weekly.styles.scss'

const Weekly = ({weekly}) => {
    const { weeklyName, weeklyPrice } = weekly

    return (
        <div className="weeklyNameContainer"> 
            <h3>{weeklyName}</h3>
            <h4>({weeklyPrice}m)</h4>
        </div>
    )
};

export default Weekly;
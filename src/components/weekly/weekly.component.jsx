import './weekly.styles.css'

const Weekly = ({weekly}) => {
    const { weeklyName, id } = weekly

    return (
        <div className="weeklyNameContainer">{weeklyName}</div>
    )
};

export default Weekly;
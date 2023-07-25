import { useNavigate } from 'react-router-dom';
import './dashboard.styles.scss'

const Dashboard = () => {
    const navigate = useNavigate();

    const navigateMissions = () => navigate('/missions')
    const navigateShop = () => navigate('/shop')

    return (
        <div className='dashboard-container'>
            <div className='directory-container1' onClick={navigateMissions}>
                <div className='directory-image1' />
                <div className='directory-box'>
                    <h2>Missions</h2>
                </div>
            </div>
            <div className='directory-container2' onClick={navigateShop}>
                <div className='directory-image2' />
                <div className='directory-box'>
                    <h2>Shop Now</h2>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;
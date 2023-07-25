import { useState, useEffect, FC, Fragment } from 'react';
import { addDoc, collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { BossCardObject } from '../shared-types';
import './bossCard.styles.scss';

type BossProps = {
    boss: BossCardObject
}

type Boss = {
    id: string;
    weeklyName?: string
}

const BossCard: FC<BossProps> = ({ boss }) => {
    const { name, price, imageUrl } = boss
    const [weeklies, setWeeklies] = useState<Boss[]>([])

    let num = price.toLocaleString()

    const uid = useSelector(selectCurrentUser).uid

    const weeklyCollectionRef = collection(db, `userWeeklies/${uid}/weeklies`)

    const bossExist = weeklies.find(obj => obj.weeklyName === name)

    const bossExistId = bossExist ? bossExist.id : null

    useEffect(() => {
        const getWeeklies = async () => {
            const data = await getDocs(weeklyCollectionRef);
            setWeeklies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getWeeklies();
    }, []);

    const createWeekly = async () => {
        await addDoc(weeklyCollectionRef, { weeklyName: name, weeklyPrice: Number(price) });
        window.location.reload()
    };

    const deleteWeekly = async (id: string) => {
        const weeklyDoc = doc(db, `userWeeklies/${uid}/weeklies`, id)
        await deleteDoc(weeklyDoc)
        window.location.reload()
    }

    return (
        <Fragment>
            {bossExist ? (
                <div className='bossCard-container' id='bossExist'>
                    <div className='bossCard-subcontainer'>
                        <div className='boss-image-container'>
                            <img className='boss-image' src={imageUrl} alt={`${name}`} />
                        </div>
                        <div className='boss-details-container'>
                            <h4 className='boss-name'>{name}</h4>
                            <div className='boss-price-icon-container'>
                                <img className='meso-icon' src='https://i.imgur.com/XOo7kNs.png' alt={`${num}`} />
                                <span className='boss-price'>{num}</span>
                            </div>
                        </div>
                    </div>

                    <button className='deleteWeeklyBtn' onClick={() => bossExistId && deleteWeekly(bossExistId)}>REMOVE</button>
                </div>
            ) :
                <div className='bossCard-container'>
                    <div className='bossCard-subcontainer'>
                        <div className='boss-image-container'>
                            <img className='boss-image' src={imageUrl} alt={`${name}`} />
                        </div>
                        <div className='boss-details-container'>
                            <h4 className='boss-name'>{name}</h4>
                            <div className='boss-price-icon-container'>
                                <img className='meso-icon' src='https://i.imgur.com/XOo7kNs.png' alt={`${num}`} />
                                <span className='boss-price'>{num}</span>
                            </div>
                        </div>
                    </div>

                    <button className="addWeeklyBTN" onClick={createWeekly}>ADD</button>
                </div>

            }
        </Fragment>
    )
};

export default BossCard;
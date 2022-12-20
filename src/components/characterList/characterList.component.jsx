import { useState, useEffect } from "react";
import { db } from "../../utils/firebase/firebase.utils";
import {
    collection,
    getDocs
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Character from "../character/character.component";

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    const currentUser = useSelector(selectCurrentUser)

    const charactersCollectionRef = collection(db, `userCharacters/${currentUser.uid}/characters`)

    useEffect(() => {
        const getDailies = async () => {
            const data = await getDocs(charactersCollectionRef);
            setCharacters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };

        getDailies();
    }, []);

    return (
        <div>
            {characters.map((character) => {
                return(
                    <Character key={character.id} character={character} />
                )
            })}
        </div>
    )
};

export default CharacterList;
import axios from 'axios';
import { useEffect, useState } from 'react';

function Categories() {
    const [catObjects, displayApiResults] = useState ([null])
    const [selectedCat, setSelectedCat] = useState([])

    useEffect(() => {
        axios
        .get(`https://opentdb.com/api_category.php`)
        .then((res) => {
            console.log(res.data.trivia_categories)
            displayApiResults(res.data.trivia_categories)
        })
    }, [])
    console.log(selectedCat)

    // const handleSetSelectedCat = (catId) => {
    //     const catObject = catObjects.find((catObject) => catObject.id === catId)
    //     setSelectedCat(catObject)
    // }

    // if (selectedCat) {
    //     const catObject = selectedCat
    //     return (
    //         <>
    //             <CategoryOptions />
    //         </>
    //     )
    //     }

    return (
        <div>
            <p>Pick a Category!</p>
            {catObjects.map((catObject, index) => {
                return (
                    <div className="category-button" key={index}>
                        <button onClick={() => setSelectedCat(catObject.id)}>{catObject.name}</button>
                    </div>
                )
            })}
        </div>
    )
    }

export default Categories;
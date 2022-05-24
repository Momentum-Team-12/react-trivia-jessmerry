import axios from 'axios';
import { useEffect, useState } from 'react';

export function Categories() {
    const [catObjects, displayApiResults] = useState ([])
    const [selectedCat, setSelectedCat] = useState(null)

    useEffect(() => {
        axios
        .get(`https://opentdb.com/api_category.php`)
        .then((res) => {
            console.log(res.data.trivia_categories)
            displayApiResults(res.data.trivia_categories)
        })
    }, [])

    return (
        <div>
            <p>The results are:</p>
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
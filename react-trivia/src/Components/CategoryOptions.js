import {useEffect, useState} from 'react';
import Categories from './Categories';
import axios from 'axios';

function CategoryOptions() {
    const [categories,setCategories]= useState([])
    const [selectedCat, setSelectedCat] = useState([null])
    const catObject = selectedCat

    useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then((res)=> {
        console.log(res.data.questions)
        setCategories(res.data.questions)
    }) 
}, [])

const handleSetSelectedCat = (catId) => {
    const catObject = catObjects.find((catObject) => catObject.id === catId)
    setSelectedCat(catObject)
}

if (selectedCat) {
    return (
        <>

        </>
    )
    }

    return (
        <div className="category-list">
        {categories.map((cat) => (
        <button><Categories {...cat}
            key={cat.id}/></button>
        ))}
        </div>
    )
}

export default CategoryOptions
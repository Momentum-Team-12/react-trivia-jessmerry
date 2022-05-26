import {useEffect, useState} from 'react';
import Categories from './Categories';
import axios from 'axios';

function Questions() {
    const [categories,setCategories]= useState([])
    const [selectedCat, setSelectedCat] = useState([null])
    const catObject = selectedCat

    

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

export default Questions
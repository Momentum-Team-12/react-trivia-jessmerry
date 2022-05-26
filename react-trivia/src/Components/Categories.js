import axios from "axios";
import { useEffect, useState } from "react";

function Categories() {
    const [catObjects, setCatObjects] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [categorySelected, setCategorySelected] = useState(false);

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`).then((res) => {
      console.log(res.data);
      setCatObjects(res.data.trivia_categories);
    });
  }, []);

  const handleSetSelectedCat = (catObject) => {
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${catObject.id}`)
      .then((res) => {
        console.log(catObject.id);
        console.log(res.data);
        setQuestions(res.results);
        setCategorySelected(true);
      });
  };

  return (
    <>
      {!categorySelected ? (
        <>
          <div>
            <p>Pick a Category!</p>
            {catObjects.map((catObject, index) => {
              return (
                <div className="category-button" key={index}>
                  <button onClick={() => handleSetSelectedCat(catObject)}>
                    {catObject.name}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>category selected</>
      )}
    </>
  );
}

export default Categories;

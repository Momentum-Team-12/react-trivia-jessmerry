import axios from "axios";
import { useEffect, useState } from "react";

function Categories() {
  const [catObjects, setCatObjects] = useState([]);
  // const [questions, setQuestions] = useState([]);
  const [categorySelected, setCategorySelected] = useState(false);

  useEffect(() => {
    axios.get(`https://opentdb.com/api_category.php`).then((res) => {
      console.log(res.data);
      setCatObjects(res.data.trivia_categories);
    });
  }, []);

  var questions = []
  const handleSetSelectedCat = (catObject) => {
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${catObject.id}`)
      .then((res) => {
        console.log(catObject.id);
        console.log(res.data.results);
        var questions = res.data.results
        // setQuestions(res.results);
        console.log(questions);
        console.log(Array.isArray(questions));
        setCategorySelected(true);
      }, []);
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
                  <button className="cat-button" onClick={() => handleSetSelectedCat(catObject)}>
                    {catObject.name}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="questions-list">
              <i className="fa-regular fa-thumbs-up"></i>
              Here are your questions!
              <i className="fa-regular fa-thumbs-up"></i>
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default Categories;

import React, { useState } from "react";
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../services/TutorialService";
import Tutorial from "./Tutorial";

const TutorialsList = () => {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [tutorials, loading, error] = useList(TutorialDataService.getAll());

  const refreshList = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    const { title, description, published } = tutorial.val();

    setCurrentTutorial({
      key: tutorial.key,
      title,
      description,
      published,
    });

    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    TutorialDataService.removeAll()
      .then(() => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>TUTORIAL TODO List</h4>

        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        <ul className="list-group-item list-group-item-info">
          {!loading &&
            tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.val().title}
                
              </li>
            ))}
        </ul>

        <button
          className="btn btn-primary btn-lg active"
          onClick={removeAllTutorials}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentTutorial ? (
          <Tutorial tutorial={currentTutorial} refreshList={refreshList} />
        ) : (
          <div>
            <br />
            <p>Click on a List</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialsList;

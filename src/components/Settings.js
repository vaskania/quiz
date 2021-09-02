import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import FetchButton from "./FetchButton";
import Card from "../UI/Card";
import classes from "./Settings.module.css";

function Settings(props) {
  const dispatch = useDispatch();
  const [options, setOptions] = useState(null);

  const loading = useSelector((state) => state.options.loading);

  const questionCategory = useSelector(
    (state) => state.options.question_category
  );
  const questionDifficulty = useSelector(
    (state) => state.options.question_difficulty
  );
  const questionType = useSelector((state) => state.options.question_type);
  const questionAmount = useSelector(
    (state) => state.options.amount_of_questions
  );

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;

    const handleLoadingChange = (value) => {
      dispatch({
        type: "CHANGE_LOADING",
        loading: value,
      });
    };

    handleLoadingChange(true);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        handleLoadingChange(false);
        setOptions(response.trivia_categories);
      });
  }, [setOptions, dispatch]);

  const handleCategoryChange = (event) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      value: event.target.value,
    });
  };

  const handleDifficultyChange = (event) => {
    dispatch({
      type: "CHANGE_DIFFICULTY",
      value: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    dispatch({
      type: "CHANGE_TYPE",
      value: event.target.value,
    });
  };

  const handleAmountChange = (event) => {
    dispatch({
      type: "CHANGE_AMOUNT",
      value: event.target.value,
    });
  };

  if (!loading) {
    return (
      <Card>
        <div>
          <h4>Select Category:</h4>
          <select
            className={classes.items}
            value={questionCategory}
            onChange={handleCategoryChange}
          >
            <option>All</option>
            {options &&
              options.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <h4>Select Difficulty:</h4>
          <select
            className={classes.items}
            value={questionDifficulty}
            onChange={handleDifficultyChange}
          >
            <option value="" key="difficulty-0">
              All
            </option>
            <option value="easy" key="difficulty-1">
              Easy
            </option>
            <option value="medium" key="difficulty-2">
              Medium
            </option>
            <option value="hard" key="difficulty-3">
              Hard
            </option>
          </select>
        </div>

        <div>
          <h4>Select Question Type:</h4>
          <select
            className={classes.items}
            value={questionType}
            onChange={handleTypeChange}
          >
            <option value="" key="type-0">
              All
            </option>
            <option value="multiple" key="type-1">
              Multiple Choice
            </option>
            <option value="boolean" key="type-2">
              True/False
            </option>
          </select>
        </div>

        <div>
          <h4>Amount of Questions:</h4>
          <input
            className={classes.item}
            value={questionAmount}
            onChange={handleAmountChange}
          />
        </div>

        <FetchButton text="Get Started" />
      </Card>
    );
  }

  return <div>asdsa</div>;
}
export default Settings;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import Button from "../UI/Button";

function FetchButton(props) {
  const dispatch = useDispatch();

  const setLoading = (value) => {
    dispatch({
      type: "CHANGE_LOADING",
      loading: value,
    });
  };
  const setQuestions = (value) => {
    dispatch({
      type: "SET_QUESTIONS",
      questions: value,
    });
  };

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
  //const questionIndex = useSelector((state) => state.index);

  const handleQuery = async (props) => {
    dispatch({
      type: "SET_QUESTIONS",
      questions: [],
    });

    dispatch({
      type: "SET_SCORE",
      score: 0,
    });

    dispatch({
      type: "SET_INDEX",
      index: 0,
    });

    let apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}`;

    if (questionCategory.length) {
      apiUrl = apiUrl.concat(`&category=${questionCategory}`);
    }

    if (questionDifficulty.length) {
      apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`);
    }

    if (questionType.length) {
      apiUrl = apiUrl.concat(`&type=${questionType}`);
    }

    setLoading(false);
    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setQuestions(response.results);
        setLoading(true);
      });
  };

  return (
    <Card>
      <Button onClick={handleQuery}>{props.text}</Button>
    </Card>
  );
}
export default FetchButton;

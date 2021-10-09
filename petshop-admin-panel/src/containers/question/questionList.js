import React, {useEffect, useState} from "react";
import QuestionTable from "./QuestionTable"
export default function QustionList() {
 
  const columns = [
    "id", "Soran Kişi", "Soru Açıklaması", "Detay"
  ]
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([{id: 1, SoramKisi:"mucahit",aciklama:"açıklama"}]);
 
  

  return (
  
    <>
      <QuestionTable
      rows={questions}
      columns= {columns}
      hiddenIndexes={[3, 4, 5]}
      isOperation={true}
      />
    </>
  );
}
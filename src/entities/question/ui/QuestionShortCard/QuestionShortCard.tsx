import { Path } from 'app/routes/rootRouter.tsx';
import type { Question } from 'entities/question';
import parse from 'html-react-parser';
import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { Button } from 'shared/comonents';

import s from './QuestionShortCard.module.css';

type PublicQuestionProps = {
  question: Question;
};

export const QuestionShortCard = ({ question }: PublicQuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <li className={`${s.list} `}>
      <div className={s.questionHeader} onClick={toggleItem}>
        <h2 className={s.questionTitle}>{question.title}</h2>
        <span className={`${s.arrow} ${isOpen ? s.open : ''}`} />
      </div>
      <div className={`${s.content} ${isOpen && s.show}`}>
        {parse(question.shortAnswer)}
        <Button
          className={s.viewQuestionButton}
          onClick={() => navigate(generatePath(Path.PublicQuestionPage, { id: question.id }))}
        >
          Подробнее →
        </Button>
      </div>
    </li>
  );
};

import { useState } from 'react';
import type { Question } from '../../../../pages/PublicQuestions/model/types.ts';
import s from './PublicQuestion.module.css';

type PublicQuestionProps = {
  question: Question;
};

export const PublicQuestion = ({ question }: PublicQuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li key={question.id} className={`${s.list} `}>
      <div className={s.questionHeader} onClick={toggleItem}>
        <h2 className={s.questionTitle}>{question.title}</h2>
        <span className={`${s.arrow} ${isOpen ? s.open : ''}`} />
      </div>
      <div className={`${s.content} ${isOpen && s.show}`}>
        {<p dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />}
      </div>
    </li>
  );
};

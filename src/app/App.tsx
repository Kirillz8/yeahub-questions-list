import { useState } from 'react';
import { useGetPublicQuestionsQuery } from '../entities/publicQuestions/publicQuestionsApi.ts';
import type { Question } from '../shared/types.ts';

function App() {
  const [count, setCount] = useState(0);
  const { data, error, isLoading } = useGetPublicQuestionsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при получении данных</div>;
  console.log(data);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {data?.data.map((question: Question) => (
          <div key={question.id}>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            {/* Здесь можно отобразить остальные поля */}
          </div>
        ))}
        <button className={'bg-red-800 border-b-blue-800 w-20 rounded'} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

import { Link } from 'react-router';
import { Question } from './components/question';
import { Button } from './components/ui/button';
import Header from './components/ui/header';
import { questionsMoodle } from './data/quiz-moodle';

const App = () => {
  return (
    <div className='border-border border px-5 mx-auto max-w-[1500px]'>
      <Header />
      <div className='container flex flex-col items-start gap-3 py-8 md:py-12 lg:py-16'>
        <h1 className='text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] '>
          Test your knowledge of COA before the final
        </h1>
        <Button className='my-6'>
          <Link to={'/quiz'}> Go to quiz </Link>
        </Button>
        <hr className='w-full mb-4' />
        <div className='p-4 max-w-2xl  bg-white rounded-2xl border'>
          <h1 className='text-2xl font-bold mb-6'>Correct Answers</h1>
          {questionsMoodle.map((question: Question, index: number) => {
            const correctAnswers = question.CorrectAnswer.split(',').map(
              (ans) => ans.trim(),
            );

            return (
              <div key={index} className='mb-6'>
                <h2 className='text-lg font-semibold mb-2'>
                  {index + 1}. {question.QuestionText}
                </h2>
                <div className='space-y-2'>
                  {(['1', '2', '3', '4'] as const)
                    .filter((num) => question[`Option${num}` as keyof Question])
                    .map((num) => (
                      <div
                        key={num}
                        className={`p-2 rounded-lg border ${
                          correctAnswers.includes(num)
                            ? 'bg-green-200 border-green-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {question[`Option${num}` as keyof Question]}
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

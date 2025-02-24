import QuizQuestion, { Question } from './components/question';
import Header from './components/ui/header';
import { questionsMoodle } from './data/quiz-moodle';

const QuizRoute = () => {
  return (
    <div className='border-border border px-5 mx-auto max-w-[1500px]'>
      <Header />
      <div className='container flex flex-col items-start gap-3 py-8 md:py-12 lg:py-16'>
        <div className='space-y-6 sm:p-6 '>
          {questionsMoodle.map((q: Question, index: number) => {
            const question: Question = JSON.parse(
              JSON.stringify(q).replace(/\s(?=\w+":)/g, ''),
            );
            return <QuizQuestion key={index} question={question} />;
          })}
        </div>
        <hr className='w-full' />
      </div>
    </div>
  );
};

export default QuizRoute;

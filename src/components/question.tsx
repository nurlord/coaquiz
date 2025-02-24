import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';

// Define TypeScript types
export interface Question {
  QuestionText: string;
  QuestionType: 'Multiple Choice' | 'Checkbox';
  Option1: string;
  Option2: string;
  Option3: string;
  Option4: string;
  CorrectAnswer: string; // Comma-separated list for checkboxes, single number for multiple choice
}

interface QuizQuestionProps {
  question: Question;
}

interface FormValues {
  answer: string | string[];
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question }) => {
  const { register, handleSubmit, watch } = useForm<FormValues>();
  const [submittedAnswer, setSubmittedAnswer] = useState<string[] | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);

  const onSubmit = (data: FormValues) => {
    const userAnswers = Array.isArray(data.answer)
      ? data.answer
      : [data.answer];
    const correct = question.CorrectAnswer.split(',').map((ans) => ans.trim());

    setSubmittedAnswer(userAnswers);
    setCorrectAnswers(correct);
  };

  // Auto-submit for multiple choice questions
  const watchAnswer = watch('answer');
  React.useEffect(() => {
    if (question.QuestionType === 'Multiple Choice' && watchAnswer) {
      handleSubmit(onSubmit)();
    }
  }, [watchAnswer]);

  const isCorrect = (optionNumber: string) =>
    correctAnswers.includes(optionNumber);
  const isSelected = (optionNumber: string) =>
    submittedAnswer?.includes(optionNumber);

  return (
    <div className='p-4 max-w-2xl bg-white rounded-2xl shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>{question.QuestionText}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {(['1', '2', '3', '4'] as const)
          .filter((num) => question[`Option${num}` as keyof Question]) // Filter out undefined or empty options
          .map((num) => (
            <label
              key={num}
              className={`block p-2 rounded-lg cursor-pointer border mb-2 transition-colors
          ${
            submittedAnswer && isSelected(num)
              ? isCorrect(num)
                ? 'bg-green-200 border-green-500'
                : 'bg-red-200 border-red-500'
              : 'hover:bg-gray-100'
          }`}
            >
              <input
                type={
                  question.QuestionType === 'Checkbox' ? 'checkbox' : 'radio'
                }
                value={num}
                {...register('answer')}
                disabled={!!submittedAnswer}
                className='mr-2'
              />
              {question[`Option${num}` as keyof Question]}
            </label>
          ))}

        {question.QuestionType === 'Checkbox' && !submittedAnswer && (
          <Button type='submit'>Submit</Button>
        )}
      </form>
      {submittedAnswer &&
        !submittedAnswer.every((ans) => correctAnswers.includes(ans)) && (
          <div className='mt-4 text-red-600'>
            Incorrect! Correct Answer:
            <ul className='list-disc list-inside'>
              {correctAnswers.map((ans) => (
                <li key={ans}>{question[`Option${ans}` as keyof Question]}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default QuizQuestion;

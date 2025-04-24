import React from 'react';
import { Progress } from "@/app/components/ui/Progress"; // Assuming Progress is here

interface PersonalCompletionProps {
  progressValue: number; // Keep progress value required for the bar
  totalExercises?: number; // Make optional
  solvedExercises?: number; // Make optional
  completionPercentage?: number; // Make optional
  availableExercises?: number; // Make optional
}

const PersonalCompletion: React.FC<PersonalCompletionProps> = ({
  progressValue,
  totalExercises,
  solvedExercises,
  completionPercentage,
  availableExercises,
}) => {
  

  // Check if any detailed stats are provided
  const showStats = totalExercises !== undefined ||
                    solvedExercises !== undefined ||
                    completionPercentage !== undefined ||
                    availableExercises !== undefined;

  return (
    <div className='space-y-4 text-center'>
      <p className='font-[700] leading-normal text-2xl text-zinc-800'>Personal Completion</p>
      <Progress
        value={progressValue}
        className='h-10'
       
      />
      {showStats && (
        <div className='flex flex-wrap justify-center items-center gap-x-3 gap-y-1'> {/* Added flex-wrap and gap */}
          {totalExercises !== undefined && (
            <p className='border-r pr-3 text-xl font-[400] leading-6 text-zinc-800 last:border-r-0'>{totalExercises} Exercises</p>
          )}
          {solvedExercises !== undefined && (
            <p className='border-r pr-3 text-xl font-[400] leading-6 text-zinc-800 last:border-r-0'>{solvedExercises} Solved</p>
          )}
          {completionPercentage !== undefined && (
            <p className='border-r pr-3 text-xl font-[400] leading-6 text-zinc-800 last:border-r-0'>{completionPercentage}% Completion</p>
          )}
          {availableExercises !== undefined && (
            <p className='pl-3 text-xl font-[400] leading-6 text-zinc-800'>{availableExercises} Available</p> // Removed border-r here
          )}
        </div>
      )}
    </div>
  );
};

export default PersonalCompletion;
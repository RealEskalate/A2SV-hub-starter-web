import React from 'react'
import PersonalCompletion from '@/app/components/sections/Progress/PersonalCompletion';


function ProgressPage() {

    const progressData = {
        progressValue: 75, 
        totalExercises: 222,
        solvedExercises: 166,
        completionPercentage: 75,
        availableExercises: 56,
      };
  return (
    <div className='p-10  text-center'>
         <PersonalCompletion
        progressValue={progressData.progressValue}
        totalExercises={progressData.totalExercises}
        solvedExercises={progressData.solvedExercises}
        completionPercentage={progressData.completionPercentage}
        availableExercises={progressData.availableExercises}
      />

    </div>
  )
}

export default ProgressPage
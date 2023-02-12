import { useState } from 'react'
import { MainSection } from './components/Layout/MainSection'
import { Sidebar } from './components/Layout/Sidebar'
import { StepFormLayout } from './components/Layout/StepForm'
import { Steps } from './components/Steps/Steps'
import { StepFormContext, useStepForm } from './utils'


function App() {
  const stepForm = useStepForm(4);
  const stepFormProps = { ...stepForm.getCurrentStepInfo() };
  return (
    <StepFormContext.Provider value={stepForm}>
      <div className='bg-magnolia h-screen w-screen'>
        <div className='flex flex-col sm:flex-row w-full sm:max-w-screen-lg h-screen mx-auto sm:pt-32 '>
          <Sidebar>
            <Steps activeStep={stepForm.step} stepData={stepForm.getAllStepInfo()} />
          </Sidebar>
          <MainSection>
            <StepFormLayout {...stepFormProps}>
              <h1>hello</h1>
            </StepFormLayout>
          </MainSection>
        </div>
      </div>
    </StepFormContext.Provider>
  )
}

export default App

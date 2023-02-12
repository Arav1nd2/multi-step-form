import { useState } from 'react'
import { MainSection } from './components/Layout/MainSection'
import { Sidebar } from './components/Layout/Sidebar'
import { StepForm } from './components/Layout/StepForm'
import { Steps } from './components/Steps/Steps'

const STEP_INFO = [
  {
    id: 1,
    title: "Your info",
    heading: "Personal info",
    subheading: "Please provide your name, email address and phone number."
  },
  {
    id: 2,
    title: "Select Plan",
    heading: "Personal info",
    subheading: "Please provide your name, email address and phone number."
  },
  {
    id: 3,
    title: "Add-ons",
    heading: "Personal info",
    subheading: "Please provide your name, email address and phone number."
  },
  {
    id: 4,
    title: "Summary",
    heading: "Personal info",
    subheading: "Please provide your name, email address and phone number."
  }
]

function App() {
  const [activeStep, setActiveStep] = useState(2);
  const stepFormProps = { ...STEP_INFO[activeStep], isLast: activeStep === 4, isFirst: activeStep == 1 };
  return (
    <div className='bg-magnolia h-screen w-screen'>
      <div className='flex flex-col sm:flex-row w-full sm:max-w-screen-lg h-screen mx-auto sm:pt-32 '>
        <Sidebar>
          <Steps activeStep={activeStep} stepData={STEP_INFO} />
        </Sidebar>
        <MainSection>
          <StepForm {...stepFormProps}>
            <h1>hello</h1>
          </StepForm>
        </MainSection>
      </div>
    </div>
  )
}

export default App

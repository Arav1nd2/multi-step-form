import { AddonsForm } from './components/Forms/AddonsForm'
import { FormSummary } from './components/Forms/FormSummary'
import { PersonalInfoForm } from './components/Forms/PersonalInfoForm'
import { SelectPlanForm } from './components/Forms/SelectPlanForm'
import { ThankYouPage } from './components/Forms/ThankYouPage'
import { MainSection } from './components/Layout/MainSection'
import { Sidebar } from './components/Layout/Sidebar'
import { StepFormLayout } from './components/Layout/StepForm'
import { Steps } from './components/Steps/Steps'
import { StepFormContext, useStepForm } from './utils'


function App() {
  const stepForm = useStepForm(5);
  const stepFormProps = { ...stepForm.getCurrentStepInfo() };
  return (
    <StepFormContext.Provider value={stepForm}>
      <div className='bg-magnolia h-screen w-screen'>
        <div className='flex flex-col sm:flex-row w-full sm:max-w-screen-lg h-screen mx-auto sm:pt-32'>
          <Sidebar>
            <Steps activeStep={stepForm.step} stepData={stepForm.getAllStepInfo()} />
          </Sidebar>
          <MainSection>
            <StepFormLayout {...stepFormProps}>
              <PersonalInfoForm />
              <SelectPlanForm />
              <AddonsForm />
              <FormSummary />
              <ThankYouPage />
            </StepFormLayout>
          </MainSection>
        </div>
      </div>
    </StepFormContext.Provider>
  )
}

export default App

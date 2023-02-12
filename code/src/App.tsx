import { useState } from 'react'
import { MainSection } from './components/Layout/MainSection'
import { Sidebar } from './components/Layout/Sidebar'
import { Steps } from './components/Steps/Steps'

const STEP_INFO = [
  {
    id: 1,
    title: "Your info"
  },
  {
    id: 2,
    title: "Select Plan"
  },
  {
    id: 3,
    title: "Add-ons"
  },
  {
    id: 4,
    title: "Summary"
  }
]

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className='bg-magnolia h-screen w-screen'>
      <div className='flex flex-col sm:flex-row w-full sm:max-w-screen-lg h-screen mx-auto sm:pt-32 '>
        <Sidebar>
          <Steps activeStep={activeStep} stepData={STEP_INFO} />
        </Sidebar>
        <MainSection>

        </MainSection>
      </div>
    </div>
  )
}

export default App

import { createContext, useState } from "react";
import { StepFormContextType } from "./types";

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
        heading: "Select your plan",
        subheading: "You have the option of monthly or yearly billing."
    },
    {
        id: 3,
        title: "Add-ons",
        heading: "Pick add-ons",
        subheading: "Add-ons help enhance your gaming experience."
    },
    {
        id: 4,
        title: "Summary",
        heading: "Finishing up",
        subheading: "Double check everything looks OK before confirming."
    }
]

function guid() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16);
};

export function generateID() {
    return guid() + "-" + guid();
}

export const StepFormContext = createContext<StepFormContextType>(null);

export function useStepForm(maxSteps: number = 4) {
    const [stepNumber, setStepNumber] = useState(1);

    function nextStep() {
        setStepNumber(currentStep => {
            if (currentStep >= maxSteps) return currentStep;
            return currentStep + 1;
        });
    }

    function prevStep() {
        setStepNumber(currentStep => {
            if (currentStep <= 1) return currentStep;
            return currentStep - 1;
        })
    }

    function isLast() {
        return stepNumber === maxSteps;
    }

    function isFirst() {
        return stepNumber === 1;
    }

    function getCurrentStepInfo() {
        return {
            ...STEP_INFO[stepNumber - 1],
            isFirst: isFirst(),
            isLast: isLast()
        }
    }

    function getAllStepInfo() {
        return STEP_INFO;
    }

    return {
        step: stepNumber,
        prevStep,
        nextStep,
        isFirst,
        isLast,
        getCurrentStepInfo,
        getAllStepInfo
    }

}
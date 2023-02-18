import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { PersonalInfo, PriceUnit, StepFormContextType } from "./types";

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
];
const PLANS = [
    {
        id: "1",
        icon: "/images/icon-arcade.svg",
        title: "Arcade",
        monthlyCost: "9",
        yearlyCost: "90",
    },
    {
        id: "2",
        icon: "/images/icon-advanced.svg",
        title: "Advanced",
        monthlyCost: "12",
        yearlyCost: "120",
    },
    {
        id: "3",
        icon: "/images/icon-pro.svg",
        title: "Pro",
        monthlyCost: "15",
        yearlyCost: "150",
    },
];

const AddOns = [
    {
        id: "1",
        title: "Online service",
        subtitle: "Access to multiplayer games",
        monthlyCost: "1",
        yearlyCost: "10",
    },
    {
        id: "2",
        title: "Larger Storage",
        subtitle: "Extra 1TB of cloud save",
        monthlyCost: "2",
        yearlyCost: "20",
    },
    {
        id: "3",
        title: "Customizable profile",
        subtitle: "Custom theme on your profile",
        monthlyCost: "2",
        yearlyCost: "20",
    },
];

function guid() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16);
};

export function generateID() {
    return guid() + "-" + guid();
}

export const StepFormContext = createContext<StepFormContextType>(null);

export function useStepForm(maxSteps: number = 4) {
    const [stepNumber, setStepNumber] = useState(1);
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ email: "", phone: "", name: "" });
    const [activePlan, setActivePlan] = useState("1");
    const [pricingType, setPricingType] = useState<PriceUnit>(PriceUnit.MONTHLY);
    const [activeAddons, setActiveAddons] = useState<String[]>([]);
    ;
    const { register, handleSubmit: handlePersonalInfoSubmit, formState } = useForm<PersonalInfo>();


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

    function goToStep(num: number) {
        if (num <= 0 || num > maxSteps) return;
        setStepNumber(num);
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

    function getSubmitHandler() {
        if (stepNumber === 1) {
            const validHandler = (data: PersonalInfo) => {
                setPersonalInfo(data);
                nextStep();
            }
            const invalidHandler = (data: any) => {
                console.log("Invalid Personal Info: ", data);
            }
            return handlePersonalInfoSubmit(validHandler, invalidHandler);
        } else {
            return nextStep;
        }
    }

    function getAllPlans() {
        return PLANS;
    }

    function isPlanActive(id: string) {
        return activePlan === id;
    }

    function setPlanAsActive(id: string) {
        return setActivePlan(id);
    }

    function togglePricingType() {
        if (pricingType === PriceUnit.MONTHLY) {
            setPricingType(PriceUnit.YEARLY);
        } else {
            setPricingType(PriceUnit.MONTHLY);
        }
    }

    function getAllAddons() {
        return AddOns;
    }

    function isActiveAddon(id: string) {
        return activeAddons.includes(id);
    }

    function addOrRemoveAddon(id: string, remove: boolean) {
        if (remove) {
            setActiveAddons(oldAddons => {
                return oldAddons.filter((addOnId) => id != addOnId);
            });
        } else {
            setActiveAddons(oldAddons => {
                return [...oldAddons, id];
            })
        }
    }

    function getFormSummary() {
        const chosenPlan = PLANS.find(plan => plan.id === activePlan);
        const chosenAddons = AddOns.filter(addOn => activeAddons.includes(addOn.id))
            .map(addOn => ({ name: addOn.title, price: pricingType === PriceUnit.MONTHLY ? addOn.monthlyCost : addOn.yearlyCost }))
        const state = {
            plan: chosenPlan?.title,
            unit: pricingType,
            planPrice: pricingType === PriceUnit.MONTHLY ? chosenPlan?.monthlyCost : chosenPlan?.yearlyCost,
            addOns: chosenAddons,
            total: ""
        }
        const total = Number(state.planPrice) + state.addOns.reduce((prev, addOn) => prev + Number(addOn.price), 0);
        state.total = "" + total;
        return state;
    }

    return {
        step: stepNumber,
        prevStep,
        nextStep,
        isFirst,
        isLast,
        goToStep,
        getCurrentStepInfo,
        getAllStepInfo,
        personalInfo: {
            formRegister: register,
            personalInfoErrors: formState.errors,
        },
        planInfo: {
            getAllPlans,
            isPlanActive,
            setPlanAsActive,
            pricingType,
            togglePricingType
        },
        addOnInfo: {
            getAllAddons,
            isActiveAddon,
            addOrRemoveAddon
        },
        getFormSummary,
        getSubmitHandler
    }
}

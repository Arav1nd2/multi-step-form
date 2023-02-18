import { FieldErrors, UseFormRegister } from "react-hook-form";


export enum PriceUnit {
    YEARLY,
    MONTHLY
}

export interface CurrentStepInfo {
    id: number,
    title: string,
    heading: string,
    subheading: string,
    isFirst?: boolean,
    isLast?: boolean
}

export type StepFormContextType = {
    step: number,
    nextStep: () => void,
    prevStep: () => void,
    goToStep: (num: number) => void,
    isLast: () => boolean,
    isFirst: () => boolean,
    getCurrentStepInfo: () => CurrentStepInfo,
    getAllStepInfo: () => CurrentStepInfo[],
    getSubmitHandler: () => any;
    personalInfo: {
        formRegister: UseFormRegister<PersonalInfo>,
        personalInfoErrors: FieldErrors<PersonalInfo>
    },
    planInfo: {
        isPlanActive: (id: string) => boolean,
        getAllPlans: () => PlanInfo,
        setPlanAsActive: (id: string) => void,
        pricingType: PriceUnit
        togglePricingType: () => void
    },
    addOnInfo: {
        getAllAddons: () => AddonInfo,
        isActiveAddon: (id: string) => boolean,
        addOrRemoveAddon: (id: string, remove: boolean) => void
    },
    getFormSummary: () => FormSummaryInfo
} | null;

export type PersonalInfo = {
    name: string,
    email: string,
    phone: string
}

export type PlanInfo = {
    id: string;
    icon: string;
    title: string;
    monthlyCost: string;
    yearlyCost: string;
}[]

export type AddonInfo = {
    id: string;
    title: string;
    subtitle: string;
    monthlyCost: string;
    yearlyCost: string;
}[]

export type FormSummaryInfo = {
    plan: string | undefined;
    unit: PriceUnit;
    planPrice: string | undefined;
    addOns: {
        name: string;
        price: string;
    }[];
    total: string;
};
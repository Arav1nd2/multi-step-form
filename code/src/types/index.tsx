

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
    isLast: () => boolean,
    isFirst: () => boolean,
    getCurrentStepInfo: () => CurrentStepInfo,
    getAllStepInfo: () => CurrentStepInfo[]
} | null;
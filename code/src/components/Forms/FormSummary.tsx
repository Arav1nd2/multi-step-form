import { useContext } from "react";
import { PriceUnit } from "../../types";
import { StepFormContext } from "../../utils";

export function FormSummary() {
    const formAPI = useContext(StepFormContext);

    if (formAPI?.step != 4) return <></>;

    const state = formAPI.getFormSummary();

    const unitString = state.unit === PriceUnit.MONTHLY ? "Monthly" : "Yearly";
    const totalString = state.unit === PriceUnit.MONTHLY ? "month" : "year";

    return (
        <section>
            <div className="bg-magnolia rounded-lg p-6 sm:py-6 sm:px-8 mt-10">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h3 className="text-md text-marine-blue font-medium">{state.plan}&nbsp;({unitString})</h3>
                        <a href="#" className="text-md text-cool-gray underline hover:text-purple-blue-50" onClick={() => formAPI.goToStep(2)}>Change</a>
                    </div>
                    <h2 className="text-lg text-marine-blue font-medium">
                        {formatPrice(state.planPrice || "", state.unit)}
                    </h2>
                </div>
                <hr />
                <div>
                    {
                        state.addOns.map(addOn => (
                            <div key={addOn.name} className="flex items-center justify-between mt-4">
                                <p className="text-md text-cool-gray">{addOn.name}</p>
                                <p className="font-thin text-marine-blue">+{formatPrice(addOn.price, state.unit)}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex mt-6 px-8 items-center justify-between">
                <p className="text-md text-cool-gray">Total (per {totalString})</p>
                <h2 className="text-lg text-purple-blue font-medium">{formatPrice(state.total, state.unit)}</h2>
            </div>
        </section>
    )
}

function formatPrice(price: string, type: PriceUnit) {
    switch (type) {
        case PriceUnit.MONTHLY:
            return `$${price}/mo`;
        case PriceUnit.YEARLY:
            return `$${price}/yr`;
        default:
            return `$${price}`;
    }
}
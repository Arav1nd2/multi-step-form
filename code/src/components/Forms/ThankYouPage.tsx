import { useContext } from "react";
import { StepFormContext } from "../../utils";

export function ThankYouPage() {
    const formAPI = useContext(StepFormContext);

    if (formAPI?.step != 5) return <></>;

    return (
        <section className="h-full flex flex-col items-center justify-center text-center my-6 sm:my-0">
            <img src="/images/icon-thank-you.svg" alt="Thank you" />
            <h1 className="text-3xl font-bold tracking-wide mt-6 mb-4 text-marine-blue">Thank you!</h1>
            <p className="text-cool-gray pb-20 sm:pb-0">
                Thanks for confirming your subscription! We hope you have fun using our
                platform. If you ever need support, please feel free to email us at
                support@loremgaming.com
            </p>
        </section>
    );
}

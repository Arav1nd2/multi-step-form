import { PriceUnit } from "../../types";


interface CardProps {
    icon: string,
    title: string,
    price: string,
    units: PriceUnit,
    isActive: boolean,
    onClick: any
}

export function Card(props: CardProps) {
    const price = formatPrice(props.price, props.units);
    const isYearly = props.units === PriceUnit.YEARLY;
    return (
        <div className={`
            p-4 border rounded-lg
            ${props.isActive === true ? "border-purple-blue bg-alabaster" : "border-light-gray"}
            hover:border-purple-blue
            flex
            flex-auto
            items-start
            cursor-pointer
            sm:flex-col
        `} onClick={props.onClick}>
            <img src={props.icon} className="block max-w-[50px] mr-5 sm:mb-12" />
            <section>
                <h3 className="font-medium text-marine-blue text-md">{props.title}</h3>
                <p className="font-regular text-cool-gray">{price}</p>
                {isYearly && <p className="font-regular mt-1 text-xs text-marine-blue">2 months free</p>}
            </section>
        </div>
    )
}

function formatPrice(price: string, units: PriceUnit) {
    switch (units) {
        case PriceUnit.MONTHLY:
            return `$${price}/mo`;
        case PriceUnit.YEARLY:
            return `$${price}/yr`;
        default:
            return `$${price}`;
    }
}
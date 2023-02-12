import { Switch as HeadlessSwitch } from "@headlessui/react"

interface SwitchProps {
    checked: boolean,
    leftLabel: string,
    rightLabel: string,
    onChange: (value: boolean) => void
}

export function Switch(props: SwitchProps) {
    return (
        <HeadlessSwitch.Group>
            <HeadlessSwitch.Label className={`
                mr-8 font-medium
                ${!props.checked ? "text-marine-blue" : "text-light-gray"}
            `}>{props.leftLabel}</HeadlessSwitch.Label>
            <HeadlessSwitch
                checked={props.checked}
                onChange={props.onChange}
                className={`bg-marine-blue relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span
                    className={`${props.checked ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </HeadlessSwitch>
            <HeadlessSwitch.Label className={`
                ml-8 font-medium
                ${props.checked ? "text-marine-blue" : "text-light-gray"}
            `}>{props.rightLabel}</HeadlessSwitch.Label>
        </HeadlessSwitch.Group>
    )
}
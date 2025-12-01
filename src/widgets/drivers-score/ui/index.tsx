import { BigScore } from "../../../shared/ui/big-score"

export const DriversScore = () => {
    return (
        <div>
            <BigScore score={4.8} star={true} name="Оценка водителей"/>
            <BigScore score={7.2} star={false} name="Время ожидания"/>
            <BigScore score={23} star={false} name="Простой водителей"/>
        </div>
    )
}
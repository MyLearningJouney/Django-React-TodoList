import { SetStateAction } from "react"
import { ActivityItem } from "../../../../../../types/ActivityItem"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
}

function handleCancelComplete({activityItem,setActivitiesList,event}: Props) {
    event.preventDefault()
    setActivitiesList(prevActitivies => 
        prevActitivies.map(activity => 
        {
            if (activityItem.id === activity.id){
                return {...activity, status: "pending"}
            }
            return activity
        }))
}

export default handleCancelComplete
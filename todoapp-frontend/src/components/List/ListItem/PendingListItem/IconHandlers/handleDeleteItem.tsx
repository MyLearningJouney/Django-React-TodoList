import { SetStateAction } from "react"
import { ActivityItem } from "../../../../../types/ActivityItem"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
}

function handleDelete({activityItem,setActivitiesList,event}: Props) {
    event.preventDefault()
    setActivitiesList(prevActitivies => 
        prevActitivies.filter(activity => activity.id !== activityItem.id))    
}

export default handleDelete
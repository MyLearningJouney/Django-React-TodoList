import { SetStateAction } from "react"
import { ActivityItem } from "../../../../../types/ActivityItem"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
}

function handleEdit({activityItem,setActivitiesList,event}: Props) {
    event.preventDefault()
    setActivitiesList(prevActitivies => 
        prevActitivies.map(activity => 
        {
            if (activityItem.id === activity.id){
                return {...activity, status: "editing"}
            }
            return activity
        }))
    }

export default handleEdit
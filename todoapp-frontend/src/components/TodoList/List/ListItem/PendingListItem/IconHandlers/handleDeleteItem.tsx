import { SetStateAction } from "react"
import TodoAppDataService from "../../../../../../services/TodoAppDataService"
import { ActivityItem } from "../../../../../../types/ActivityItem"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
    token: string
}

function handleDelete({activityItem,setActivitiesList,event,token}: Props) {
    event.preventDefault()
    //console.log(activityItem.id)
    
    TodoAppDataService.deleteTodo(activityItem.id, token)
    .then((response) => {
        console.log(response.data);
    })
        .catch((e) => {
            console.log(e);
    });

    setActivitiesList(prevActitivies => 
        prevActitivies.filter(activity => activity.id !== activityItem.id))    
}

export default handleDelete
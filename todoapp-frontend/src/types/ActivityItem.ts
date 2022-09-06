export interface ActivityItem {
    activity: string,
    createdDate: string, 
    completedDate: string,
    status: "pending" | "editing" | "completed",
    id?: string
}
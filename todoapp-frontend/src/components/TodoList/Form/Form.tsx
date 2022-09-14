import { SetStateAction, useState } from "react";
import { ActivityItem } from "../../../types/ActivityItem";
import style from "../Form/Form.module.scss";
import InputButton from "./Button/InputButton";
import Input from "./Input/Input";
import DateFormat from "../../../utils/DateFormat";
import TodoAppDataService from "../../../services/TodoAppDataService";
import DateFormatDB from "../../../utils/DateFormatDB";
import { User } from "../../../types/User";


interface Props {
    setActivities: React.Dispatch<SetStateAction<ActivityItem[]>>;
    token: string
    user: User
}

function Form({ setActivities, token, user }: Props) {

    const [activity, setActivity] = useState<string>("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newActivity: ActivityItem = {
            activity: activity,
            createdDate: DateFormat(new Date(Date.now())),
            completedDate: DateFormat(new Date()),
            status: "pending",
        };
        //setActivities((prevActitivies) => [...prevActitivies, newActivity]);
        const createdDateDB = DateFormatDB(newActivity.createdDate)
        const completedDateDB = DateFormatDB(newActivity.completedDate)
        const newActiviyDB = {...newActivity, createdDate: createdDateDB,completedDate: completedDateDB, user: user.userid}
        TodoAppDataService.createTodo(newActiviyDB, token)
            .then((response) => {
                console.log(response.data);
                setActivities((prevActitivies) => [...prevActitivies, response.data]);

        })
            .catch((e) => {
                console.log(e);
        });
    }

    return (
        <form className={style.inputForm} onSubmit={handleSubmit}>
            <div className={style.formContentWrapper}>
                <Input
                    type={"text"}
                    name={"activityInput"}
                    placeholder={"What you have to do today ?"}
                    setActivity={setActivity}
                    />
                <InputButton type="submit" />
            </div>
        </form>
  );
}

export default Form;

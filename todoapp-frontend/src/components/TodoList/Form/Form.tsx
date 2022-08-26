import { SetStateAction, useState } from 'react';
import { ActivityItem } from '../../../types/ActivityItem';
import { v4 as uuidv4 } from 'uuid'; 
import style from '../Form/Form.module.scss'
import InputButton from './Button/InputButton'
import Input from './Input/Input';
import DateFormat from '../../../utils/DateFormat';

interface Props {
    setActivities: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function Form ({setActivities}:Props ){

    const [activity, setActivity] = useState<string>('');

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        const newActivity:ActivityItem = {
            activity:activity,
            createdDate: DateFormat(new Date(Date.now())), 
            completedDate: DateFormat(new Date()),
            status: "pending", 
            id: uuidv4()
            }
        setActivities(prevActitivies => [...prevActitivies, newActivity])
        }

    return (
        <form className={style.inputForm} onSubmit={handleSubmit}>
            <div className={style.formContentWrapper}>
                <Input type={'text'} name={'activityInput'} placeholder={'What you have to do today ?'} setActivity={setActivity}/>
                <InputButton type="submit"/>
            </div>
        </form>
    )
}

export default Form

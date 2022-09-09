import axios from 'axios';

class TodoAppDataService{
    getAll(token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get('https://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/todoactivities');
    }
    createTodo(data, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post("https://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/todoactivities", data);
    }
    updateCreatedItem(id, data, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get(`https://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/todoactivities/${id}`, data);
    }
    deleteTodo(id, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`https://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/todoactivities/${id}`);
    }
    updateTodo(id, data, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`https://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/todoactivities/${id}`, data);
    }
    signin(data){
        console.log(data)
        return axios.post("https://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/signin", 
         data);
    }
    signup(data){
        return axios.post("ttps://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/signup/", data);
    }
}

export default new TodoAppDataService();



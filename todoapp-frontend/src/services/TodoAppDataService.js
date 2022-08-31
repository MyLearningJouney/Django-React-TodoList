import axios from 'axios';

class TodoAppDataService{
    getAll(token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        //axios.defaults.headers.common["X-GitHub-Token"] = "ghu_y81EnxAjfNm3Tedc0I866VhuBddj5g1xY8cp";
        //axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
        return axios.get('https://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/todoactivities');
    }
    createTodo(data, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post("http://localhost:8000/api/todoactivities/", data);
    }
    updateTodo(id, data, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/todoactivities/${id}`, data);
    }
    deleteTodo(id, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`http://localhost:8000/api/todoactivities/${id}`);
    }
    completeTodo(id, token){
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/todoactivities/${id}/complete`);
    }
    signin(data){
        console.log(data)
        return axios.post("https://mylearningjouney-django-react-todolist-qvggqv9w25v7-8000.githubpreview.dev/api/signin", 
         data);
    }
    signup(data){
        return axios.post("http://localhost:8000/api/signup/", data);
    }
}

export default new TodoAppDataService();



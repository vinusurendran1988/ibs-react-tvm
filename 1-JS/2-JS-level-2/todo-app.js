//-----------------------------------------------------
// {id:1,title:'',completed:false}
//-----------------------------------------------------
// Model
class Todo {
    constructor(title) {
        Todo.id++;
        this.id = Todo.id;
        this.title = title;
        this.completed = false;
    }
}
Todo.id = 0;
//-----------------------------------------------------
// Service
class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title);
        this.todos = this.todos.concat(newTodo);
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: todo.id === id ? !todo.completed : todo.completed }))
    }
    editTodo(id, newTitle) {
        this.todos = this.todos.map(todo => Object.assign({}, todo, { title: todo.id === id ? newTitle : todo.title }))
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completeAll() {
        let isAllCompleted = this.todos.every(todo => todo.completed);
        this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: !isAllCompleted }))
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }
    view(filter) {
        // status ==> 'ALL' | 'ACTIVE' | 'COMPLETED'
        switch (filter) {
            case 'ALL':
                this.todos.forEach(item => console.log(item))
                break;
            case 'ACTIVE':
                this.todos.forEach(item => {
                    if (!todo.completed) console.log(todo)
                })
                break;
            case 'COMPLETED':
                this.todos.forEach(item => {
                    if (todo.completed) console.log(todo)
                })
                break;
            default:
                console.log(' give me valid filter');
        }
    }

}
//-----------------------------------------------------

const service = new TodoService();
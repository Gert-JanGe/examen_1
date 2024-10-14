async function getTodos(userId){
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        if (!response.ok){
            throw new Error("Netwerk response niet ok");
        }
    const todos = await response.json();
    return todos;
}

async function myTodos(userId) {
    try{
        const todos = await getTodos(userId);
        console.log(todos);
    } catch(error) {
        console.error("error fetching le data")
    }
}

myTodos(1);
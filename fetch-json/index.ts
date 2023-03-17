import axios from 'axios';

interface ToDo {
  id: number;
  title: string;
  body: string;
}

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url).then((response) => {
  const todo = response.data as ToDo;

  const id = todo.id;
  const title = todo.title;
  const body = todo.body;

  logTodo(id, title, body);
});

const logTodo = (id: number, title: string, body: string) => {
  console.log(`
    id: ${id},
    title: ${title},
    body: ${body}
  `);
};

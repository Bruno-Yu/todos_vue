<template>

  <div>
    <div class="bg-indigo-500 p-5 h-screen">
      <div class="max-w-[768px] m-auto bg-white p-5">
        <h1 class="text-center text-2xl mb-4">Vue ToDoList</h1>
        <div class="flex">
          <input v-model="cacheTodo" type="text" class="w-full rounded-l-lg border-l-2 border-y-2 border-indigo-300 pl-4 focus:outline-indigo-500 focus:outline-none focus:outline-offset-0" placeholder="請輸入你的代辦事項" />
          <button @click="addTodo" class="w-[50px] h-[50px] border-0 bg-sky-500 hover:bg-sky-600 rounded-r-lg text-white transition duration-700">+</button>
        </div>
        <ul>
          <li v-for="(todo, index) in todoList" :key="index" class="py-4">
            <!-- <label :class="todo.status ? 'line-through' : ''">
              <input @click="updateTodo" type="checkbox" :data-id="todo.id" />
              {{ todo.name }}
            </label> -->
            <todoItem :todo="todo" :update-todo="updateTodo" />
            </li>
        </ul>
        <div class="flex justify-between items-center">
          <p>
            目前有 <span class="font-medium">{{ todoList.length }}</span> 個事項待完成
          </p>

          <button @click="remoteAllTodo" type="button" class="bg-red-300 p-2 rounded-md hover:bg-red-400 transition duration-700">Clear All Task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import todoItem from '@/components/todoItem.vue'

export default {
  components: { todoItem },
  setup() {
    const cacheTodo = ref('');
    const todoList = ref(JSON.parse(localStorage.getItem('todoList')) || []);

    const addTodo = () => {
      todoList.value.push({
        id: Date.now(),
        name: cacheTodo.value,
        status: false,
      })
      cacheTodo.value = '';
      setItem('todoList', todoList.value);
    };

    const updateTodo = (event) => {
      const { id } = event.target.dataset;
      todoList.value.forEach((todo) => {
        if (todo.id === Number(id)) {
          todo.status = !todo.status;
        }
      });
      setItem('todoList', todoList.value);
    }

    const remoteAllTodo = () => {
      todoList.value = [];
      setItem('todoList', todoList.value);
    };

    const setItem = (key, data) => {
      window.localStorage.setItem(key, JSON.stringify(data));
    }

    return {
      cacheTodo,
      todoList,
      addTodo,
      updateTodo,
      remoteAllTodo
    }
  }
}


</script>
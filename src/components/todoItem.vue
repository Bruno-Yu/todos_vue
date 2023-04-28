<template>
  <div>
  <label :class="todo.status ? 'line-through' : ''">
          <input @click="updateTodo" type="checkbox" :data-id="todo.id" />
          {{ todo.name }}
        </label>
  </div>
</template>


<script>
// import { toRefs } from 'vue';

export default {
  props: {
    todo: {
      type: Object,
      default: () => ({
        id: Date.now(),
        name: '',
        status: false,
      })
    },
    updateTodo: {
      type: Function,
      default: () => {},
    },
  },
  // setup(props) {
  //   const { todo, updateTodo } = toRefs(props);
  //   return {
  //     todo,
  //   }
  // }
}




</script>
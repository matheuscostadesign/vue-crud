<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      try {
        const users = await axios.get("https://62950af263b5d108c199071e.mockapi.io/Usuarios");

        this.users = users.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <button @click="getUsers">Mostrar</button> <br />
  <br />

  <table>
    <tr>
      <th>Nome</th>
      <th>Sobrenome</th>
      <th>Controles</th>
    </tr>
    <tr class="users" v-for="user in users" :key="user.id">
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>
        <button>Editar</button>
        <button>Excluir</button>
      </td>
    </tr>
  </table>
</template>

<style>
table {
  text-align: left;
}
th,
td {
  padding: 6px;
}
</style>

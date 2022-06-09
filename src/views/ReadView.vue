<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      users: [],
      user: {},
      firstName: "",
      lastName: "",
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
    async deleteUser(id) {
      let x = window.confirm("Deseja realmente excluir o usuário?");
      if (x) {
        const user = await axios.delete("https://62950af263b5d108c199071e.mockapi.io/Usuarios/" + id);
        console.log(user);
        alert("Usuário deletado com sucesso!");
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
        <router-link to="/update">
          <button>Editar</button>
        </router-link>
        <button @click="deleteUser(user.id)">Excluir</button>
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

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
        this.getUsers(); // atualiza automaticamente
      }
    },
    async editUser(user) {
      this.user.id = user.id;
      this.user.firstName = user.firstName;
      this.user.lastName = user.lastName;
    },
  },
  beforeMount() {
    // carrega a função ao abrir a tela
    this.getUsers();
  },
};
</script>

<template>
  <!-- <div v-if="(users.length = 0)">OCULTAR</div>
  <div v-else>MOSTRAR</div> -->

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
        <router-link to="/editar">
          <button @click="editUser(user)">Editar</button>
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

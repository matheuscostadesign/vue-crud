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
    this.getUsers(); // carrega a função ao abrir a tela
  },
};
</script>

<template>
  <div v-if="users.length <= 0">
    <p>{{ $t("pagina-listar.texto-vazio") }}</p>
  </div>

  <div v-else>
    <table>
      <tr>
        <th>{{ $t("pagina-listar.nome") }}</th>
        <th>{{ $t("pagina-listar.sobrenome") }}</th>
        <th>{{ $t("pagina-listar.controles") }}</th>
      </tr>
      <tr class="users" v-for="user in users" :key="user.id">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td class="btnsControle">
          <router-link to="/editar">
            <button class="btnEditar" @click="editUser(user.id)">{{ $t("pagina-listar.btn-editar") }}</button>
          </router-link>
          <button class="btnExcluir" @click="deleteUser(user.id)">{{ $t("pagina-listar.btn-excluir") }}</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
table {
  text-align: center;
  width: 100%;
}
th,
td {
  padding: 6px;
}
button {
  padding: 6px 10px;
}
.btnEditar {
  background-color: #ccc;
  margin-right: 16px;
}
.btnExcluir {
  background-color: #ee5253;
  color: #fff;
  margin-right: 0;
}
th {
  text-align: center;
}
</style>

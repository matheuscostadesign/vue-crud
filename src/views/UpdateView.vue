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
    async getUser(id) {
      try {
        const users = await axios.get("https://62950af263b5d108c199071e.mockapi.io/Usuarios/" + id);
        console.log(users.data);
        this.user = users.data;
      } catch (e) {
        console.log(e);
      }
    },
    async updateUser() {
      try {
        const user = await axios.put("https://62950af263b5d108c199071e.mockapi.io/Usuarios/" + this.user.id, {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
        });
        console.log(user.data);
        alert("Usuário alterado!");
        this.$router.push("/listar"); // Redireciona para a listagem
      } catch (e) {
        console.log(e);
      }
    },
  },
  beforeMount() {
    this.getUser(this.$route.params.id);
  },
};
</script>

<template>
  <div>
    <h2>Editar</h2>
    <input type="text" v-model="user.firstName" placeholder="Nome" required /> <br />
    <input type="text" v-model="user.lastName" placeholder="Sobrenome" required /> <br />
    <button @click="updateUser">Alterar</button>
  </div>
</template>

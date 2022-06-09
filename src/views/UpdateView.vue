<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      users: [],
      firstName: "",
      lastName: "",
      user: {},
    };
  },
  methods: {
    async updateUser() {
      try {
        const user = await axios.put("https://62950af263b5d108c199071e.mockapi.io/Usuarios/" + this.user.id, {
          name: this.user.name,
          email: this.user.email,
        });
        console.log(user.data);
        alert("Usuário alterado!");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <form>
    <h2>Editar</h2>
    <input type="text" v-model="firstName" placeholder="Nome" required /> <br />
    <input type="text" v-model="lastName" placeholder="Sobrenome" required /> <br />
    <button @click="updateUser">Alterar</button>
  </form>
</template>

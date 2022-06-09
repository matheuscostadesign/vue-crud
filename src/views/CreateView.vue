<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      users: [],
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    async createUser() {
      try {
        const user = await axios.post("https://62950af263b5d108c199071e.mockapi.io/Usuarios", {
          firstName: this.firstName,
          lastName: this.lastName,
        });
        alert("Usuário cadastrado com sucesso!");
        console.log(user);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="firstName" placeholder="Nome" required /> <br />
    <input type="text" v-model="lastName" placeholder="Sobrenome" required /> <br />
    <button @click="createUser">Cadastrar</button>
  </div>
</template>

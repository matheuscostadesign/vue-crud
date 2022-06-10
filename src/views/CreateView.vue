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
        //alert("Usuário cadastrado com sucesso!");
        this.$router.push("/listar"); // Redireciona para a listagem
        console.log(user);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div class="formCadastro">
    <input type="text" v-model="firstName" placeholder="Nome" required />
    <input type="text" v-model="lastName" placeholder="Sobrenome" required />
    <button class="btnCadastrar" @click="createUser">Cadastrar</button>
  </div>
</template>

<style>
button {
  margin-right: 16px;
}
.btnCadastrar {
  width: 100%;
  height: 40px;
}
.formCadastro {
  display: flex;
  flex-direction: column;
}
</style>

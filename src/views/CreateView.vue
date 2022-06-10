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
    <input type="text" v-model="firstName" :placeholder="$t('pagina-cadastro.nome')" required />
    <input type="text" v-model="lastName" :placeholder="$t('pagina-cadastro.sobrenome')" required />
    <button class="btnCadastrar" @click="createUser">{{ $t("pagina-cadastro.botao") }}</button>
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
  width: 100%;
}
</style>

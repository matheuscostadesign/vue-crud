<template>
  <div class="locale-changer">
    <label for="">Idioma</label>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return { langs: ["pt-br", "en"] };
  },
};
</script>

<style>
.locale-changer {
  margin-top: 16px;
}
.locale-changer label {
  margin-right: 8px;
}
</style>

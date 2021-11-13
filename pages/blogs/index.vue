<template>
  <BreadCrumb :name="$nuxt.$route.name" />
</template>

<script>
export default {
  head() {
    return {
      title: "Aler | Blog",
    };
  },
};
</script>

<style></style>

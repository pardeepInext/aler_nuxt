<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" image="agents.jpg" />
  </div>
</template>

<script>
export default {
    head() {
    return {
      title: "Aler | Agents",
    };
  },
};
</script>

<style></style>

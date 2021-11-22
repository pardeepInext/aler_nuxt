<template>
  <BreadCrumb :name="$nuxt.$route.name" image="blog.jpg" />
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

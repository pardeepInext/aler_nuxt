<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" image="property.jpg" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Aler | Properties",
    };
  },
};
</script>

<style></style>

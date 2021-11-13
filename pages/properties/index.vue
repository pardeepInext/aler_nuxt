<template>
 <div>
   <BreadCrumb :name="$nuxt.$route.name" />
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

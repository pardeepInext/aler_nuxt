<template>
  <div
    class="cs-item set-bg"
    :style="{ backgroundImage: `url('img/categories/${propertyCount.type}.jpg')` }"
  >
    <div class="cs-text">
      <h5>{{ propertyCount.type }}</h5>
      <span>{{ propertyCount.count }} property</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["propertyCount"],
};
</script>

<style></style>

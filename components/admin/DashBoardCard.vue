<template>
  <div class="col-xl-3 col-lg-4 col-sm-6">
    <div class="icon-card mb-30">
      <div
        :class="[
          'icon',
          cardColor[Math.floor(Math.random() * cardColor.length)],
        ]"
      >
        <i :class="['lni', icon(name)]"></i>
      </div>
      <div class="content">
        <h6 class="mb-10">{{ name }}</h6>
        <h3 class="text-bold mb-10">{{ count }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["count", "name"],
  data() {
    return {
      cardColor: ["purple", "success", "primary", "orange"],
    };
  },
  methods: {
    icon(name) {
      switch (name) {
        case "properties":
          return "lni-apartment";
          break;
        case "agent":
          return "lni-handshake";
          break;
        case "admin":
          return "lni-cup";
          break;
        default:
          return "lni-hand";
          break;
      }
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <a
      href="#0"
      class="collapsed"
      data-bs-toggle="collapse"
      :data-bs-target="`#ddmenu_${index}`"
      aria-controls="ddmenu_1"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="icon">
        <i :class="['fa', menu.icon]"></i>
      </span>
      <span class="text">{{ menu.name }}</span>
    </a>
    <ul :id="`ddmenu_${index}`" class="collapse dropdown-nav">
      <li v-for="(subLink, index) in menu.subLinks" :key="index">
        <NuxtLink :to="`/admin${subLink.link}`">{{ subLink.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["index", "menu"],
};
</script>

<style></style>

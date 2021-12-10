<template>
  <div class="blog-item" :class="index == 0 ? 'large-blog' : ''">
    <div :class="index == 0 ? 'bi-pic' : 'bi-pic-sm'">
      <img :src="blog.images[0].image" :alt="blog.heading" />
    </div>
    <div class="bi-text">
      <h5>
        <NuxtLink :to="`blogs/${blog.id}`">
          {{ blog.heading }}
        </NuxtLink>
      </h5>
      <ul>
        <li>
          by <span>{{ blog.user.name }}</span>
        </li>
        <li>{{ dateFormater(blog.created_at) }}</li>
        <li v-if="blog.comments_count > 0">
          {{ blog.comments_count }} Comment
        </li>
      </ul>
      <p>
        {{ blog.content.substring(0, 100) }}
        {{ blog.content.length > 100 && "..." }}
      </p>
      <NuxtLink class="read-more" :to="`blogs/${blog.id}`">
        Read more <span class="arrow_right"></span
      ></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blog", "index"],
  data() {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  methods: {
    dateFormater(dateString) {
      const date = new Date(dateString);
      return `${
        this.months[date.getMonth()]
      } ${date.getDay()} ${date.getFullYear()}`;
    },
  },
};
</script>

<style scopped>
@media (min-width: 399px) {
  .blog-item .bi-pic-sm img {
    height: 220px;
    width: 330px;
    object-fit: cover;
  }
}
</style>

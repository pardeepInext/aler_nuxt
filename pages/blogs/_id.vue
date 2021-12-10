<template>
  <div>
    <section
      class="blog-hero-section set-bg"
      :style="{ backgroundImage: `url('${blog.images[0].image}')` }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="bh-text">
              <h4>
                {{ blog.heading }}
              </h4>
              <ul>
                <li>
                  by <span>{{ blog.user.name }}</span>
                </li>
                <li>{{ dateFormater(blog.created_at) }}</li>
                <li v-if="blog.comments_count > 0">
                  {{ blog.comments_count }} Comment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="blog-details-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto p-0">
            <div class="blog-details-content" v-html="blog.content"></div>
            <div class="blog-details-content">
              <div class="bc-widget" v-if="blog.comments_count > 0">
                <h4>{{ blog.comments_count }} Comments</h4>
                <div class="comment-option">
                  <comment
                    v-for="comment in blog.comments"
                    :key="comment.id"
                    :comment="comment"
                  />
                </div>
              </div>
              <div class="bc-widget">
                <h4>Leave a comment</h4>
                <form class="leave-comment-form">
                  <textarea placeholder="Comment"></textarea>
                  <button type="button" class="site-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`/blogs/${params.id}`);
    const blog = data;
    return { blog };
  },
  computed: {
    ...mapState(["months"]),
  },
  methods: {
    dateFormater(dateString) {
      const date = new Date(dateString);
      return `${
        this.months[date.getMonth()]
      } ${date.getDay()} ${date.getFullYear()}`;
    },
  },
  mounted() {},
};
</script>

<style></style>

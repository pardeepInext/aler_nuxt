<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" image="blog.jpg" />
    <section class="blog-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-item-list">
              <blog
                v-for="(blog, index) in blogs.data"
                :key="blog.id"
                :blog="blog"
                :index="index"
              />
              <div
                class="blog-pagination property-pagination"
                v-if="blogs.last_page > 1"
              >
                <a
                  class="icon"
                  v-if="blogs.current_page > 1"
                  @click="fetchblogs(blogs.current_page - 1)"
                >
                  <span class="arrow_left"></span>
                </a>
                <a
                  href="javascript:void(0);"
                  v-for="page in blogs.last_page"
                  :key="page"
                  :class="[page == blogs.current_page && 'paginate-active']"
                  @click="fetchblogs(page)"
                  >{{ page }}</a
                >
                <a
                  class="icon"
                  v-if="blogs.current_page < blogs.last_page"
                  @click="fetchblogs(blogs.current_page + 1)"
                >
                  <span class="arrow_right"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <blogs-side-bar />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Block } from "notiflix";
import BlogsSideBar from "../../components/BlogsSideBar";
import Blog from "../../components/Blog";
export default {
  components: { BlogsSideBar, Blog },
  head() {
    return {
      title: "Aler | Blog",
    };
  },
  async asyncData({ $axios, store }) {
    const { data } = await $axios.get("/blogs");
    store.commit("blog/Fetching_Blogs", data);
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("blog", ["blogs"]),
  },
  methods: {
    ...mapActions("blog", ["fetchblogs"]),
  },
};
</script>

<style scoped>
.paginate-active {
  background: #00c89e;
  color: #ffffff !important;
}
</style>

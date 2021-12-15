<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" image="agents.jpg" />
    <section class="agent-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="agent-search-form">
              <form action="#">
                <input type="text" placeholder="Find agent" />
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
        <div class="row" id="agent-list" v-if="agents.length > 0">
          <agent v-for="agent in agents" :key="agent.id" :agent="agent" />
        </div>
        <div v-else class="row section-title">
          <h4>No Agents Available</h4>
        </div>
        <div class="row" v-if="currentPage < lastPage">
          <div class="col-lg-12">
            <div class="loadmore-btn">
              <a @click="fetchagents(currentPage + 1)">Load more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Agent from "../../../components/Agent";

export default {
  components: { Agent },
  head() {
    return {
      title: "Aler | Agents",
    };
  },
  async asyncData({ $axios, store }) {
    const { data } = await $axios.get("/agents");
    store.commit("agent/Agents", data.data);
    store.commit("agent/CurrentPage", data.current_page),
      store.commit("agent/LastPage", data.last_page);
  },
  computed: {
    ...mapState("agent", ["agents", "lastPage", "currentPage"]),
  },
  methods: {
    ...mapActions("agent", ["fetchagents"]),
  },
};
</script>

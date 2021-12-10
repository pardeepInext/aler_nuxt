<template>
  <div>
    <bread-crumb :name="agent.user.name" image="agents.jpg">
      <NuxtLink to="/agents">Agents</NuxtLink>
    </bread-crumb>
    <agent-details />
    <section class="property-section profile-page spad">
      <div class="container">
        <div class="row agent-property-list">
          <property
            v-for="property in agentProperties"
            :key="property.id"
            :property="property"
          />
        </div>
        <div
          class="row"
          v-if="agent.properties.current_page < agent.properties.last_page"
        >
          <div class="col-lg-12">
            <div class="loadmore-btn">
              <a
                @click="
                  loadMoreProp({
                    page: agent.properties.current_page + 1,
                    id: $route.params.id,
                  })
                "
                >Load more</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AgentDetails from "../../components/AgentDetails.vue";
import BreadCrumb from "../../components/BreadCrumb";
import Property from "../../components/Property.vue";
import { Block } from "notiflix";
import { mapState, mapActions } from "vuex";

export default {
  components: { BreadCrumb, AgentDetails, Property },
  async asyncData({ $axios, params, store }) {
    const { data } = await $axios.get(`/agents/${params.id}`);
    store.commit("agent/Agent", data);
    store.commit("agent/AgentProperty", data.properties.data);
  },
  computed: {
    ...mapState("agent", ["agent", "agentProperties"]),
  },
  methods: {
    ...mapActions("agent", ["loadMoreProp"]),
  },
};
</script>

<style>
.loadmore-btn a,
.loadmore-btn a:hover {
  color: #fff;
  cursor: pointer;
}
</style>

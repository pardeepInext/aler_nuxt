<template>
  <div class="tables-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-style mb-30">
          <div class="row">
            <div
              class="table-wrapper table-responsive"
              id="property-list-admin"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th><h6>Property</h6></th>
                    <th><h6>Agent</h6></th>
                    <th><h6>Address</h6></th>
                    <th><h6>Action</h6></th>
                  </tr>
                  <!-- end table row-->
                </thead>
                <tbody
                  v-if="
                    propertyList.hasOwnProperty('data') &&
                    propertyList.data.length > 0
                  "
                >
                  <tr v-for="property in propertyList.data" :key="property.id">
                    <td class="min-width">
                      <div class="lead">
                        <div class="lead-image">
                          <img :src="property.images[0].image" alt="" />
                        </div>
                        <div class="lead-text">
                          <p>{{ property.title }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="min-width">
                      <NuxtLink :to="`/admin/users/${property.user.id}/show`">
                        <p>{{ property.user.name }}</p>
                      </NuxtLink>
                    </td>
                    <td class="min-width">
                      <p>
                        {{ property.property_location.address }},
                        {{ property.property_location.city.name }},
                        {{ property.property_location.state.name }},
                        {{ property.property_location.country.name }}
                      </p>
                    </td>
                    <td>
                      <div class="action">
                        <NuxtLink
                          class="text-success action-link"
                          :to="`/admin/properties/${property.id}`"
                        >
                          <i class="lni lni-eye"></i>
                        </NuxtLink>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td class="min-width text-center" colspan="5">
                      No property available
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav
                aria-label="Page navigation example"
                v-if="propertyList.last_page > 1"
              >
                <ul class="pagination justify-content-center">
                  <li
                    class="page-item"
                    :class="propertyList.current_page == 1 && 'disabled'"
                  >
                    <a
                      class="page-link"
                      tabindex="-1"
                      @click="propertyListFetch(propertyList.current_page - 1)"
                      >Previous</a
                    >
                  </li>
                  <li
                    class="page-item"
                    v-for="page in propertyList.last_page"
                    :class="
                      (page == propertyList.current_page) == 1 && 'active'
                    "
                    :key="page"
                  >
                    <a class="page-link" @click="propertyListFetch(page)">{{
                      page
                    }}</a>
                  </li>
                  <li
                    class="page-item"
                    :class="
                      propertyList.current_page == propertyList.last_page &&
                      'disabled'
                    "
                  >
                    <a
                      class="page-link"
                      @click="propertyListFetch(propertyList.current_page + 1)"
                      >Next</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "admin",
  head() {
    return {
      title: "Properties",
    };
  },
  async asyncData({ $axios, store }) {
    const { data } = await $axios.get("properties");
    store.commit("property/PropertyList", data);
  },
  computed: {
    ...mapState("property", ["propertyList", "isPropertyFetched"]),
  },
  methods: {
    ...mapActions("property", ["propertyListFetch"]),
  },
};
</script>

<style scopped>
.table .lead .lead-image {
  overflow: visible;
}
</style>

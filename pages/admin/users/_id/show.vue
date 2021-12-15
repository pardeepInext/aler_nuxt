<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 col-sm-12">
      <div class="card-style-2 mb-30">
        <div class="card-image">
          <img
            :src="data.image"
            :alt="data.name"
            height="300"
            style="object-fit: contain"
          />
        </div>
        <div class="card-content text-capitalize">
          <ul class="list-group">
            <li class="list-group-item">
              <span class="fw-bold">Name:</span> {{ data.name }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Email:</span> {{ data.email }}
            </li>
            <li class="list-group-item">
              <span class="fw-bold">Role:</span>
              <span class="status-btn close-btn">
                {{ data.role.name }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Show",
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`users/${params.id}`);
    return { data };
  },
  layout: "admin",
};
</script>

<style></style>

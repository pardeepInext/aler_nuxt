<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 col-sm-12">
      <div class="card-style-1 mb-30">
        <div class="card-meta">
          <div class="text">
            <p class="text-sm text-medium me-2">Posted By:</p>
          </div>
          <div class="image">
            <img :src="data.user.image" alt="" />
          </div>
          <div class="text">
            <p class="text-sm text-medium">
              <a href="#0">{{ data.user.name }}</a>
            </p>
          </div>
        </div>
        <div class="card-image">
          <a href="#0">
            <img :src="data.images[0].image" alt="" />
          </a>
        </div>
        <div class="card-content">
          <h4>{{ data.title }}</h4>
          <p>
            <i class="lni lni-map-marker text-success"></i>
            {{ data.property_location.address }},
            {{ data.property_location.city.name }},
            {{ data.property_location.state.name }},
            {{ data.property_location.country.name }}
          </p>
          <div class="icons-wrapper">
            <ul class="icons">
              <li class="trigger Free">
                <i class="fa fa-object-group"></i><span>{{ data.size }} </span>
              </li>
              <li class="trigger Free">
                <i class="lni lni-car"></i><span>{{ data.bedrooms }}</span>
              </li>
              <li class="trigger Free">
                <i class="fa fa-bathtub"></i><span>{{ data.bathroom }}</span>
              </li>
              <li class="trigger Free">
                <i class="fa fa-bed"></i><span>{{ data.garages }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`properties/${params.id}`);
    return { data };
  },
};
</script>

<style></style>

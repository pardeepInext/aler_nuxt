<template>
  <div class="col-lg-4 col-md-6">
    <div class="property-item">
      <div
        class="pi-pic set-bg"
        :style="{
          backgroundImage: `url('${property.images[0].image}')`,
        }"
      >
        <div class="label" :class="property.status == 'rent' ? 'c-red' : ''">
          For {{ property.status }}
        </div>
      </div>
      <div class="pi-text">
        <a href="#" class="heart-icon"><i class="bi bi-suit-heart"></i></a>
        <div class="pt-price">
          &#36; {{ property.price
          }}<span v-if="property.status == 'rent'">/month</span>
        </div>
        <h5>
          <NuxtLink :to="`/properties/${property.id}`"
            >{{ property.title }}
          </NuxtLink>
        </h5>
        <p class="text-capitalize">
          <span class="icon_pin_alt"></span>
          {{ property.property_location.address }},
          {{ property.property_location.city.name }},
          {{ property.property_location.state.name }},
          {{ property.property_location.country.name }}
        </p>
        <ul>
          <li><i class="fa fa-object-group"></i> {{ property.size }}</li>
          <li><i class="fa fa-bathtub"></i>{{ property.bedrooms }}</li>
          <li><i class="fa fa-bed"></i> {{ property.bedrooms }}</li>
          <li><i class="fa fa-automobile"></i> {{ property.garages }}</li>
        </ul>
        <slot />
        <NuxtLink
          :to="`/properties/${property.id}`"
          class="btn btn-sm btn-primary float-end my-1"
        >
          <i class="bi bi-card-list"></i>
          Property Details
        </NuxtLink>
      </div>
    </div>
    <!-- <div class="reserved" v-if="property.is_open == 0">
      <span
        class="badge rounded-pill bg-primary p-2"
        style="background: #708090 !important"
        >Reversed</span
      >
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["property"],
};
</script>

<style></style>

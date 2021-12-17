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
        <!-- fa fa-heart -->
        <div class="d-flex float-end">
          <a
            href="javascript:void(0);"
            class="like-btn"
            style="margin-right: 4px"
            v-if="this.$cookies.get('user')"
            @click="likeToggle"
          >
            <i :class="['fa', currentUserLike ? 'fa-heart' : 'fa-heart-o']"></i>
          </a>
          <i
            class="fa fa-heart-o like-btn"
            v-else-if="property.likes_count > 0"
            style="margin-right: 4px"
          ></i>
          <span v-if="property.likes_count > 0">
            {{ property.likes_count }}
          </span>
        </div>
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
  </div>
</template>

<script>
import { Notify } from "notiflix";
export default {
  props: ["property"],
  computed: {
    currentUserLike() {
      const currentUser = this.property.likes.filter(
        (like) => like.user_id == this.$cookies.get("user").id
      );
      return currentUser.length > 0 ? true : false;
    },
  },
  methods: {
    async likeToggle() {
      await this.$axios
        .post("/liketoggle", {
          property_id: this.property.id,
          user_id: this.$cookies.get("user").id,
        })
        .then((res) => {
           console.log(res.data);
        })
        .catch((e) => Notify.failure("server error please try again!"));
    },
  },
};
</script>

<style scoped>
.like-btn,
.like-btn:hover {
  color: #00c89e;
}
</style>

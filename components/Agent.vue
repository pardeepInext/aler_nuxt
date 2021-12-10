<template>
  <div class="col-lg-4 col-md-6">
    <div class="as-item">
      <div class="as-pic">
        <img :src="agent.image" alt="" />
        <div class="rating-point">4.5</div>
      </div>
      <div class="as-text">
        <div class="at-title">
          <h6>{{ agent.name }}</h6>
          <div class="rating-star">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </div>
        </div>
        <ul>
          <li>
            Property <span>{{ agent.properties_count }}</span>
          </li>
          <li>
            Email <span>{{ agent.email }}</span>
          </li>
          <li>Phone <span>123-455-688</span></li>
        </ul>
        <NuxtLink :to="`agents/${agent.id}`" class="primary-btn"
          >View profile</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["agent"],
};
</script>

<style></style>

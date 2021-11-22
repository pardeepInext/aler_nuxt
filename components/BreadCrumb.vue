<template>
  <section
    class="breadcrumb-section spad set-bg"
    data-setbg="img/breadcrumb-bg.jpg"
    :style="{
      backgroundImage: `url('img/breadcrumb/${this.image || 'deafult.jpg'}')`,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text">
            <h4>{{ name }}</h4>
            <div class="bt-option">
              <Nuxt-Link to="/"><i class="fa fa-home"></i> Home</Nuxt-Link>
              <span class="text-capitalize">{{ name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["name", "image"],
};
</script>

<style></style>

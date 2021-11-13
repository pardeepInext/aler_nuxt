<template>
  <section
    class="blog-hero-section set-bg"
    id="home-bg"
    :style="{ backgroundImage: `url('img/blog/bh-bg.jpg')` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="bh-text" style="width: 64%">
            <h4>Search Property</h4>
            <div class="input-group mb-3">
              <input
                type="search"
                class="form-control"
                placeholder="Type your location"
                list="locations"
                autocomplete="off"
              />
              <button
                class="btn btn-primary"
                type="button"
                id="button-addon2"
                style="background: #00c89e; border: 1px solid #00c89d"
              >
                <i class="bi bi-search"></i>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

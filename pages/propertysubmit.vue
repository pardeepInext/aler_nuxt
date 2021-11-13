<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" />
    <section class="property-submit-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- <div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
              v-if="submitSuccess"
            >
              <div>
                <i class="bi bi-check-circle-fill"></i>
                Property Submit Succesfully
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div> -->
            <div class="property-submit-form">
              <form @submit.prevent="addProperty" ref="submitForm">
                <div class="pf-title">
                  <h4>Title</h4>
                  <input type="text" placeholder="Your Title*" name="title" />
                  <!-- <span class="text-danger" v-if="submitError">{{
                    submitError.title[0]
                  }}</span> -->
                </div>
                <div class="pf-location">
                  <h4>Property Location</h4>
                  <div class="location-inputs">
                    <input
                      type="text"
                      placeholder="Address"
                      autocomplete="off"
                    />
                    <input
                      type="search"
                      list="countries"
                      placeholder="country"
                      autocomplete="off"
                      autofill="off"
                    />
                    <!-- <span class="text-danger">
                      Please type valid country name
                    </span> -->
                    <input
                      type="search"
                      placeholder="state"
                      list="states"
                      autocomplete="off"
                    />
                    <!-- <span class="text-danger" v-if="locationErr.state">
                      Please type valid state name
                    </span> -->
                    <input
                      type="search"
                      placeholder="city"
                      list="cities"
                      autocomplete="off"
                    />
                    <!-- <span class="text-danger" v-if="locationErr.city">
                      Please type valid city name
                    </span> -->
                    <!-- <datalist id="cities">
                      <option
                        v-for="city in cities"
                        :data-value="city.id"
                        :key="city.id"
                        :value="city.name"
                      />
                    </datalist> -->

                    <input
                      type="text"
                      placeholder="Posta Code / Zip"
                      tocomplete="off"
                    />
                  </div>
                </div>
                <div class="pf-type">
                  <h4>Property type</h4>
                  <div class="type-item">
                    <label
                      :for="propertyType"
                      v-for="(propertyType, index) in propertyTypes"
                      :key="index"
                      class="text-capitalize"
                    >
                      <!-- to change property type in Titlecase -->
                      {{ propertyType }}
                      <input
                        type="radio"
                        :id="propertyType"
                        name="type"
                        :value="propertyType"
                      />
                      <span class="checkbox"></span>
                    </label>
                  </div>
                  <!-- <span class="text-danger" v-if="submitError">{{
                    submitError.type[0]
                  }}</span> -->
                </div>
                <div class="pf-status">
                  <h4>Property status</h4>
                  <div class="status-item">
                    <label
                      v-for="(propertyStatus, index) in propertyStatus"
                      :for="propertyStatus"
                      :key="index"
                      >For {{ propertyStatus }}
                      <input
                        type="radio"
                        :id="propertyStatus"
                        name="status"
                        :value="propertyStatus"
                      />
                      <span class="checkbox"></span>
                    </label>
                  </div>
                  <!-- <span class="text-danger" v-if="submitError">{{
                    submitError.status[0]
                  }}</span> -->
                </div>
                <div class="pf-feature-price">
                  <h4>Featured Price</h4>
                  <div class="fp-inputs">
                    <input type="text" placeholder="Price" name="price" />
                  </div>
                  <!-- <span class="text-danger" v-if="submitError">{{
                    submitError.price[0]
                  }}</span> -->
                </div>
                <div class="pf-feature">
                  <h4>Property Features</h4>
                  <div class="features-list">
                    <div
                      class="feature-item"
                      v-for="(propertyFeature, index) in propertyFeatures"
                      :key="index"
                    >
                      <label
                        :for="feature"
                        v-for="(feature, index) in propertyFeature"
                        :key="index"
                        >{{ feature }}
                        <input
                          type="checkbox"
                          :id="feature"
                          name="feature[]"
                          :value="feature"
                        />
                        <span class="checkbox"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="pf-feature-image">
                  <h4>Featured Image</h4>
                  <div class="row">
                    <div class="col-lg-2">
                      <label
                        class="site-btn"
                        for="image-input"
                        style="cursor: pointer"
                        >Add Image</label
                      >
                      <input
                        type="file"
                        class="d-none"
                        name="image[]"
                        id="image-input"
                        multiple
                        accept="image/*"
                        @change="addImage"
                      />
                    </div>
                    <div class="col-lg-10">
                      <div class="row">
                        <img
                          class="img-fluid col-lg-3 py-2"
                          v-for="(imagePreview, index) in imagePreviews"
                          :src="imagePreview"
                          :key="index"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pf-property-details">
                  <h4>Property details</h4>
                  <div class="property-details-inputs">
                    <input
                      type="text"
                      placeholder="Property ID"
                      name="property_id"
                    />
                    <input
                      type="text"
                      placeholder="Area Size ( Only digits )"
                      name="size"
                    />
                    <!-- <span class="text-danger" v-if="submitError">{{
                      submitError.size[0]
                    }}</span> -->
                    <input
                      type="text"
                      placeholder="Size Prefix"
                      name="prefix"
                    />
                    <input type="text" placeholder="Bedrooms" name="bedrooms" />
                    <input
                      type="text"
                      placeholder="Bathrooms"
                      name="bathrooms"
                    />
                    <!-- <span class="text-danger" v-if="submitError">{{
                      submitError.bathrooms[0]
                    }}</span> -->
                    <input type="text" placeholder="Garages" name="garages" />
                    <!-- <span class="text-danger" v-if="submitError">{{
                      submitError.garages[0]
                    }}</span> -->
                    <input
                      type="text"
                      placeholder="Year Built"
                      name="year_built"
                    />
                    <!-- <span class="text-danger" v-if="submitError">{{
                      submitError.year_built[0]
                    }}</span> -->
                    <input
                      type="text"
                      name="tour_url"
                      placeholder="Virtual Tour Video URL"
                    />
                  </div>
                  <button type="submit" class="site-btn">
                    Submit Property
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <!-- <span class="text-danger" v-if="formSubmitError"
                    >Please fill all information</span
                  > -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "Aler | Submit",
    };
  },
  data() {
    return {
      imagePreviews: [],
    };
  },
  computed: {
    ...mapState(["propertyStatus", "propertyFeatures", "propertyTypes"]),
  },
  methods: {
    addProperty() {
      console.log("hello");
    },
    addImage(e) {
      const previews = [];
      this.imagePreviews = [];
      
      Array.from(e.target.files).map((file) => {
        const reader = new FileReader();
        reader.onload = (e) => previews.push(reader.result);
        reader.readAsDataURL(file);
      });

      this.imagePreviews = previews;
    },
  },
};
</script>

<style></style>

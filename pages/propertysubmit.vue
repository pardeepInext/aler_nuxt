<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" image="submit-property.jpg" />
    <section class="property-submit-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="property-submit-form">
              <form @submit.prevent="addProperty(property)" ref="submitForm">
                <div class="pf-title">
                  <h4>Title</h4>
                  <input
                    type="text"
                    placeholder="Your Title*"
                    name="title"
                    v-model="property.title"
                  />
                  <!-- <span class="text-danger" v-if="submitError">{{
                    submitError.title[0]
                  }}</span> -->
                </div>
                <div class="pf-location">
                  <h4>Property Location</h4>
                  <div class="row">
                    <div class="col-md-6 col-sm my-1">
                      <input
                        type="text"
                        placeholder="Address"
                        autocomplete="off"
                        class="form-control"
                        v-model="property.location.address"
                      />
                    </div>
                    <div class="col-md-6 col-sm my-1">
                      <select
                        id="country"
                        class="form-control"
                        v-model="property.location.country_id"
                      ></select>
                      <!-- <span class="text-danger">
                      Please type valid country name
                    </span> -->
                    </div>
                    <div class="col-md-6 col-sm my-1">
                      <select
                        class="form-control"
                        id="state"
                        v-model="property.location.state_id"
                      ></select>
                      <!-- <span class="text-danger" v-if="locationErr.state">
                      Please type valid state name
                    </span> -->
                    </div>
                    <div class="col-md-6 col-sm my-1">
                      <select
                        class="form-control"
                        id="city"
                        v-model="property.location.city_id"
                      ></select>
                    </div>
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
                        v-model="property.type"
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
                        v-model="property.status"
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
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      v-model="property.price"
                    />
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
                          v-model="property.featured"
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
                      placeholder="Area Size ( Only digits )"
                      name="size"
                      v-model="property.size"
                    />
                    <!-- <span class="text-danger" v-if="submitError">{{
                      submitError.size[0]
                    }}</span> -->
                    <input type="text" placeholder="Bedrooms" name="bedrooms" />
                    <input
                      type="text"
                      placeholder="Bathrooms"
                      name="bathrooms"
                      v-model="property.bathroom"
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
                      v-model="property.year"
                    />
                    <!-- <span class="text-danger" v-if="submitError">{{
                      submitError.year_built[0]
                    }}</span> -->
                    <input
                      type="text"
                      name="tour_url"
                      placeholder="Virtual Tour Video URL"
                      v-model="property.video_url"
                    />
                  </div>
                  <button type="submit" class="site-btn" :disabled="isAdding">
                    Submit Property
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                      v-if="isAdding"
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
import { mapState, mapActions } from "vuex";
import TomSelect from "tom-select";
import "tom-select/dist/css/tom-select.bootstrap5.min.css";

export default {
  loading:false,
  head() {
    return {
      title: "Aler | Submit",
    };
  },
  data() {
    return {
      imagePreviews: [],
      property: {
        title: "",
        location: {
          address: "",
          country_id: "",
          state_id: "",
          city_id: "",
        },
        type: "",
        status: "",
        price: "",
        featured: [],
        images: {},
        property_id: "",
        size: "",
        bathroom: "",
        bedroom: "",
        garage: "",
        year: "",
        video_url: "",
      },
    };
  },
  async asyncData({ params, $axios }) {
    return {};
  },
  computed: {
    ...mapState(["propertyStatus", "propertyFeatures", "propertyTypes"]),
    ...mapState("property", ["isAdding"]),
  },
  methods: {
    ...mapActions("property", ["countrySelect", "addProperty"]),
    addImage(e) {
      const previews = [];
      this.imagePreviews = [];
      this.property.image = [];
      Array.from(e.target.files).map((file) => {
        const reader = new FileReader();
        reader.onload = (e) => previews.push(reader.result);
        reader.readAsDataURL(file);
      });

      this.imagePreviews = previews;
      this.property.image = e.target.files;
    },
  },
  mounted() {
    let _this = this;
    _this.countrySelect();
    new TomSelect("#state", {
      valueField: "id",
      labelField: "name",
      searchField: "name",
      closeAfterSelect: true,
      placeholder: "Select State",
      load: async function (query, callback) {
        const response = await _this.$axios.get(`states`, {
          params: {
            country_id: _this.property.location.country_id,
            name: query,
          },
        });
        callback(response.data);
      },
    });

    new TomSelect("#city", {
      valueField: "id",
      labelField: "name",
      searchField: "name",
      closeAfterSelect: true,
      placeholder: "Select City",
      load: async function (query, callback) {
        console.log(_this.property.location.state_id);
        const response = await _this.$axios.get(`cities`, {
          params: {
            state_id: _this.property.location.state_id,
            name: query,
          },
        });
        callback(response.data);
      },
    });
  },
};
</script>

<style scoped>
input:focus,
button:focus,
button:active,
select:focus,
.form-control:focus .ts-control input:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
  border: 1px solid #00c89d;
}
</style>

<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" image="property.jpg" />
    <section class="search-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="section-title">
              <h4>Where would you rather live?</h4>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="change-btn">
              <div class="cb-item" v-for="cbItem in cbItems" :key="cbItem">
                <label
                  :for="`cb-${cbItem}`"
                  :class="propertyFetch.status == cbItem ? 'active' : ''"
                >
                  For {{ cbItem }}
                  <input
                    type="radio"
                    :id="`cb-${cbItem}`"
                    v-model="propertyFetch.status"
                    :value="cbItem"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <select
              name=""
              id=""
              class="form-control float-end text-capitalize"
              style="width: 30%"
              v-model="propertyFetch.type"
            >
              <option value="">--Select Property Type--</option>
              <option
                :value="propertyType"
                v-for="propertyType in propertyTypes"
                :key="propertyType"
                class="text-capitalize"
              >
                {{ propertyType }}
              </option>
            </select>
          </div>
        </div>
        <div class="search-form-content">
          <form class="filter-form">
            <div class="number-wrap my-2">
              <div class="quantity">
                <input
                  type="number"
                  step="1"
                  placeholder="No Of Bedrooms"
                  class="sm-width filter-input"
                  v-model="propertyFetch.bedroom"
                />
                <div class="quantity-nav">
                  <div
                    class="quantity-button quantity-up"
                    @click="
                      propertyFetch.bedroom = Number(propertyFetch.bedroom) + 1
                    "
                  >
                    +
                  </div>
                  <div
                    class="quantity-button quantity-down"
                    @click="
                      propertyFetch.bedroom =
                        propertyFetch.bedroom > 1
                          ? Number(propertyFetch.bedroom) - 1
                          : propertyFetch.bedroom
                    "
                  >
                    -
                  </div>
                </div>
              </div>
              <div class="quantity">
                <input
                  type="number"
                  step="1"
                  v-model="propertyFetch.bathroom"
                  placeholder="No Of Bathroom"
                  class="sm-width filter-input ms-2"
                />
                <div class="quantity-nav">
                  <div
                    class="quantity-button quantity-up"
                    @click="
                      propertyFetch.bathroom =
                        Number(propertyFetch.bathroom) + 1
                    "
                  >
                    +
                  </div>
                  <div
                    class="quantity-button quantity-down"
                    @click="
                      propertyFetch.bathroom =
                        propertyFetch.bathroom > 1
                          ? Number(propertyFetch.bathroom) - 1
                          : propertyFetch.bathroom
                    "
                  >
                    -
                  </div>
                </div>
              </div>
              <div class="quantity">
                <input
                  type="number"
                  step="1"
                  v-model="propertyFetch.garage"
                  placeholder="No Of Garage"
                  class="sm-width filter-input ms-2"
                  id="garage"
                />
                <div class="quantity-nav">
                  <div
                    class="quantity-button quantity-up"
                    @click="
                      propertyFetch.garage = Number(propertyFetch.garage) + 1
                    "
                  >
                    +
                  </div>
                  <div
                    class="quantity-button quantity-down"
                    @click="
                      propertyFetch.garage > 1
                        ? (propertyFetch.garage =
                            Number(propertyFetch.garage) - 1)
                        : propertyFetch.garage
                    "
                  >
                    -
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="search-btn sm-width"
                @click="applyfilter"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="property-section spad">
      <div class="container" id="property-list">
        <div v-if="properties.data.length > 0" class="row">
          <property
            v-for="property in properties.data"
            :key="property.id"
            :property="property"
          >
            <div class="pi-agent">
              <div class="pa-item">
                <div class="pa-info">
                  <img :src="property.user.image" alt="" />
                  <h6>{{ property.user.name }}</h6>
                </div>
                <div class="float-end">
                  <button type="button" class="btn btn-sm btn-primary">
                    <i class="fas fa-comment-dots"></i>
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </property>
        </div>
        <div v-else class="row section-title">
          <h4>No Property Available</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { Block } from "notiflix";
import Property from "../../components/Property";

export default {
  head() {
    return {
      title: "Aler | Properties",
    };
  },
  async asyncData({ $axios, store }) {
    const { data } = await $axios.get("properties");
    store.commit("property/Fetching_Properties", data);
  },
  components: {
    Property,
  },
  data() {
    return {
      cbItems: ["rent", "sale"],
      propertyFetch: {
        page: 1,
        status: "sale",
        type: "",
        bedroom: "",
        bathroom: "",
        garage: "",
        type: "",
      },
    };
  },
  computed: {
    ...mapState(["propertyFeatures", "propertyTypes"]),
    ...mapState("property", ["properties", "isPropertyFetched"]),
  },
  methods: {
    ...mapActions("property", ["fetchProperty"]),
    applyfilter() {
      this.fetchProperty(this.propertyFetch);
    },
  },
  mounted() {},
};
</script>

<style scopped>
.loadmore-btn button {
  display: inline-block;
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 30px;
  background: #103230;
  border: none;
}
.loadmore-btn button:hover,
.loadmore-btn button:active {
  background: #1b5451;
}
.filter-input {
  clear: none;
  margin-right: 20px;
  height: 46px;
  background: #ffffff;
  border-radius: 0;
  border: 1px solid #e1e1e1;
  line-height: 43px;
  margin-bottom: 20px;
}
.quantity {
  position: relative;
  margin-right: 20px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.quantity input {
  width: 45px;
  height: 42px;
  line-height: 1.65;
  float: left;
  display: block;
  padding: 0;
  margin: 0;
  padding-left: 20px;
  border: 1px solid #eee;
}

.quantity input:focus {
  outline: 0;
}

.quantity-nav {
  float: left;
  position: relative;
  height: 42px;
}

.quantity-button {
  position: relative;
  cursor: pointer;
  border-left: 1px solid #eee;
  width: 20px;
  text-align: center;
  color: #333;
  font-size: 13px;
  font-family: "Trebuchet MS", Helvetica, sans-serif !important;
  line-height: 1.7;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.quantity-button.quantity-up {
  position: absolute;
  height: 50%;
  top: 0;
  border-bottom: 1px solid #eee;
}

.quantity-button.quantity-down {
  position: absolute;
  bottom: -1px;
  height: 50%;
}

#garage {
  margin-bottom: 7px;
}
</style>

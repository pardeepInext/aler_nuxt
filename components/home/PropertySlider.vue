<template>
  <section class="hero-section">
    <hooper :settings="hooperSettings" style="height: 780px">
      <slide v-for="(property, index) in properties" :key="index">
        <div style="padding: 0 5%">
          <div
            class="hs-item set-bg"
            :style="{ backgroundImage: `url('img/hero/hero-${index}.jpg')` }"
          >
            <div class="row">
              <div class="col-lg-12">
                <NuxtLink
                  :to="`/properties/${property.id}`"
                >
                  <div class="hc-inner-text">
                    <div class="hc-text">
                      <h4>{{ property.title }}</h4>
                      <p class="text-capitalize">
                        <span class="icon_pin_alt"></span>
                        {{ property.property_location.address }},
                        {{ property.property_location.city.name }},
                        {{ property.property_location.state.name }},
                        {{ property.property_location.country.name }}
                      </p>
                      <div class="label">For {{ property.status }}</div>
                      <h5>
                        $ {{ property.price
                        }}<span v-if="property.status == 'rent'">/month</span>
                      </h5>
                    </div>
                    <div class="hc-widget">
                      <ul>
                        <li>
                          <i class="fa fa-object-group"></i> {{ property.size }}
                        </li>
                        <li>
                          <i class="fa fa-bathtub"></i> {{ property.bathroom }}
                        </li>
                        <li>
                          <i class="fa fa-bed"></i> {{ property.bedrooms }}
                        </li>
                        <li>
                          <i class="fa fa-automobile"></i>
                          {{ property.garages }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons" />
    </hooper>
  </section>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: { Hooper, Slide, HooperNavigation },
  props: ["properties"],
  data() {
    return {
      hooperSettings: {
        itemsToShow: "1.25",
        centerMode: "true",
        // autoPlay: true,
        // playSpeed: "2000",
        infiniteScroll: true,
        wheelControl: false,
      },
      slideImages: ["hero-1.jpg", "hero-2.jpg", "hero-3.jpg"],
    };
  },
};
</script>

<style scopped>
.hooper-slide.is-current {
  transform: scale(1.2);
}

.is-current .hc-inner-text {
  opacity: 1;
}

.hooper-prev,
.hooper-next {
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 50px;
  width: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  /* text-align: center;
  font-size: 30px; */
}
</style>

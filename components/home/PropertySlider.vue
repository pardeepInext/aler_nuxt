<template>
  <section class="hero-section">
    <hooper :settings="hooperSettings" style="height: 780px">
      <slide
        v-for="(image, index) in slideImages"
        :key="index"
        @update="() => console.log('fdsafds')"
      >
        <div style="padding: 0 5%">
          <div
            class="hs-item set-bg"
            :style="{ backgroundImage: `url('img/hero/${image}')` }"
          >
            <div class="row">
              <div class="col-lg-12">
                <div class="hc-inner-text">
                  <div class="hc-text">
                    <h4>Balaji Symphony</h4>
                    <p>
                      <span class="icon_pin_alt"></span> Panvel, Navi Mumbai
                    </p>
                    <div class="label">For Rent</div>
                    <h5>$ 65.0<span>/month</span></h5>
                  </div>
                  <div class="hc-widget">
                    <ul>
                      <li><i class="fa fa-object-group"></i> 2, 283</li>
                      <li><i class="fa fa-bathtub"></i> 03</li>
                      <li><i class="fa fa-bed"></i> 05</li>
                      <li><i class="fa fa-automobile"></i> 01</li>
                    </ul>
                  </div>
                </div>
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

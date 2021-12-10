<template>
  <div>
    <search-banner />
    <section class="categories-section">
      <div class="cs-item-list">
        <property-count
          v-for="(counter, index) in data.count"
          :key="index"
          :propertyCount="counter"
        />
      </div>
    </section>
    <property-slider :properties="data.properties" />
    <agent-listing />
    <why-choo-us />
  </div>
</template>

<script>
import PropertyCount from "../components/home/PropertyCount";
import SearchBanner from "../components/home/SearchBanner.vue";
import PropertySlider from "../components/home/PropertySlider";
import WhyChoosUs from "../components/home/WhyChooUs";
import WhyChooUs from "../components/home/WhyChooUs.vue";
import AgentListing from "../components/home/AgentListing";
export default {
  components: {
    PropertyCount,
    SearchBanner,
    PropertySlider,
    WhyChoosUs,
    WhyChooUs,
    AgentListing,
  },
  head() {
    return {
      title: "Aler | Home",
    };
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get("home");
    return { data };
  },
  data() {
    return {
      counters: [
        {
          img: "cat-1.jpg",
          count: 45,
          type: "appartment",
        },
        {
          img: "cat-2.jpg",
          count: 445,
          type: "villa",
        },
        {
          img: "cat-3.jpg",
          count: 68,
          type: "house",
        },
        {
          img: "cat-4.jpg",
          count: 895,
          type: "office",
        },
        {
          img: "cat-5.jpg",
          count: 468,
          type: "RESTAURENT",
        },
      ],
    };
  },
  computed: {},
};
</script>
<style>
input:focus,
button:focus,
button:active {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
  border: 1px solid #00c89d;
}
</style>

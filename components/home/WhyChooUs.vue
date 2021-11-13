<template>
  <section
    class="chooseus-section spad set-bg"
    data-setbg="img/chooseus/chooseus-bg.jpg"
    style="background-image: url('img/chooseus/chooseus-bg.jpg')"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="chooseus-text">
            <div class="section-title">
              <h4>Why choose us</h4>
            </div>
            <p>
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="chooseus-features">
            <div
              class="cf-item"
              v-for="(feature, index) in features"
              :key="index"
            >
              <div class="cf-pic">
                <img :src="`img/chooseus/${feature.img}`" alt="" />
              </div>
              <div class="cf-text">
                <h5>{{ feature.heading }}</h5>
                <p>
                  {{ feature.discription }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          heading: "Find your future home",
          discription:
            "We help you find a new home by offering a smart real estate.",
          img: "chooseus-icon-1.png",
        },
        {
          heading: "Buy or rent homes",
          discription:
            "Millions of houses and apartments in your favourite cities",
          img: "chooseus-icon-2.png",
        },
        {
          heading: "Experienced agents",
          discription: "Find an agent who knows your market best",
          img: "chooseus-icon-3.png",
        },
        {
          heading: "List your own property",
          discription: "Sign up now and sell or rent your own properties",
          img: "chooseus-icon-4.png",
        },
      ],
    };
  },
};
</script>

<style></style>

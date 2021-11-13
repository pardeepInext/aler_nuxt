<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" />
    <section class="contact-form-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cf-content">
              <div class="cc-title">
                <h4>Contact form</h4>
                <p>
                  Duis voluptatum. Id vis consequat consetetur dissentiet,
                  ceteros commune perp <br />etua mei et. Simul viderer
                  facilisis egimus tractatos splendi.
                </p>
              </div>
              <form action="#" class="cc-form">
                <div class="group-input">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Website" />
                </div>
                <textarea placeholder="Comment"></textarea>
                <button type="submit" class="site-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <contact-info />
  </div>
</template>

<script>
import ContactInfo from "../components/contact/ContactInfo";
export default {
  components: { ContactInfo },
  head() {
    return {
      title: "Aler | Contact",
    };
  },
  computed: {},
};
</script>

<style></style>

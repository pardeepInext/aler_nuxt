<template>
  <div>
    <BreadCrumb :name="$nuxt.$route.name" image="contact.jpg" />
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
              <form @submit.prevent="contactUs" class="cc-form">
                <div class="group-input">
                  <input
                    type="text"
                    placeholder="Name"
                    v-model="contactData.name"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    v-model="contactData.email"
                  />
                </div>
                <textarea
                  placeholder="Comment"
                  v-model="contactData.message"
                ></textarea>
                <button
                  type="submit"
                  class="site-btn"
                  :disabled="isMessageSent"
                >
                  <i
                    class="fa fa-spinner fa-spin"
                    aria-hidden="true"
                    v-if="isMessageSent"
                  ></i>
                  Submit
                </button>
              </form>
            </div>
            <ol>
              <li
                class="text-danger"
                v-for="(error, index) in errors"
                :key="index"
              >
                {{ error[0] }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <contact-info />
  </div>
</template>

<script>
import ContactInfo from "../components/contact/ContactInfo";
import { Block, Notify } from "notiflix";
export default {
  components: { ContactInfo },
  head() {
    return {
      title: "Aler | Contact",
    };
  },
  scrollToTop: true,
  data() {
    return {
      contactData: {
        message: "",
        name: "",
        email: "",
      },
      errors: {},
      isMessageSent: false,
    };
  },
  methods: {
    async contactUs() {
      this.isMessageSent = true;

      await this.$axios
        .post("/contactmessage", this.contactData)
        .then((res) => {
          this.isMessageSent = false;
          if (res.data.success) {
            this.$router.push("/");
            Notify.success("message has been delevered!");
          } else this.errors = res.data.errors;
        })
        .catch((err) => {
          this.isMessageSent = false;
        });
    },
  },
  computed: {},
};
</script>

<style></style>

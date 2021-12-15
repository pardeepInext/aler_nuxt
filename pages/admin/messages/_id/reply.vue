<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card-style mb-30">
        <h2 class="mb-25">Reply</h2>
        <div class="input-style-3">
          <textarea
            placeholder="Reply..."
            rows="5"
            v-model="message"
          ></textarea>
          <span class="icon"><i class="lni lni-text-format"></i></span>
        </div>
        <button
          type="button"
          class="main-btn primary-btn rounded-full btn-hover btn-sm"
          :disabled="isMessageSend"
          @click="sendMessage({ id: $route.params.id, message: message })"
        >
          Reply Message
          <i class="fa fa-spin fa-spinner" v-if="isMessageSend"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  head() {
    return {
      title: "Reply",
    };
  },
  data() {
    return {
      message: "",
    };
  },
  computed: {
    ...mapState("contact_message", ["isMessageSend"]),
  },
  methods: {
    ...mapActions("contact_message", ["sendMessage"]),
  },
  layout: "admin",
};
</script>

<style></style>

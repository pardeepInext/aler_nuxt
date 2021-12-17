<template>
  <div class="tables-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-style mb-30">
          <div class="row">
            <div
              class="table-wrapper table-responsive"
              id="property-list-admin"
            >
              <table class="table">
                <thead>
                  <tr>
                    <th><h6>Name</h6></th>
                    <th><h6>Email</h6></th>
                    <th><h6>Message</h6></th>
                    <th><h6>Status</h6></th>
                    <th><h6>Action</h6></th>
                  </tr>
                </thead>
                <tbody
                  v-if="messages.hasOwnProperty('data') && messages.data.length > 0"
                >
                  <tr v-for="message in messages.data" :key="message.id">
                    <td class="min-width">
                      <p>{{ message.name }}</p>
                    </td>
                    <td class="min-width">
                      <p>
                        <a href="#0">{{ message.email }}</a>
                      </p>
                    </td>
                    <td class="min-width">
                      <p :title="message.message">
                        {{
                          message.message.length > 20
                            ? `${message.message.substring(0, 50)}...`
                            : message.message
                        }}
                      </p>
                    </td>
                    <td class="min-width">
                      <span
                        :class="[
                          'status-btn',
                          message.is_resolved ? 'success-btn' : `active-btn`,
                        ]"
                      >
                        {{ message.is_resolved ? "Resolved" : `Pending ` }}
                      </span>
                    </td>
                    <td>
                      <div class="action" v-if="!message.is_resolved">
                        <NuxtLink :to="`/admin/messages/${message.id}/reply`">
                          <i class="mdi mdi-message-reply-outline"></i>
                        </NuxtLink>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td class="min-width text-center" colspan="5">
                      No messages available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  head() {
    return {
      title: "Message",
    };
  },
  data() {
    return {
      message: "",
    };
  },
  layout: "admin",
  async asyncData({ $axios, store }) {
    const { data } = await $axios.get(`messages`);
    store.commit("contact_message/Messages", data);
  },
  computed: {
    ...mapState("contact_message", ["messages"]),
  },
  mounted() {
    // const modalInstance = Modal.getInstance(this.$refs.reply_modal);
    // console.log(bootstrap);
  },
};
</script>

<style></style>

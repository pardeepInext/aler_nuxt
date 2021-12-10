<template>
  <div>
    <div
      class="co-item"
      :class="typeof reply - item != 'undefined' && 'reply-item'"
    >
      <div class="ci-pic">
        <img :src="comment.user.image" alt="" />
      </div>
      <div class="ci-text">
        <h5>{{ comment.user.name }}</h5>
        <p>
          {{ comment.comment }}
        </p>
        <ul>
          <li>
            <i class="fa fa-clock-o"></i> {{ dateFormater(comment.created_at) }}
          </li>
          <li v-if="comment.hasOwnProperty('child_comment')">
            <i class="fa fa-share-square-o"></i>
            {{ comment.child_comment.length }}
          </li>
        </ul>
      </div>
      <comment
        v-for="comment in comment.child_comment"
        :key="comment.id"
        :comment="comment"
        replyClass="reply-item"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["comment", "reply-item"],
  computed: {
    ...mapState(["months"]),
  },
  methods: {
    dateFormater(dateString) {
      const date = new Date(dateString);
      return `${
        this.months[date.getMonth()]
      } ${date.getDay()} ${date.getFullYear()}`;
    },
  },
};
</script>

<style></style>

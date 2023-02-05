<script>
import axios from 'axios';
export default {
  data() {
    return {
      count: 0,
      duration: 50,
      interval: null,
      max: 0
    }
  },
  props: {
    maxCount: String
  },
  methods: {
    startCounting() {
      this.interval = setInterval(() => {
        this.count += 1;
        if (this.count >= this.max) {
          clearInterval(this.interval);
        }
      }, this.duration);
    }
  },
  async created() {
    if(isNaN(this.maxCount)) {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCJ__uqwbtRxzMBydl_ZzE4g&key=AIzaSyD-XLw7a339E-zmxht0yVKCcu-zjp69cvs`
      );
      const subscriberCount = response.data.items[0].statistics.subscriberCount;
      this.max = subscriberCount;
    }else {
      this.max = parseInt(this.maxCount);
    }
    this.startCounting();
  }
}
</script>

<template>
  <a>{{ count }}</a>
</template>

<style scoped>
</style>

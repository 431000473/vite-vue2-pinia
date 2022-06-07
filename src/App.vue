<template>
  <div>
    Hello Vite Vue2{{ name }}
    <br />
    <input type="text" v-model="text" />
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import useStore from '@/store/index'
export default {
  data() {
    return {
      text: 'abcasc'
    }
  },
  computed: {
    ...mapState(useStore, ['name'])
  },
  watch: {
    text(newVal) {
      this.changeName(newVal)
    }
  },
  mounted() {},
  methods: {
    ...mapActions(useStore, ['changeName'])
  }
}
</script>

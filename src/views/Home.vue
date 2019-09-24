<template>
  <div class="home">
    <ToDo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDo from '@/components/ToDo.ts';

@Component({
  components: {
    ToDo,
  },
})
export default class Home extends Vue {}
</script>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello World" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { testSysUserLogin } from '../api/getData';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private mounted(): void {
    testSysUserLogin({ name: '大桥' })
      .then((res: any) => {
        alert(res);
      })
      .catch(err => {
        alert(err);
      });
  }
}
</script>

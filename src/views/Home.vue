<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Button, Container, Flexbox, Toast } from "..";

const text: Ref<any> = ref(null);

const copied: Ref<boolean> = ref(false);

function onClick() {
  navigator.clipboard.writeText(text.value.textContent);
  copied.value = true;

  setTimeout(function () {
    copied.value = false;
  }, 3000);
}

const redirect: Ref<boolean> = ref(true);
</script>

<template>
  <div id="home">
    <Container>
      <h2 class="title">ta querendo acessar o readme?</h2>
      <Flexbox justify="center">
        <Button label="sim" variant="primary" :to="{ name: 'readme' }" />
        <Button label="não" variant="primary" @click="redirect = false" />
      </Flexbox>
      <div class="helper" v-show="!redirect">
        <strong ref="text"> yarn storybook </strong>
        <Button icon="content_copy" var="primary" @click="onClick" />
      </div>
      <Toast variant="info" v-show="copied">copiado</Toast>
      <Flexbox align="center" justify="center">
        <Button
          icon="dashboard"
          var="text-color"
          :to="{ name: 'playground' }"
        />
        playground
      </Flexbox>
    </Container>
  </div>
</template>

<style lang="scss">
#home {
  @keyframes slideDown {
    0% {
      transform: translateY(-200%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .container > *:not(:last-child) {
    margin-bottom: calc(var(--spacing) / 4);
  }

  .helper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: calc(var(--spacing) / 2);
    animation: slideDown 0.2s ease-in-out;

    .btn {
      animation: {
        name: fade;
        duration: 0.7s;
        timing-function: ease-out;
      }
    }

    div {
      position: relative;
    }

    small {
      position: absolute;
      display: flex;
      align-items: center;
      left: calc(100% + 1rem);
      top: 50%;
      transform: translateY(-50%);
      gap: 5px;
      opacity: 1;

      &.-hide {
        opacity: 0;
      }
    }
  }
}
</style>

<template>
  <div>
    <demo-doc>
      <template v-slot:default="slotProps">
        <von-button color="primary">Primary</von-button>
        <von-button color="secondary">Secondary</von-button>
        <von-button color="tertiary">Tertiary</von-button>
        <von-button color="success">Success</von-button>
        <von-button color="warning">Warning</von-button>
        <von-button color="danger">Danger</von-button>
        <von-button color="light">Light</von-button>
        <von-button color="medium">Medium</von-button>
        <von-button color="dark">Dark</von-button>

        <!-- Expand -->
        <von-button expand="full">Full Button</von-button>
        <von-button expand="block">Block Button</von-button>

        <!-- Round -->
        <von-button shape="round">Round Button</von-button>

        <!-- Fill -->
        <von-button expand="full" fill="outline">Outline + Full</von-button>
        <von-button expand="block" fill="outline">Outline + Block</von-button>
        <von-button shape="round" fill="outline">Outline + Round</von-button>

        <!-- Icons -->
        <!-- <von-button>
          <von-icon slot="start" name="star"></von-icon>
          Left Icon
        </von-button>

        <von-button>
          Right Icon
          <von-icon slot="end" name="star"></von-icon>
        </von-button>

        <von-button>
          <von-icon slot="icon-only" name="star"></von-icon>
        </von-button> -->

        <!-- Sizes -->
        <von-button size="large">Large</von-button>
        <von-button>Default</von-button>
        <von-button size="small">Small</von-button>
      </template>
      <template v-slot:code>
        <pre v-highlightjs><code class="html">{{code1}}</code></pre>
      </template>
    </demo-doc>
  </div>
</template>

<script>
import '../../../package/scss/ionic.bundle.scss'
import Button from '../../../package/components/button'

import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)
export default {
  data() {
    return {
      code1: `
       `
        .replace(/^\s*/gm, '')
        .trim()
    }
  },

  components: {
    'von-button': Button,
    'von-button-group': Button.Group
  }
}
</script>
<style>
.hljs-comment,
.hljs-quote {
  color: #d4d0ab;
}
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #ffa07a;
}
.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #f5ab35;
}
.hljs-attribute {
  color: #ffd700;
}
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #abe338;
}
.hljs-title,
.hljs-section {
  color: #00e0e0;
}
.hljs-keyword,
.hljs-selector-tag {
  color: #dcc6e0;
}
.hljs {
  display: block;
  overflow-x: auto;
  background: #2b2b2b;
  color: #f8f8f2;
  padding: 0.5em;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
@media screen and (-ms-high-contrast: active) {
  .hljs-addition,
  .hljs-attribute,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-bullet,
  .hljs-comment,
  .hljs-link,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-string,
  .hljs-symbol,
  .hljs-type,
  .hljs-quote {
    color: highlight;
  }
  .hljs-keyword,
  .hljs-selector-tag {
    font-weight: bold;
  }
}
</style>
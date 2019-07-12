<template>
  <div>
    <h3>基础用法</h3>
    <code-card>
      <s-button>default</s-button>
      <s-button type="primary">primary</s-button>
      <s-button type="success">success</s-button>
      <s-button type="info">info</s-button>
      <s-button type="warning">warning</s-button>
      <s-button type="danger">danger</s-button>
      <br>
      <br>
      <s-button round>圆角按钮</s-button>
      <s-button type="primary" round>圆角按钮</s-button>
      <s-button type="success" round>圆角按钮</s-button>
      <s-button type="info" round>圆角按钮</s-button>
      <s-button type="warning" round>圆角按钮</s-button>
      <s-button type="danger" round>圆角按钮</s-button>
      <br>
      <br>
      <s-button rectangle>直角按钮</s-button>
      <s-button type="primary" rectangle>直角按钮</s-button>
      <s-button type="success" rectangle>直角按钮</s-button>
      <s-button type="info" rectangle>直角按钮</s-button>
      <s-button type="warning" rectangle>直角按钮</s-button>
      <s-button type="danger" rectangle>直角按钮</s-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="html">{{code1}}</code></pre>
      </template>
    </code-card>
    <h3>禁用</h3>
    <code-card>
      <s-button type="primary" disabled>禁用</s-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="html">{{code2}}</code></pre>
      </template>
    </code-card>
    <h3>加载中</h3>
    <code-card>
      <s-button type="primary" loading>加载中</s-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="html">{{code3}}</code></pre>
      </template>
    </code-card>
    <h3>icon 按钮</h3>
    <code-card>
      <s-button icon="icon-send">发送</s-button>
      <s-button type="primary" icon="icon-send">发送</s-button>
      <s-button type="primary" circle icon="icon-send"></s-button>
      <s-button type="danger" circle icon="icon-star"></s-button>
      <s-button type="warning" size="mini" circle icon="icon-dingtalk"></s-button>
      <s-button type="info" size="small" circle icon="icon-dingtalk"></s-button>
      <s-button type="success" size="medium" circle icon="icon-dingtalk"></s-button>
      <s-button type="primary" size="large" circle icon="icon-dingtalk"></s-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="html">{{code4}}</code></pre>
      </template>
    </code-card>
    <h3>text 按钮</h3>
    <code-card>
      <s-button type="text">发送</s-button>
      <s-button type="text" primary>primary</s-button>
      <s-button type="text" success>success</s-button>
      <s-button type="text" info>info</s-button>
      <s-button type="text" warning>发warning送</s-button>
      <s-button type="text" danger>danger</s-button>
      <s-button type="text" icon="icon-share">分享</s-button>
      <template v-slot:code>
        <pre v-highlightjs><code class="html">{{code5}}</code></pre>
      </template>
    </code-card>
    <code-card>
      <s-button-group gap>
        <s-button>default</s-button>
        <s-button type="primary">primary</s-button>
        <s-button type="success">success</s-button>
        <s-button type="info">info</s-button>
        <s-button type="warning">warning</s-button>
        <s-button type="danger">danger</s-button>
      </s-button-group>
      <br>
      <br>
      <s-button-group round>
        <s-button>default</s-button>
        <s-button type="primary">primary</s-button>
        <s-button type="success">success</s-button>
        <s-button type="info">info</s-button>
        <s-button type="warning">warning</s-button>
        <s-button type="danger">danger</s-button>
      </s-button-group>

      <template v-slot:code>
        <pre v-highlightjs><code class="html">{{code6}}</code></pre>
      </template>
    </code-card>
  </div>
</template>

<script>
import Button from '../../../components/button'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

import '../../../components/style'

Vue.use(VueHighlightJS)
export default {
  data () {
    return {
      code1:`
      <s-button>default</s-button>
      <s-button type="primary">primary</s-button>
      <s-button type="success">success</s-button>
      <s-button type="info">info</s-button>
      <s-button type="warning">warning</s-button>
      <s-button type="danger">danger</s-button>

      <s-button type="primary" round>圆角按钮</s-button>
      <s-button type="success" round>圆角按钮</s-button>
      <s-button type="info" round>圆角按钮</s-button>
      <s-button type="warning" round>圆角按钮</s-button>
      <s-button type="danger" round>圆角按钮</s-button>

      <s-button rectangle>直角按钮</s-button>
      <s-button type="primary" rectangle>直角按钮</s-button>
      <s-button type="success" rectangle>直角按钮</s-button>
      <s-button type="info" rectangle>直角按钮</s-button>
      <s-button type="warning" rectangle>直角按钮</s-button>
      <s-button type="danger" rectangle>直角按钮</s-button>
       `.replace(/^\s*/gm, '').trim(),
       code2:`
      <s-button type="primary" disabled>禁用</s-button>
       `.replace(/^\s*/gm, '').trim(),
       code3:`
      <s-button loading>加载中</s-button>
       `.replace(/^\s*/gm, '').trim(),
       code4:`
      <s-button icon="icon-send">发送</s-button>
      <s-button type="primary" icon="icon-send">发送</s-button>
      <s-button type="primary" circle icon="icon-send"></s-button>
      <s-button type="danger" circle icon="icon-star"></s-button>
      <s-button type="warning" size="mini" circle icon="icon-dingtalk"></s-button>
      <s-button type="info" size="small" circle icon="icon-dingtalk"></s-button>
      <s-button type="success" size="medium" circle icon="icon-dingtalk"></s-button>
      <s-button type="primary" size="large" circle icon="icon-dingtalk"></s-button>
       `.replace(/^\s*/gm, '').trim(),
       code5:`
      <s-button type="text">发送</s-button>
      <s-button type="text" primary>primary</s-button>
      <s-button type="text" success>success</s-button>
      <s-button type="text" info>info</s-button>
      <s-button type="text" warning>发warning送</s-button>
      <s-button type="text" danger>danger</s-button>
      <s-button type="text" icon="icon-share">分享</s-button>
       `.replace(/^\s*/gm, '').trim(),
       code6:`
     <s-button-group gap>
        <s-button>default</s-button>
        <s-button type="primary">primary</s-button>
        <s-button type="success">success</s-button>
        <s-button type="info">info</s-button>
        <s-button type="warning">warning</s-button>
        <s-button type="danger">danger</s-button>
      </s-button-group>

      <s-button-group round>
        <s-button>default</s-button>
        <s-button type="primary">primary</s-button>
        <s-button type="success">success</s-button>
        <s-button type="info">info</s-button>
        <s-button type="warning">warning</s-button>
        <s-button type="danger">danger</s-button>
      </s-button-group>
    </code-card>
       `.replace(/^\s*/gm, '').trim(),
    }
  },

  components: {
    's-button': Button,
    's-button-group': Button.Group
  }
}

</script>
<style>
.hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#ffa07a}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5ab35}.hljs-attribute{color:#ffd700}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#abe338}.hljs-title,.hljs-section{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.hljs{display:block;overflow-x:auto;background:#2b2b2b;color:#f8f8f2;padding:.5em}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:bold}}
</style>
<template>
  <div>
    <div class="docs-demo">
      <div class="docs-demo-mode-toggle">
        <button :class="{'is-selected': mode == 'ios'}" title="Toggle iOS mode" @click="toggle('ios')">ios</button>
        <button :class="{'is-selected': mode == 'md'}" title="Toggle Android mode" @click="toggle('md')">md</button>
      </div>
      <div class="docs-demo-device ios">
        <figure>
          <svg class="docs-demo-device__md-bar" viewBox="0 0 1384.3 40.3">
            <path
              class="st0"
              d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"
            ></path>
            <circle class="st0" cx="1299" cy="20.2" r="20"></circle>
            <path
              class="st0"
              d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            ></path>
          </svg>
          <svg class="docs-demo-device__ios-notch" viewBox="0 0 219 31">
            <path
              d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <div class="demo" v-if="demoVisible">
            <slot v-bind:mode="mode"></slot>
          </div>
        </figure>
      </div>
    </div>
    <div @click="toggleCode" style="text-align: center;cursor: pointer;">{{msg}}</div>
    <div v-if="codeVisible"><slot name="code"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mode: "",
      codeVisible: false,
      msg:'展开代码',
      demoVisible: true
    }
  },

  components: {},

  computed: {},

  mounted () {},

  created () {
    this.mode="ios"
  },

  methods: {
    toggle (mode) {
      this.mode = mode
    },
    toggleCode(){
      this.codeVisible = !this.codeVisible
      this.msg = this.codeVisible?'收起代码':'展开代码'
    }
  },
  watch: {
    mode (newValue) {
      this.demoVisible = false
      const ios = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
      const md = 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Mobile Safari/537.36';

      if (newValue === 'ios') {
        Object.defineProperty(navigator, 'userAgent', {
              value: ios,
              writable: true
            });
      }

      if(newValue === 'md') {
        Object.defineProperty(navigator, 'userAgent', {
              value: md,
              writable: true
            });
      }
      setTimeout(() => {
        this.demoVisible = true
      }, 200);
    }
  }
}

</script>
<style lang="scss" scoped>
.docs-demo {
  width: 384px;
  margin: 0 auto;
}
.docs-demo-device {
  --device-aspect-ratio: 2.125;
  --device-padding: 2rem;
  padding: var(--device-padding);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.docs-demo-device > figure {
  border-radius: 32px;
  -webkit-box-shadow: 0 0 0 14px #090a0d, 0 0 0 17px #9fa3a8,
    0 0 34px 17px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0 14px #090a0d, 0 0 0 17px #9fa3a8,
    0 0 34px 17px rgba(0, 0, 0, 0.2);
  height: 0;
  margin: 0;
  max-width: 320px;
  min-width: 320px;
  overflow: hidden;
  padding-bottom: calc(var(--device-aspect-ratio) * 100%);
  position: relative;
  width: calc(
    (100vh - var(--header-height) - var(--device-padding) * 2) /
      var(--device-aspect-ratio)
  );
  z-index: 1;
}
.docs-demo-device > figure > .demo {
    height: 95%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 1;
    border-width: initial;
    border-style: none;
    border-color: initial;
    -o-border-image: initial;
    border-image: initial;
    padding-top: 20px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 20px;
}
.docs-demo-mode-toggle {
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 1rem;
}
.docs-demo-mode-toggle button {
  background-color: transparent;
  border: none;
  border-radius: 16px;
  color: var(--text-color--light);
  cursor: pointer;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 24px;
  margin: 0 3px;
  padding: 0 9px;
  text-transform: uppercase;
  -webkit-transition: background-color 0.2s ease, color 0.2s ease;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.docs-demo-mode-toggle button:active,
.docs-demo-mode-toggle button:focus {
  outline: none;
}

.docs-demo-mode-toggle button.is-selected {
  background-color: #020814;
  color: rgb(255, 255, 255);
}
.docs-demo-source {
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  font-size: 13px;
  -ms-flex-pack: center;
  justify-content: center;
}
.docs-demo-source > ion-icon {
  margin-right: 5px;
}
@media (max-width: 1160px) {
  .docs-demo-device,
  .docs-demo-mode-toggle,
  .docs-demo-source {
    display: none;
  }
}
.docs-demo-device__ios-notch {
  fill: #090a0d;
  top: -1px;
  width: 165px;
  z-index: 2;
}
.docs-demo-device.ios figure:after,
.docs-demo-device__ios-notch {
  display: none;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.docs-demo-device.ios figure:after {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  bottom: 6px;
  content: "";
  height: 4px;
  width: 35%;
  z-index: 1;
}
.docs-demo-device.ios .docs-demo-device__ios-notch,
.docs-demo-device.ios figure:after {
  display: block;
}
.docs-demo-device.md figure {
  border-radius: 20px;
}
.docs-demo-device__md-bar {
  display: none;
}
.docs-demo-device.md .docs-demo-device__md-bar {
  display: block;
  fill: #090a0d;
  opacity: 0.1;
  padding: 0.5rem 0.75rem;
  position: relative;
  width: 100%;
  z-index: 2;
}
</style>

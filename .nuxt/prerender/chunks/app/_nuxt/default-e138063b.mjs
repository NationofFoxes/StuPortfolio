import { b as buildAssetsURL } from '../../renderer.mjs';
import { version, mergeProps, useSSRContext, unref, ref, watchEffect, watch, getCurrentInstance, resolveComponent, inject, withCtx, createTextVNode } from 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-afaf4e47.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { defineHeadPlugin, composableNames } from 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/@unhead/shared/dist/index.mjs';
import { getActiveHead } from 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/devalue/index.js';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/stuar/Programming/StuPortfolio/StuPortfolio/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("pfp_beach.e2387c06.jpg");
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ion_icon = resolveComponent("ion-icon");
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "sidebar",
        "data-sidebar": ""
      }, _attrs))}><div class="sidebar-info"><img class="avatar-image"${ssrRenderAttr("src", _imports_0)} alt="Stuart William Auld"><div class="info-content"><h1 class="name" title="Stuart William Auld">Stuart William Auld</h1><p class="title">Software Development</p><p class="title">Tech Promotion</p><p class="title">International Sales</p></div><button class="info_more-btn" data-sidebar-btn><span>Show Contacts</span>`);
      _push(ssrRenderComponent(_component_ion_icon, { name: "chevron-down" }, null, _parent));
      _push(`</button></div><div class="sidebar-info_more"><div class="separator"></div><ul class="contacts-list"><li class="contact-item"><div class="icon-box">`);
      _push(ssrRenderComponent(_component_ion_icon, { name: "mail-outline" }, null, _parent));
      _push(`</div><div class="contact-info"><p class="contact-title">Email</p><a href="mailto:stuart.william.auld@gmail.com" class="contact-link">stuart.william.auld@gmail.com</a></div></li><li class="contact-item"><div class="icon-box">`);
      _push(ssrRenderComponent(_component_ion_icon, { name: "calendar-outline" }, null, _parent));
      _push(`</div><div class="contact-info"><p class="contact-title">Birthday</p><time datetime="1982-06-23">Sept 27, 1992</time></div></li><li class="contact-item"><div class="icon-box">`);
      _push(ssrRenderComponent(_component_ion_icon, { name: "location-outline" }, null, _parent));
      _push(`</div><div class="contact-info"><p class="contact-title">Location</p><address>Tokyo, Japan</address></div></li></ul><div class="separator"></div><ul class="social-list"><li class="social-item"><a href="https://www.instagram.com/nationoffoxes" class="social-link" target="_blank">`);
      _push(ssrRenderComponent(_component_ion_icon, { name: "logo-instagram" }, null, _parent));
      _push(`</a></li><li class="social-item"><a href="https://www.linkedin.com/in/stuart-auld-77868178/" class="social-link" target="_blank">`);
      _push(ssrRenderComponent(_component_ion_icon, { name: "logo-linkedin" }, null, _parent));
      _push(`</a></li><li class="social-item"><a href="https://github.com/NationofFoxes" class="social-link" target="_blank">`);
      _push(ssrRenderComponent(_component_ion_icon, { name: "logo-github" }, null, _parent));
      _push(`</a></li></ul></div></aside>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-cc308a11><ul class="navbar-list" data-v-cc308a11><li class="navbar-item" data-v-cc308a11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "about",
    class: "navbar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About `);
      } else {
        return [
          createTextVNode(" About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navbar-item" data-v-cc308a11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "resume",
    class: "navbar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Resume `);
      } else {
        return [
          createTextVNode(" Resume ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navbar-item" data-v-cc308a11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "portfolio",
    class: "navbar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Portfolio `);
      } else {
        return [
          createTextVNode(" Portfolio ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navbar-item" data-v-cc308a11>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "contact",
    class: "navbar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact `);
      } else {
        return [
          createTextVNode(" Contact ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cc308a11"]]);
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__unhead_injection_handler__";
function injectHead() {
  if (globalKey in _global) {
    return _global[globalKey]();
  }
  const head = inject(headSymbol);
  if (!head && true)
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (pageTitle) => {
        return pageTitle ? `${pageTitle} - SWA ` : "SWA";
      },
      meta: [
        { charset: "utf-8" },
        { name: "description", content: "Stuart William Auld - Portfolio Site" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "og:image", href: "assets/images/pfp.jpg" }
      ],
      link: [
        {
          rel: "icon",
          type: "image/jpg",
          href: "~/assets/images/Sunny.jpg"
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
          crossorigin: ""
        }
      ],
      script: [
        {
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
          body: false,
          type: "module"
        },
        {
          src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
          body: false,
          nomodule: true
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = __nuxt_component_0;
      const _component_Navbar = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
      _push(`<div class="main-content">`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-e138063b.mjs.map

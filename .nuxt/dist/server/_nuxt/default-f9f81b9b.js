import { ref, resolveComponent, mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-afaf4e47.js";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./index-88e9f29c.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "destr";
import "defu";
import "unhead";
import "@unhead/shared";
const _imports_0 = "" + __buildAssetsURL("pfp_beach.e2387c06.jpg");
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
      }, _attrs))}><div class="sidebar-info"><img class="avatar-image"${ssrRenderAttr("src", _imports_0)} alt="Stuart William Auld"><div class="info-content"><h1 class="name" title="Stuart William Auld">Stuart William Auld</h1><p class="title">Software Development</p><p class="title">Tech Promotion</p><p class="title">International Sales</p></div></div><div class="sidebar-info_more"><div class="separator"></div><ul class="contacts-list"><li class="contact-item"><div class="icon-box">`);
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
const Navbar_vue_vue_type_style_index_0_scoped_cc308a11_lang = "";
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
const default_vue_vue_type_style_index_0_lang = "";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=default-f9f81b9b.js.map

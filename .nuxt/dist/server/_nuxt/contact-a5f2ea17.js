import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "destr";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ion_icon = resolveComponent("ion-icon");
  _push(`<article${ssrRenderAttrs(mergeProps({
    class: "contact active",
    "data-page": "contact"
  }, _attrs))}><header><h2 class="h2 article-title">Contact</h2></header><ul class="contacts-list"><li class="contact-item"><div class="icon-box">`);
  _push(ssrRenderComponent(_component_ion_icon, { name: "mail-outline" }, null, _parent));
  _push(`</div><div class="contact-info"><p class="contact-title">Email</p><a href="mailto:stuart.william.auld@gmail.com" class="contact-link">stuart.william.auld@gmail.com</a></div></li><li class="contact-item"><div class="icon-box">`);
  _push(ssrRenderComponent(_component_ion_icon, { name: "logo-instagram" }, null, _parent));
  _push(`</div><div class="contact-info"><p class="contact-title">Instagram</p><a href="https://www.instagram.com/nationoffoxes/" class="contact-link" target="blank">NationofFoxes</a></div></li><li class="contact-item"><div class="icon-box">`);
  _push(ssrRenderComponent(_component_ion_icon, { name: "logo-linkedin" }, null, _parent));
  _push(`</div><div class="contact-info"><p class="contact-title">LinkedIn</p><a href="https://www.linkedin.com/in/stuartwilliamauld/" class="contact-link" target="blank">Stuart William Auld</a></div></li></ul></article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-a5f2ea17.js.map

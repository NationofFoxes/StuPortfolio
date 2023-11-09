import { mergeProps, useSSRContext } from 'file://C:/Users/stuar/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file://C:/Users/stuar/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/stuar/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/stuar/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/stuar/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/stuar/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/stuar/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/stuar/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/stuar/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/stuar/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/stuar/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/stuar/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/stuar/node_modules/pathe/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "py-20 px-10 text-center" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="mt-5 mx-auto text-center opacity-25 text-sm"> [Home Layout] </div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { home as default };
//# sourceMappingURL=home-e8451f04.mjs.map

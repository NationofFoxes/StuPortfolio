import { b as buildAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/stuar/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/stuar/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/stuar/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/stuar/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/devalue/index.js';
import 'file://C:/Users/stuar/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/stuar/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/stuar/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/stuar/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/stuar/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/defu/dist/defu.mjs';
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
import 'file://C:/Users/stuar/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/stuar/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("PythonSolitaire.4bc642ec.png");
const _imports_1 = "" + buildAssetsURL("PythonChess.9e391d19.png");
const _imports_2 = "" + buildAssetsURL("SlingShot.0165b3e9.gif");
const _imports_3 = "" + buildAssetsURL("PupsGuide.f41535c6.gif");
const _imports_4 = "" + buildAssetsURL("eventhorizon.66a42dfc.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<article${ssrRenderAttrs(mergeProps({
    class: "portfolio active",
    "data-page": "portfolio"
  }, _attrs))}><header><h2 class="h2 article-title">Portfolio</h2></header><section class="projects"><ul class="project-list"><li class="project-item active"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_0)} alt="Solitaire" loading="lazy"></figure><h3 class="project-title"><a href="https://github.com/NationofFoxes/PythonCards" target="_blank">Python Solitaire</a></h3><p class="project-category">Game</p></a></li><li class="project-item active"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_1)} alt="Python Chess" loading="lazy"></figure><h3 class="project-title"><a href="https://github.com/NationofFoxes/PythonCLIGames" target="_blank">CLI Game Suite</a></h3><p class="project-category">Game/Web Dev</p></a></li><li class="project-item active" data-filter-item data-category="web design"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_2)} alt="SlingShot Gameplay" loading="lazy"></figure><h3 class="project-title"><a href="https://github.com/NationofFoxes/Slingshot" target="_blank">SlingShot</a></h3><p class="project-category">Game (Unity Engine)</p></a></li><li class="project-item active" data-filter-item data-category="applications"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_3)} alt="Pup&#39;s guide navigation" loading="lazy"></figure><h3 class="project-title">Pup&#39;s Guide</h3><p class="project-category">Web Programming/Business Concept</p></a></li><li class="project-item active" data-filter-item data-category="web design"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_4)} alt="Event Horizon" loading="lazy"></figure><h3 class="project-title"><a href="https://github.com/Konami-Code-BA/EventHorizon" target="_blank">Event Horizon</a></h3><p class="project-category">Web Programming/Business Concept</p></a></li></ul></section></article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { portfolio as default };
//# sourceMappingURL=portfolio-08607c1a.mjs.map

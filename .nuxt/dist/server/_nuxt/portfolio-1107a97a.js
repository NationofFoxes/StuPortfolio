import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("PythonSolitaire.4bc642ec.png");
const _imports_1 = "" + __buildAssetsURL("PythonChess.9e391d19.png");
const _imports_2 = "" + __buildAssetsURL("SlingShot.0165b3e9.gif");
const _imports_3 = "" + __buildAssetsURL("PupsGuide.f41535c6.gif");
const _imports_4 = "" + __buildAssetsURL("eventhorizon.66a42dfc.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<article${ssrRenderAttrs(mergeProps({
    class: "portfolio active",
    "data-page": "portfolio"
  }, _attrs))}><header><h2 class="h2 article-title">Portfolio</h2></header><section class="projects"><ul class="project-list"><li class="project-item active" data-filter-item data-category="web development"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_0)} alt="Solitaire" loading="lazy"></figure><h3 class="project-title"><a href="https://github.com/NationofFoxes/PythonCards" target="_blank">Python Solitaire</a></h3><p class="project-category">Game</p></a></li><li class="project-item active" data-filter-item data-category="web development"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_1)} alt="Python Chess" loading="lazy"></figure><h3 class="project-title"><a href="https://github.com/NationofFoxes/PythonCLIGames" target="_blank">CLI Game Suite</a></h3><p class="project-category">Game/Web Dev</p></a></li><li class="project-item active" data-filter-item data-category="web design"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_2)} alt="SlingShot Gameplay" loading="lazy"></figure><h3 class="project-title">SlingShot</h3><p class="project-category">Game (Unity Engine)</p></a></li><li class="project-item active" data-filter-item data-category="applications"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_3)} alt="Pup&#39;s guide navigation" loading="lazy"></figure><h3 class="project-title">Pup&#39;s Guide</h3><p class="project-category">Web Programming/Business Concept</p></a></li><li class="project-item active" data-filter-item data-category="web design"><a href="#"><figure class="project-img"><img${ssrRenderAttr("src", _imports_4)} alt="Event Horizon" loading="lazy"></figure><h3 class="project-title"><a href="https://github.com/Konami-Code-BA/EventHorizon" target="_blank">Event Horizon</a></h3><p class="project-category">Web Programming/Business Concept</p></a></li></ul></section></article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portfolio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  portfolio as default
};
//# sourceMappingURL=portfolio-1107a97a.js.map

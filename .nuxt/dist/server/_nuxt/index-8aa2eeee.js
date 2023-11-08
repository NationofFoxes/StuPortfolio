import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, a as _imports_0 } from "../server.mjs";
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
  _push(`<article${ssrRenderAttrs(mergeProps({
    class: "about active",
    "data-page": "index"
  }, _attrs))}><header><h2 class="h2 article-title">About Me</h2></header><section class="about-text"><p> Hi, I&#39;m Stu </p><p> I come from of Central West N.S.W., Australia, but I&#39;m currently living and working in Tokyo, Japan. My journey into the realms of technology and creativity is a story of evolving passions and discovering boundless possibilities. </p><p> I entered the world of deep tech working at a start-up in Administration and HR. I aimed to work in Marketing and Sales in order to bring innovative Japanese products to global markets, and was soon given the opportunity to make that a reality. </p><p> As the world grappled with the unprecedented challenges of the COVID-19 pandemic in 2020, I embarked on a remarkable adventure, one that would shape my love for technology. Learning to program opened doors to a world where innovative ideas could spring to life. It was during this transformative time that I learned about the exciting universe of open-source technologies, a space that thrives on collaboration and innovation. My desire to contribute to this open-source landscape is fueled not only by my enthusiasm for creating new products but also by the aspiration to enhance the platforms themselves. My aim is to make it easier for others to embark on their own creative journeys, inspiring a diverse range of unique creations. </p><p> Beyond my tech ventures, you can find me out walking my dog, Sunny, or out in the countryside enjoying the nature of Japan. </p><div class="image-container"><img${ssrRenderAttr("src", _imports_0)} alt="Me and Sunny" class="profile-image"></div></section></article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-8aa2eeee.js.map

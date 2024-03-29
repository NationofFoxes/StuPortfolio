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
    class: "resume active",
    "data-page": "resume"
  }, _attrs))}><header><h2 class="h2 article-title">Resume</h2></header><section class="timeline"><div class="title-wrapper"><div class="icon-box">`);
  _push(ssrRenderComponent(_component_ion_icon, { name: "book-outline" }, null, _parent));
  _push(`</div><h3 class="h3">Education</h3></div><ol class="timeline-list"><li class="timeline-item"><h4 class="h4 timeline-item-title">University of the People, Pasadena, California, U.S.A.</h4><span>2020 — Present (Estimated Graduation Date: Late 2024)</span><p class="timeline-text"> Pursuing a Bachelor of Science, majoring in Computer Science, I&#39;ve been attending this university online since the outbreak of COVID-19. So far I&#39;ve studied courses relevant to my ambitions in software, such as Software Engineering, Web Programming, Communications &amp; Networking, and Data Structures, etc. alongside appropriate Mathematics courses such as Statistics and Discrete Mathematics. </p></li><li class="timeline-item"><h4 class="h4 timeline-item-title">La Salle Academy, Lithgow, N.S.W., Aus</h4><span>2004 — 2010</span><p class="timeline-text"> Graduating in 2010, I recieved an award for my performance in Chemistry. </p></li></ol></section><section class="timeline"><div class="title-wrapper"><div class="icon-box">`);
  _push(ssrRenderComponent(_component_ion_icon, { name: "business-outline" }, null, _parent));
  _push(`</div><h3 class="h3">Experience</h3></div><ol class="timeline-list"><li class="timeline-item"><h4 class="h4 timeline-item-title">Future Designs Unit, Sales &amp; Marketing - A.L.I. Technologies, Tokyo</h4><span>2020 — 2023</span><p class="timeline-text"><ul class="timeline-text"><li>• Worked with potential distributors to set up international distribution pipelines</li><li>• Acted as liaison between board, administration department, and non-Japanese employees</li><li>• Represented company publicly, e.g. in meetings with vendors, customers, at international (tech) conferences, luxury shows</li><li>• Acted as a product and production liaison, translating production and product improvement steps between Japanese blue and white collar workers and foreign Engineers</li></ul></p></li><li class="timeline-item"><h4 class="h4 timeline-item-title">Language Instructor - NOVA Holdings, Tokyo</h4><span>2015 — 2020 </span><p class="timeline-text"><ul class="timeline-text"><li>• Provided language instruction to students of all ages and skill levels, achieving top 50 nationwide</li><li>• Conducted sales and marketing activities to attract new students</li><li>• Performed client counseling for retention purposes</li></ul></p></li><li class="timeline-item"><h4 class="h4 timeline-item-title">Food &amp; Beverage Associate - Noah&#39;s on the Beach Hotel, Newcastle, N.S.W.</h4><span>2013 — 2015</span><p class="timeline-text"><ul class="timeline-text"><li>• Responsible for set-up and execution of private and corporate events</li><li>• Customer service &amp; cash handling</li><li>• Responsible for the training of new staff in the processes and workflows relating to above tasks</li></ul></p></li><li class="timeline-item"><h4 class="h4 timeline-item-title">Lizotte’s Restaurant &amp; Concert Hall - Newcastle, N.S.W.</h4><span>2014 — 2015</span><p class="timeline-text"><ul class="timeline-text"><li>• Provided timely and friendly pre-show service in addition to discrete showtime service</li><li>• Pre and post-show green room service, cleaning, and maintenance</li><li>• Food &amp; beverage service including cocktail bar &amp; cafe service</li></ul></p></li></ol></section><section class="skill"><h3 class="h3 skills-title">My skills</h3><ul class="skills-list content-card"><li class="skills-item"><div class="title-wrapper"><h5 class="h5">Python: </h5><span>Proficient - 3 years experience</span></div></li><li class="skills-item"><div class="title-wrapper"><h5 class="h5">Java: </h5><span>Experienced - 2 years experience</span></div></li><li class="skills-item"><div class="title-wrapper"><h5 class="h5">JavaScript: </h5><span>Experienced - 2 years experience</span></div></li><li class="skills-item"><div class="title-wrapper"><h5 class="h5">HTML &amp; CSS: </h5><span>Proficient - 3 years experience</span></div></li></ul></section><section class="skill"><h3 class="h3 skills-title">Languages</h3></section><ul class="skills-list content-card"><li class="skills-item"><div class="title-wrapper"><h5 class="h5">English: </h5><span>Native</span></div></li><li class="skills-item"><div class="title-wrapper"><h5 class="h5">Japanese: </h5><span>Conversational</span></div></li></ul></article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resume = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  resume as default
};
//# sourceMappingURL=resume-4a442c4f.js.map

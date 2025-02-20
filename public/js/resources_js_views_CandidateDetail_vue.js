"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_CandidateDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CandidateDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CandidateDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CandidateDetail',
  metaInfo: {
    title: 'Informasi Detail Kandidat'
  },
  data: function data() {
    return {
      candidates: {},
      vue_loading: true
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    authenticated: 'authenticated',
    userdata: 'user'
  })),
  methods: {
    vote: function vote(id) {
      var _this = this;

      this.$swal.fire({
        title: 'Apakah kamu yakin?',
        text: "Jika anda sudah memilih maka tidak akan bisa memilih kembali!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Pilih Dia!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/v1/candidates/vote', {
            candidates_id: _this.$route.params.id
          }).then(function (response) {
            _this.$swal.fire('Terpilih!', 'Terima kasih atas waktunya.', 'success');
          })["catch"](function (error) {
            // console.log(error.response.status)
            if (error.response.status === 422) {
              _this.$toast.open({
                type: 'error',
                message: error.response.data.results.errors.candidates_id[0]
              });
            }

            if (error.response.status === 403) {
              _this.$swal.fire('Oops!', error.response.data.status.message, 'error'); // this.$toast.open({
              //   type: 'error',
              //   message: error.response.data.status.message
              // })

            }
          });
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/v1/candidates/' + this.$route.params.id).then(function (response) {
      _this2.candidates = response.data.results.candidates;
      _this2.vue_loading = false; // console.log(this.candidates.student)
    })["catch"](function (error) {
      // console.log(error.response)
      console.log(error.response.data);
    });
  }
});

/***/ }),

/***/ "./resources/js/views/CandidateDetail.vue":
/*!************************************************!*\
  !*** ./resources/js/views/CandidateDetail.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CandidateDetail_vue_vue_type_template_id_3ec71ce5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CandidateDetail.vue?vue&type=template&id=3ec71ce5& */ "./resources/js/views/CandidateDetail.vue?vue&type=template&id=3ec71ce5&");
/* harmony import */ var _CandidateDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CandidateDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/CandidateDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CandidateDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CandidateDetail_vue_vue_type_template_id_3ec71ce5___WEBPACK_IMPORTED_MODULE_0__.render,
  _CandidateDetail_vue_vue_type_template_id_3ec71ce5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CandidateDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/CandidateDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/CandidateDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidateDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CandidateDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CandidateDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidateDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CandidateDetail.vue?vue&type=template&id=3ec71ce5&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/CandidateDetail.vue?vue&type=template&id=3ec71ce5& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidateDetail_vue_vue_type_template_id_3ec71ce5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidateDetail_vue_vue_type_template_id_3ec71ce5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CandidateDetail_vue_vue_type_template_id_3ec71ce5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CandidateDetail.vue?vue&type=template&id=3ec71ce5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CandidateDetail.vue?vue&type=template&id=3ec71ce5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CandidateDetail.vue?vue&type=template&id=3ec71ce5&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CandidateDetail.vue?vue&type=template&id=3ec71ce5& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _vm.vue_loading
        ? _c("vue-loading", {
            attrs: {
              type: "spiningDubbles",
              color: "#0092ee",
              size: { width: "50px", height: "50px" },
            },
          })
        : _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-3" }, [
              _c("div", { staticClass: "text-center" }, [
                _c("img", {
                  staticClass: "img-fluid rounded-3 shadow",
                  attrs: {
                    src:
                      _vm.$base_url +
                      "/assets/img/candidates/" +
                      _vm.candidates.img,
                    height: "250px",
                    width: "250px",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center my-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light-danger",
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        return _vm.vote(_vm.$route.params.id)
                      },
                    },
                  },
                  [_c("i", { staticClass: "fa fa-edit" }), _vm._v(" Pilih")]
                ),
                _vm._v(" "),
                _vm.userdata.userdata.is_admin
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-light-dark",
                        attrs: { type: "button" },
                      },
                      [
                        _c("i", { staticClass: "fa fa-edit" }),
                        _vm._v(" Diskualifikasi"),
                      ]
                    )
                  : _vm._e(),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "offset-lg-1 col-lg-8" }, [
              _c("div", { staticClass: "card border-0 shadow" }, [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("h4", [_vm._v("Informasi Detail Kandidat")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3" }, [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(_vm.candidates.student.name)),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v(
                          "- " + _vm._s(_vm.candidates.student.student_number)
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v(
                          "- " +
                            _vm._s(_vm.candidates.student.study_program.name)
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "accordion mb-3",
                        attrs: { id: "accordionExample" },
                      },
                      [
                        _c("div", { staticClass: "accordion-item" }, [
                          _c(
                            "h2",
                            {
                              staticClass: "accordion-header",
                              attrs: { id: "headingOne" },
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "accordion-button",
                                  attrs: {
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#collapseOne",
                                    "aria-expanded": "true",
                                    "aria-controls": "collapseOne",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                  Visi & Misi\n                "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "accordion-collapse collapse show",
                              attrs: {
                                id: "collapseOne",
                                "aria-labelledby": "headingOne",
                                "data-bs-parent": "#accordionExample",
                              },
                            },
                            [
                              _c("div", { staticClass: "accordion-body" }, [
                                _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.candidates.description
                                    ),
                                  },
                                }),
                              ]),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary d-block",
                        attrs: { to: "/vote" },
                      },
                      [
                        _c("i", { staticClass: "fa fa-chevron-left" }),
                        _vm._v(" Kembali"),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
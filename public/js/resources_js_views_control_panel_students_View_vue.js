"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_control_panel_students_View_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidenav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidenav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: 'Sidenav',
  methods: {
    livechart: function livechart() {
      this.$toast.open({
        type: 'default',
        message: 'Coming Soon'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/control_panel/students/View.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/control_panel/students/View.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidenav_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Sidenav.vue */ "./resources/js/components/Sidenav.vue");
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
  name: 'StudentView',
  metaInfo: {
    title: 'Detail Mahasiswa'
  },
  data: function data() {
    return {
      student_number: this.$route.params.student_number,
      student: {},
      study_program: {},
      user: {}
    };
  },
  components: {
    Sidenav: _components_Sidenav_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    getStudent: function getStudent() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/v1/students/student-number/' + this.student_number).then(function (response) {
        _this.student = response.data.results.student;
        _this.study_program = response.data.results.study_program;
        _this.user = response.data.results.user;
        console.log(_this.student);
      })["catch"](function (error) {//
      });
    }
  },
  mounted: function mounted() {
    this.getStudent();
  }
});

/***/ }),

/***/ "./resources/js/components/Sidenav.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidenav.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidenav.vue?vue&type=template&id=3a054bd1& */ "./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1&");
/* harmony import */ var _Sidenav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidenav.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidenav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidenav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidenav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/control_panel/students/View.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/control_panel/students/View.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_1a300f00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=1a300f00& */ "./resources/js/views/control_panel/students/View.vue?vue&type=template&id=1a300f00&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/control_panel/students/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_1a300f00___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_1a300f00___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/control_panel/students/View.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidenav.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidenav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidenav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidenav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/control_panel/students/View.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/control_panel/students/View.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/control_panel/students/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidenav.vue?vue&type=template&id=3a054bd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1&");


/***/ }),

/***/ "./resources/js/views/control_panel/students/View.vue?vue&type=template&id=1a300f00&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/control_panel/students/View.vue?vue&type=template&id=1a300f00& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_1a300f00___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_1a300f00___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_1a300f00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=template&id=1a300f00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/control_panel/students/View.vue?vue&type=template&id=1a300f00&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "border p-3 rounded mb-5" }, [
    _c("ul", { staticClass: "nav flex-column" }, [
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-primary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel",
                exact: "",
              },
            },
            [_vm._v("Beranda Control Panel")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-inverted-primary d-block text-start",
            attrs: { href: "" },
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.livechart()
              },
            },
          },
          [_vm._v("Live Chart")]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "bg-secondary" }),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("ul", { staticClass: "nav flex-column" }, [
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/candidates",
                exact: "",
              },
            },
            [_vm._v("Data Semua Kandidat")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/candidates/create",
              },
            },
            [_vm._v("Buat Data Kandidat Baru")]
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "bg-secondary" }),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("ul", { staticClass: "nav flex-column" }, [
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/students",
                exact: "",
              },
            },
            [_vm._v("Data Semua Mahasiswa")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/students/create",
              },
            },
            [_vm._v("Buat Data Mahasiswa Baru")]
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "bg-secondary" }),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("ul", { staticClass: "nav flex-column" }, [
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: { "aria-current": "page", to: "/control-panel/teachers" },
            },
            [_vm._v("Data Semua Dosen")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/teachers/create",
              },
            },
            [_vm._v("Buat Data Dosen Baru")]
          ),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "bg-secondary" }),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("ul", { staticClass: "nav flex-column" }, [
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/configurations/voting",
              },
            },
            [_vm._v("Voting")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/configurations/user",
              },
            },
            [_vm._v("User")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/configurations/terms-and-conditions",
              },
            },
            [_vm._v("Syarat & Ketentuan")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/configurations/privacy-policy",
              },
            },
            [_vm._v("Kebijakan Privasi")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-inverted-secondary d-block text-start",
              attrs: {
                "aria-current": "page",
                to: "/control-panel/configurations/log",
              },
            },
            [_vm._v("Log")]
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("i", { staticClass: "fa fa-user-check" }),
      _vm._v(" Kandidat"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("i", { staticClass: "fa fa-user-graduate" }),
      _vm._v(" Mahasiswa"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("i", { staticClass: "fa fa-user-tie" }),
      _vm._v(" Dosen"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("i", { staticClass: "fa fa-cogs" }),
      _vm._v(" Konfigurasi"),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/control_panel/students/View.vue?vue&type=template&id=1a300f00&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/control_panel/students/View.vue?vue&type=template&id=1a300f00& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3" }, [_c("Sidenav")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table table-borderless" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("NIM")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.student.student_number))]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Nama")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.student.name))]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Tempat Lahir")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.student.place_birth))]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Tanggal Lahir")]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm
                        .moment(_vm.student.date_birth)
                        .format("dddd, DD MMMM YYYY")
                    )
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Program Studi")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.study_program.name))]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table table-borderless" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Tipe")]),
                _vm._v(" "),
                _c("td", [
                  _vm.user.is_admin === 1
                    ? _c("span", { staticClass: "badge bg-danger" }, [
                        _vm._v("Administrator"),
                      ])
                    : _c("span", { staticClass: "badge bg-primary" }, [
                        _vm._v("User"),
                      ]),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Aktivasi")]),
                _vm._v(" "),
                _c("td", [
                  _vm.user.is_activated === 1
                    ? _c("span", { staticClass: "badge bg-success" }, [
                        _vm._v("Aktif"),
                      ])
                    : _c("span", { staticClass: "badge bg-danger" }, [
                        _vm._v("Belum Aktif"),
                      ]),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Password Bawaan")]),
                _vm._v(" "),
                _c("td", [
                  _vm.user.is_password_changed === 1
                    ? _c("span", { staticClass: "badge bg-success" }, [
                        _vm._v("Sudah Diganti"),
                      ])
                    : _c("span", { staticClass: "badge bg-danger" }, [
                        _vm._v("Belum Diganti"),
                      ]),
                ]),
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Sudah Voting")]),
                _vm._v(" "),
                _c("td", [
                  _vm.user.is_voted === 1
                    ? _c("span", { staticClass: "badge bg-success" }, [
                        _vm._v("Sudah Voting"),
                      ])
                    : _c("span", { staticClass: "badge bg-danger" }, [
                        _vm._v("Belum Voting"),
                      ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "text-primary mb-4" }, [
      _c("i", { staticClass: "fa fa-user-graduate" }),
      _vm._v(" Detail Data Mahasiswa"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "text-primary mb-4" }, [
      _c("i", { staticClass: "fa fa-user-graduate" }),
      _vm._v(" Detail Akun"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
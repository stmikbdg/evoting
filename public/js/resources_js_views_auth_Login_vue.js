"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Login',
  metaInfo: {
    title: 'Masuk'
  },
  data: function data() {
    return {
      options: {
        is_teacher_login: false,
        btn_spinner: false,
        password_type: 'password',
        password_placeholder: '******',
        eye_icon: '<i class="fa fa-eye"></i>'
      },
      forms: {
        data: {
          student_number: null,
          device_name: 'browser',
          email: null,
          password: null,
          login_type: 'STUDENT'
        }
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    signIn: 'auth/signIn'
  })), {}, {
    showPassword: function showPassword() {
      if (this.options.password_type === 'password') {
        this.options.password_type = 'text';
        this.options.eye_icon = '<i class="fa fa-eye-slash"></i>';
        this.options.password_placeholder = 'Password';
      } else {
        this.options.password_type = 'password';
        this.options.eye_icon = '<i class="fa fa-eye"></i>';
        this.options.password_placeholder = '******';
      }
    },
    loginSubmit: function loginSubmit() {
      if (this.options.is_teacher_login === false) {
        this.forms.data.login_type = 'STUDENT';
        this.forms.data.email = null;
        this.loginAsStudent();
      } else {
        this.forms.data.login_type = 'TEACHER';
        this.forms.data.student_number = null;
        this.loginAsTeacher();
      }
    },
    loginAsStudent: function loginAsStudent() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.forms.data.student_number === null || _this.forms.data.student_number === '') {
                  _this.$toast.open({
                    type: 'error',
                    message: 'Form NIM wajib diisi.'
                  });
                } else if (_this.forms.data.password === null || _this.forms.data.password === '') {
                  _this.$toast.open({
                    type: 'error',
                    message: 'Form Password wajib diisi.'
                  });
                } else {
                  _this.options.btn_spinner = true;

                  _this.$store.dispatch('login', _this.forms.data).then(function (response) {
                    _this.$router.replace({
                      name: 'Home'
                    });

                    _this.$toast.open({
                      type: 'success',
                      message: 'Selamat Datang :)'
                    });
                  })["catch"](function (error) {
                    _this.options.btn_spinner = false; // console.log(error.response)

                    _this.$toast.open({
                      type: 'error',
                      message: error.response.data.status.message
                    });
                  });
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loginAsTeacher: function loginAsTeacher() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.forms.data.email === null || _this2.forms.data.email === '') {
                  _this2.$toast.open({
                    type: 'error',
                    message: 'Form Email wajib diisi.'
                  });
                } else if (_this2.forms.data.password === null || _this2.forms.data.password === '') {
                  _this2.$toast.open({
                    type: 'error',
                    message: 'Form Password wajib diisi.'
                  });
                } else {
                  _this2.options.btn_spinner = true;

                  _this2.$store.dispatch('login', _this2.forms.data).then(function (response) {
                    _this2.$router.replace({
                      name: 'Home'
                    });

                    _this2.$toast.open({
                      type: 'success',
                      message: 'Selamat Datang :)'
                    });
                  })["catch"](function (error) {
                    _this2.options.btn_spinner = false;

                    if (error.response.status === 502) {
                      _this2.$toast.open({
                        type: 'error',
                        message: 'Error'
                      });
                    }

                    _this2.$toast.open({
                      type: 'error',
                      message: error.response.data.status.message
                    });
                  });
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./resources/js/views/auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/auth/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=46ec553e& */ "./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=46ec553e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-lg-6" }, [
        _c("div", { staticClass: "card border-0 shadow" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("Login")]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v("Silahkan login terlebih dahulu."),
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { method: "post" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.loginSubmit.apply(null, arguments)
                  },
                },
              },
              [
                _vm.options.is_teacher_login === false
                  ? [
                      _c("div", { staticClass: "mb-3" }, [
                        _c("label", { attrs: { for: "student_number" } }, [
                          _vm._v("NIM (Nomor Induk Mahasiswa)"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.forms.data.student_number,
                              expression: "forms.data.student_number",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            placeholder: "322****",
                            id: "student_number",
                            min: "1",
                          },
                          domProps: { value: _vm.forms.data.student_number },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.forms.data,
                                "student_number",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ]
                  : [
                      _c("div", { staticClass: "mb-3" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Email"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.forms.data.email,
                              expression: "forms.data.email",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            placeholder: "example@stmik.ac.id",
                            id: "email",
                          },
                          domProps: { value: _vm.forms.data.email },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.forms.data,
                                "email",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                    ],
                _vm._v(" "),
                _c("label", { attrs: { for: "password" } }, [
                  _vm._v("Password"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3" }, [
                  _vm.options.password_type === "checkbox"
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.forms.data.password,
                            expression: "forms.data.password",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.options.password_placeholder,
                          id: "password",
                          type: "checkbox",
                        },
                        domProps: {
                          checked: Array.isArray(_vm.forms.data.password)
                            ? _vm._i(_vm.forms.data.password, null) > -1
                            : _vm.forms.data.password,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = _vm.forms.data.password,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.forms.data,
                                    "password",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.forms.data,
                                    "password",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.forms.data, "password", $$c)
                            }
                          },
                        },
                      })
                    : _vm.options.password_type === "radio"
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.forms.data.password,
                            expression: "forms.data.password",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.options.password_placeholder,
                          id: "password",
                          type: "radio",
                        },
                        domProps: {
                          checked: _vm._q(_vm.forms.data.password, null),
                        },
                        on: {
                          change: function ($event) {
                            return _vm.$set(_vm.forms.data, "password", null)
                          },
                        },
                      })
                    : _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.forms.data.password,
                            expression: "forms.data.password",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          placeholder: _vm.options.password_placeholder,
                          id: "password",
                          type: _vm.options.password_type,
                        },
                        domProps: { value: _vm.forms.data.password },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.forms.data,
                              "password",
                              $event.target.value
                            )
                          },
                        },
                      }),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { type: "button" },
                    domProps: { innerHTML: _vm._s(_vm.options.eye_icon) },
                    on: { click: _vm.showPassword },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-3" }, [
                  _c("div", { staticClass: "form-check form-switch" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.options.is_teacher_login,
                          expression: "options.is_teacher_login",
                        },
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "checkbox",
                        role: "switch",
                        id: "login_type_switch",
                      },
                      domProps: {
                        checked: Array.isArray(_vm.options.is_teacher_login)
                          ? _vm._i(_vm.options.is_teacher_login, null) > -1
                          : _vm.options.is_teacher_login,
                      },
                      on: {
                        change: function ($event) {
                          var $$a = _vm.options.is_teacher_login,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.options,
                                  "is_teacher_login",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.options,
                                  "is_teacher_login",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.options, "is_teacher_login", $$c)
                          }
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "form-check-label",
                        attrs: { for: "login_type_switch" },
                      },
                      [_vm._v("Login sebagai dosen / karyawan")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-3" }, [
                  _c("div", { staticClass: "d-grid" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          type: "submit",
                          disabled: _vm.options.btn_spinner,
                        },
                      },
                      [
                        _vm.options.btn_spinner === true
                          ? _c("span", {
                              staticClass: "spinner-border spinner-border-sm",
                              attrs: { role: "status" },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.options.btn_spinner === true
                          ? _c("span", [_vm._v("Loading...")])
                          : _c("span", [_vm._v("Login")]),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
              ],
              2
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 d-none d-lg-block" }, [
        _c("img", {
          staticClass: "img-fluid",
          attrs: {
            src: this.$base_url + "/assets/img/secure_login.svg",
            alt: "",
          },
        }),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _vm._v("Lupa Password ?\n              "),
      _c(
        "a",
        {
          attrs: {
            "data-bs-toggle": "collapse",
            href: "#forgotPasswordCollapse",
            role: "button",
          },
        },
        [_vm._v("\n                Klik Disini\n              ")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "collapse", attrs: { id: "forgotPasswordCollapse" } },
      [
        _c("div", { staticClass: "card card-body mt-2" }, [
          _vm._v(
            "\n                Silahkan hubungi panitia terkait untuk meminta request penggantian password.\n              "
          ),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);
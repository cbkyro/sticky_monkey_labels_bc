(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this3 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]"
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
      } else {
        _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_8__["creditCardType"])(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_8__["storeInstrument"])(_this3.context, data, function () {
          window.location.href = _this3.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"].fire({
            text: _this3.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector);
    }
    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]'
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */
function buildRequiredCheckboxValidation($formField, validation) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}
function buildRequiredValidation(validation, selector) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($form) {
  var validationsToPerform = [];
  $form.find('[data-validation]').each(function (index, input) {
    validationsToPerform = validationsToPerform.concat(buildValidation($(input)));
  });
  return validationsToPerform;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weakmap_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weakmap-polyfill */ "./node_modules/weakmap-polyfill/weakmap-polyfill.js");
/* harmony import */ var weakmap_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weakmap_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



// WeakMap will defined in the global scope if native WeakMap is not supported.
var weakMap = new WeakMap(); // eslint-disable-line no-unused-vars

// Set defaults for sweetalert2 popup boxes
var Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'button',
    cancelButton: 'button'
  }
});

// Re-export
/* harmony default export */ __webpack_exports__["default"] = (Swal);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQuanMiXSwibmFtZXMiOlsiQWNjb3VudCIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsIiRzdGF0ZSIsIiQiLCIkYm9keSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCIkZWRpdEFjY291bnRGb3JtIiwiY2xhc3NpZnlGb3JtIiwiJGFkZHJlc3NGb3JtIiwiJGluYm94Rm9ybSIsIiRhY2NvdW50UmV0dXJuRm9ybSIsIiRwYXltZW50TWV0aG9kRm9ybSIsIiRyZW9yZGVyRm9ybSIsIiRpbnZvaWNlQnV0dG9uIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJXaXNobGlzdCIsImxvYWQiLCJsZW5ndGgiLCJyZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbiIsImlzIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIm9uIiwibGVmdCIsIndpbmRvdyIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsImRhdGEiLCJvcGVuIiwiaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbiIsInJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uIiwiaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbiIsImluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24iLCJpbml0UmVvcmRlckZvcm0iLCJiaW5kRGVsZXRlQWRkcmVzcyIsImJpbmREZWxldGVQYXltZW50TWV0aG9kIiwiZXZlbnQiLCJtZXNzYWdlIiwiY3VycmVudFRhcmdldCIsImNvbmZpcm0iLCJwcmV2ZW50RGVmYXVsdCIsIl90aGlzMiIsIiRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMiLCJzdWJtaXRGb3JtIiwiZmluZCIsInJlbW92ZSIsImVhY2giLCJpbmRleCIsInByb2R1Y3RDaGVja2JveCIsInByb2R1Y3RJZCIsInZhbCIsIiRpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhcHBlbmQiLCJzd2FsIiwiZmlyZSIsInRleHQiLCJzZWxlY3RJdGVtIiwiaWNvbiIsInZhbGlkYXRpb25Nb2RlbCIsInZhbGlkYXRpb24iLCJzdGF0ZVNlbGVjdG9yIiwiJHN0YXRlRWxlbWVudCIsImFkZHJlc3NWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJhZGQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJWYWxpZGF0b3JzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlcnJvck1lc3NhZ2UiLCJmb3JtU3VibWl0IiwiaSIsImVsZSIsInBhcnNlSW50IiwiX3RoaXMzIiwiYXR0ciIsImZpcnN0TmFtZUxhYmVsIiwibGFzdE5hbWVMYWJlbCIsImNvbXBhbnlMYWJlbCIsInBob25lTGFiZWwiLCJhZGRyZXNzMUxhYmVsIiwiYWRkcmVzczJMYWJlbCIsImNpdHlMYWJlbCIsImNvdW50cnlMYWJlbCIsImNob29zZUNvdW50cnlMYWJlbCIsInN0YXRlTGFiZWwiLCJwb3N0YWxDb2RlTGFiZWwiLCJwYXltZW50TWV0aG9kU2VsZWN0b3IiLCJwYXltZW50TWV0aG9kVmFsaWRhdG9yIiwiY2FyZFR5cGUiLCJfcmVmIiwidGFyZ2V0IiwiY3JlZGl0Q2FyZFR5cGUiLCJzaWJsaW5ncyIsImNzcyIsIkNDVmFsaWRhdG9ycyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJDQ0Zvcm1hdHRlcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsIl9yZWR1Y2UiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsIml0ZW0iLCJyZWZPYmoiLCJjb3VudHJ5IiwiX2ZpbmQiLCJjb3VudHJpZXMiLCJfcmVmMiIsInN0YXRlIiwic3RhdGVzIiwiX3JlZjMiLCJjb3VudHJ5X2NvZGUiLCJjb2RlIiwic3RhdGVfb3JfcHJvdmluY2VfY29kZSIsImRlZmF1bHRfaW5zdHJ1bWVudCIsInN0b3JlSW5zdHJ1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInBheW1lbnRNZXRob2RzVXJsIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCJwYXNzd29yZFNlbGVjdG9yIiwiJHBhc3N3b3JkRWxlbWVudCIsInBhc3N3b3JkMlNlbGVjdG9yIiwiJHBhc3N3b3JkMkVsZW1lbnQiLCJjdXJyZW50UGFzc3dvcmRTZWxlY3RvciIsIiRjdXJyZW50UGFzc3dvcmQiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImluYm94VmFsaWRhdG9yIiwiTnVtYmVyIiwiZW50ZXJPcmRlck51bSIsImVudGVyU3ViamVjdCIsImVudGVyTWVzc2FnZSIsIlBhZ2VNYW5hZ2VyIiwiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJtaW5fZGF0ZSIsIm1heF9kYXRlIiwiaW52YWxpZE1lc3NhZ2UiLCJmb3JtRWxlbWVudElkIiwibWluU3BsaXQiLCJzcGxpdCIsIm1heFNwbGl0IiwibWluRGF0ZSIsIkRhdGUiLCJtYXhEYXRlIiwidHJpZ2dlcmVkQnkiLCJkYXkiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbiIsImZvcm1GaWVsZElkIiwicHJpbWFyeVNlbGVjdG9yIiwic2Vjb25kYXJ5U2VsZWN0b3IiLCJjaGVja2JveCIsImNoZWNrZWQiLCJsYWJlbCIsImJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uIiwiYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24iLCJmb3JtRmllbGRTZWxlY3RvciIsIm1pbiIsIm1heCIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZmllbGRWYWxpZGF0aW9ucyIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsInJlcXVpcmVkIiwiZWxlbWVudCIsIiRpbnB1dEVsZW1lbnQiLCJ0YWdOYW1lIiwiZ2V0IiwiaW5wdXROYW1lIiwiZWxlbWVudFNlbGVjdG9yIiwiJGZvcm0iLCJ2YWxpZGF0aW9uc1RvUGVyZm9ybSIsImlucHV0IiwiY29uY2F0Iiwib21pdE51bGxTdHJpbmciLCJrZXkiLCJjcmVkaXRjYXJkcyIsImNhcmQiLCJwYXJzZSIsImRvbmUiLCJmYWlsIiwicGF5bWVudHNVcmwiLCJzaG9wcGVySWQiLCJzdG9yZUhhc2giLCJ2YXVsdFRva2VuIiwicHJvdmlkZXJfaWQiLCJjdXJyZW5jeV9jb2RlIiwiY3JlZGl0X2NhcmRfbnVtYmVyIiwibmFtZV9vbl9jYXJkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0YWxfY29kZSIsImNvbXBhbnkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsImV4cGlyeSIsImFqYXgiLCJkYXRhVHlwZSIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5zdHJ1bWVudCIsImNhcmRob2xkZXJfbmFtZSIsIm51bWJlciIsImV4cGlyeV9tb250aCIsImV4cGlyeV95ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiYmlsbGluZ19hZGRyZXNzIiwiRm9ybWF0dGVycyIsInJlZlRhcmdldCIsImZvcm1hdCIsIl9yZWY0Iiwid2hpY2giLCJ0ZXN0Iiwic2xpY2UiLCJyZXBsYWNlIiwidmFsaWRhdG9yIiwiaXNWYWxpZCIsImlzUGFzdCIsImN2YyIsIndlYWtNYXAiLCJXZWFrTWFwIiwiU3dhbCIsInN3ZWV0QWxlcnQiLCJtaXhpbiIsImJ1dHRvbnNTdHlsaW5nIiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRVY7QUFDRztBQUNnQjtBQUNBO0FBQ3FDO0FBQzJDO0FBQzFGO0FBQUEsSUFFbkJBLE9BQU8sMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixPQUFBLEVBQUFDLFlBQUE7RUFDeEIsU0FBQUQsUUFBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBRWRDLEtBQUEsQ0FBS0UsTUFBTSxHQUFHQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFDNUNILEtBQUEsQ0FBS0ksS0FBSyxHQUFHRCxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQUMsT0FBQUgsS0FBQTtFQUMzQjtFQUFDLElBQUFLLE1BQUEsR0FBQVQsT0FBQSxDQUFBVSxTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOLElBQU1DLGdCQUFnQixHQUFHQyx1RUFBWSxDQUFDLDhCQUE4QixDQUFDO0lBQ3JFLElBQU1DLFlBQVksR0FBR0QsdUVBQVksQ0FBQyx5QkFBeUIsQ0FBQztJQUM1RCxJ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QzFCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsV0FBVyxFQUFFO0lBQ1RDLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCQyxZQUFZLEVBQUU7RUFDbEI7QUFDSixDQUFDLENBQUM7O0FBRUY7QUFDZU4sbUVBQUksRSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBXaXNobGlzdCBmcm9tICcuL3dpc2hsaXN0JztcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtLCBWYWxpZGF0b3JzLCBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVkaXRDYXJkVHlwZSwgc3RvcmVJbnN0cnVtZW50LCBWYWxpZGF0b3JzIGFzIENDVmFsaWRhdG9ycywgRm9ybWF0dGVycyBhcyBDQ0Zvcm1hdHRlcnMgfSBmcm9tICcuL2NvbW1vbi9wYXltZW50LW1ldGhvZCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XG5cbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIHRlbXBsYXRlXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGVzIHdpc2ggbGlzdCBKU1xuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCRlZGl0QWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGludm9pY2VCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAvIDIgLSA0NTA7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDIgLSAzMjA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdvcmRlckludm9pY2UnLCBgd2lkdGg9OTAwLGhlaWdodD02NTAsbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sc2Nyb2xsYmFycz0xYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGluYm94Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBheW1lbnRNZXRob2RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHJlb3JkZXJGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcbiAgICAgKi9cbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmREZWxldGVQYXltZW50TWV0aG9kKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuc2VsZWN0SXRlbSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xuICAgICAgICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dIFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXSc7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKHN0YXRlU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBhZGRyZXNzVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oYWRkcmVzc1ZhbGlkYXRvciwgZmllbGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkYWRkcmVzc0Zvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJGFjY291bnRSZXR1cm5Gb3JtLmRhdGEoJ2FjY291bnRSZXR1cm5Gb3JtRXJyb3InKTtcblxuICAgICAgICAkYWNjb3VudFJldHVybkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtU3VibWl0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgd2UgZmluZCBhIG5vbi16ZXJvIHZhbHVlIGluIHRoZSBkcm9wZG93biBmb3IgcXVhbnRpdHlcbiAgICAgICAgICAgICQoJ1tuYW1lXj1cInJldHVybl9xdHlcIl0nLCAkYWNjb3VudFJldHVybkZvcm0pLmVhY2goKGksIGVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkKGVsZSkudmFsKCksIDEwKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtU3VibWl0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IG91dCBvZiBsb29wIGlmIHdlIGZvdW5kIGF0IGxlYXN0IG9uZSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtU3VibWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKSB7XG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNmaXJzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5maXJzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNsYXN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0Lmxhc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwaG9uZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucGhvbmVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczEuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MxTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NpdHkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNpdHlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb3VudHJ5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVzZWxlY3RcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvdW50cnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBwcmVmaXg6IFwiJHt0aGlzLmNvbnRleHQuY2hvb3NlQ291bnRyeUxhYmVsfVwiIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNzdGF0ZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuc3RhdGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKTtcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RWYWxpZGF0b3IgPSBub2QoeyBzdWJtaXQ6IGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAgfSk7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdYCk7XG5cbiAgICAgICAgbGV0ICRsYXN0O1xuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBmaWVsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVzZSBjcmVkaXQgY2FyZCBudW1iZXIgaW5wdXQgbGlzdGVuZXIgdG8gaGlnaGxpZ2h0IGNyZWRpdCBjYXJkIHR5cGVcbiAgICAgICAgbGV0IGNhcmRUeXBlO1xuICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBjYXJkVHlwZSA9IGNyZWRpdENhcmRUeXBlKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoY2FyZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nW2FsdD1cIiR7Y2FyZFR5cGV9XCJdYCkuc2libGluZ3MoKS5jc3MoJ29wYWNpdHknLCAnLjInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ2ApLmNzcygnb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCB2YWxpZGF0aW9uXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gLCB0aGlzLmNvbnRleHQuY3JlZGl0Q2FyZE51bWJlcik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRFeHBpcmF0aW9uVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCwgdGhpcy5jb250ZXh0LmV4cGlyYXRpb24pO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwibmFtZV9vbl9jYXJkXCJdYCwgdGhpcy5jb250ZXh0Lm5hbWVPbkNhcmQpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3Z2VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjdnZcIl1gLCB0aGlzLmNvbnRleHQuY3Z2LCAoKSA9PiBjYXJkVHlwZSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIGZvcm1hdFxuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKTtcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldEV4cGlyYXRpb25Gb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWApO1xuXG4gICAgICAgIC8vIEJpbGxpbmcgYWRkcmVzcyB2YWxpZGF0aW9uXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gUGVyZm9ybSBmaW5hbCBmb3JtIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZm9ybSBkYXRhIGFuZCByZWR1Y2UgaXQgdG8gb2JqZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF8ucmVkdWNlKCRwYXltZW50TWV0aG9kRm9ybS5zZXJpYWxpemVBcnJheSgpLCAob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcbiAgICAgICAgICAgICAgICAgICAgcmVmT2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmT2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBjb3VudHJ5IGFuZCBzdGF0ZSBjb2RlXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvdW50cnkgJiYgXy5maW5kKGNvdW50cnkuc3RhdGVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5X2NvZGUgPSBjb3VudHJ5ID8gY291bnRyeS5jb2RlIDogZGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEluc3RydW1lbnRcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjcmVkaXQgY2FyZFxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNvbnRleHQucGF5bWVudE1ldGhvZHNVcmw7XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmdlbmVyaWNfZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xuICAgICAgICBjb25zdCBmb3JtRWRpdFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nO1xuICAgICAgICBjb25zdCBlZGl0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJyR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBlbWFpbFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkVtYWlsQWRkcmVzc1wiXWA7XG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkNvbmZpcm1QYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkN1cnJlbnRQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRjdXJyZW50UGFzc3dvcmQgPSAkKGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBUaGlzIG9ubHkgaGFuZGxlcyB0aGUgY3VzdG9tIGZpZWxkcywgc3RhbmRhcmQgZmllbGRzIGFyZSBhZGRlZCBiZWxvd1xuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGVkaXRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgZWRpdFZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGN1cnJlbnRQYXNzd29yZCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjdXJyZW50UGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gJycgJiYgJHBhc3N3b3JkRWxlbWVudC52YWwoKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmN1cnJlbnRQYXNzd29yZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2ZpcnN0bmFtZSddYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9sYXN0bmFtZSddYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQubGFzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkZWRpdEFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoZWRpdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pIHtcbiAgICAgICAgY29uc3QgaW5ib3hWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICBpbmJveFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHNlbGVjdFtuYW1lPVwibWVzc2FnZV9vcmRlcl9pZFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcih2YWwpICE9PSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck9yZGVyTnVtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFtuYW1lPVwibWVzc2FnZV9zdWJqZWN0XCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJTdWJqZWN0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSB0ZXh0YXJlYVtuYW1lPVwibWVzc2FnZV9jb250ZW50XCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJNZXNzYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGluYm94Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaW5ib3hWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChpbmJveFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogVmFsaWRhdGUgdGhhdCB0aGUgZ2l2ZW4gZGF0ZSBmb3IgdGhlIGRheS9tb250aC95ZWFyIHNlbGVjdCBpbnB1dHMgaXMgd2l0aGluIHBvdGVudGlhbCByYW5nZVxuICogQHBhcmFtICRmb3JtRmllbGRcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXG4gKiBAcmV0dXJucyB7e3NlbGVjdG9yOiBzdHJpbmcsIHRyaWdnZXJlZEJ5OiBzdHJpbmcsIHZhbGlkYXRlOiBGdW5jdGlvbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmd9fVxuICovXG5mdW5jdGlvbiBidWlsZERhdGVWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24pIHtcbiAgICAvLyBObyBkYXRlIHJhbmdlIHJlc3RyaWN0aW9uLCBza2lwXG4gICAgaWYgKHZhbGlkYXRpb24ubWluX2RhdGUgJiYgdmFsaWRhdGlvbi5tYXhfZGF0ZSkge1xuICAgICAgICBjb25zdCBpbnZhbGlkTWVzc2FnZSA9IGBZb3VyIGNob3NlbiBkYXRlIG11c3QgZmFsbCBiZXR3ZWVuICR7dmFsaWRhdGlvbi5taW5fZGF0ZX0gYW5kICR7dmFsaWRhdGlvbi5tYXhfZGF0ZX0uYDtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgbWluU3BsaXQgPSB2YWxpZGF0aW9uLm1pbl9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1heFNwbGl0ID0gdmFsaWRhdGlvbi5tYXhfZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBtaW5EYXRlID0gbmV3IERhdGUobWluU3BsaXRbMF0sIG1pblNwbGl0WzFdIC0gMSwgbWluU3BsaXRbMl0pO1xuICAgICAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUobWF4U3BsaXRbMF0sIG1heFNwbGl0WzFdIC0gMSwgbWF4U3BsaXRbMl0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RvcjogYCMke2Zvcm1FbGVtZW50SWR9IHNlbGVjdFtkYXRhLWxhYmVsPVwieWVhclwiXWAsXG4gICAgICAgICAgICB0cmlnZ2VyZWRCeTogYCMke2Zvcm1FbGVtZW50SWR9IHNlbGVjdDpub3QoW2RhdGEtbGFiZWw9XCJ5ZWFyXCJdKWAsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBOdW1iZXIoJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cImRheVwiXScpLnZhbCgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwibW9udGhcIl0nKS52YWwoKSkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9zZW5EYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG5cbiAgICAgICAgICAgICAgICBjYihjaG9zZW5EYXRlID49IG1pbkRhdGUgJiYgY2hvc2VuRGF0ZSA8PSBtYXhEYXRlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuLyoqXG4gKiBXZSB2YWxpZGF0ZSBjaGVja2JveGVzIHNlcGFyYXRlbHkgZnJvbSBzaW5nbGUgaW5wdXQgZmllbGRzLCBhcyB0aGV5IG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgY2hlY2tlZCBvcHRpb25cbiAqIGZyb20gbWFueSBkaWZmZXJlbnQgaW5wdXRzXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqL1xuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbigkZm9ybUZpZWxkLCB2YWxpZGF0aW9uKSB7XG4gICAgY29uc3QgZm9ybUZpZWxkSWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XG4gICAgY29uc3QgcHJpbWFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dDpmaXJzdC1vZi10eXBlYDtcbiAgICBjb25zdCBzZWNvbmRhcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXRgO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3I6IHByaW1hcnlTZWxlY3RvcixcbiAgICAgICAgdHJpZ2dlcmVkQnk6IHNlY29uZGFyeVNlbGVjdG9yLFxuICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoc2Vjb25kYXJ5U2VsZWN0b3IpLmVhY2goKGluZGV4LCBjaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGBUaGUgJyR7dmFsaWRhdGlvbi5sYWJlbH0nIGZpZWxkIGNhbm5vdCBiZSBibGFuay5gLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlKGNiLCB2YWwpIHtcbiAgICAgICAgICAgIGNiKHZhbC5sZW5ndGggPiAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBgVGhlICcke3ZhbGlkYXRpb24ubGFiZWx9JyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuYCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3Rvcikge1xuICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFRoZSB2YWx1ZSBmb3IgJHt2YWxpZGF0aW9uLmxhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbn0gYW5kICR7dmFsaWRhdGlvbi5tYXh9LmA7XG4gICAgY29uc3QgbWluID0gTnVtYmVyKHZhbGlkYXRpb24ubWluKTtcbiAgICBjb25zdCBtYXggPSBOdW1iZXIodmFsaWRhdGlvbi5tYXgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiJHt2YWxpZGF0aW9uLm5hbWV9XCJdYCxcbiAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJWYWwgPSBOdW1iZXIodmFsKTtcblxuICAgICAgICAgICAgY2IobnVtYmVyVmFsID49IG1pbiAmJiBudW1iZXJWYWwgPD0gbWF4KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICB9O1xufVxuXG5cbmZ1bmN0aW9uIGJ1aWxkVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCkge1xuICAgIGNvbnN0IHZhbGlkYXRpb24gPSAkdmFsaWRhdGVhYmxlRWxlbWVudC5kYXRhKCd2YWxpZGF0aW9uJyk7XG4gICAgY29uc3QgZmllbGRWYWxpZGF0aW9ucyA9IFtdO1xuICAgIGNvbnN0IGZvcm1GaWVsZFNlbGVjdG9yID0gYCMkeyR2YWxpZGF0ZWFibGVFbGVtZW50LmF0dHIoJ2lkJyl9YDtcblxuICAgIGlmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdkYXRlY2hvb3NlcicpIHtcbiAgICAgICAgY29uc3QgZGF0ZVZhbGlkYXRpb24gPSBidWlsZERhdGVWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50LCB2YWxpZGF0aW9uKTtcblxuICAgICAgICBpZiAoZGF0ZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChkYXRlVmFsaWRhdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb24ucmVxdWlyZWQgJiYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2NoZWNrYm94c2VsZWN0JyB8fCB2YWxpZGF0aW9uLnR5cGUgPT09ICdyYWRpb3NlbGVjdCcpKSB7XG4gICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50LCB2YWxpZGF0aW9uKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJHZhbGlkYXRlYWJsZUVsZW1lbnQuZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0RWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0RWxlbWVudC5nZXQoMCkudGFnTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0TmFtZSA9ICRpbnB1dEVsZW1lbnQuYXR0cignbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFNlbGVjdG9yID0gYCR7Zm9ybUZpZWxkU2VsZWN0b3J9ICR7dGFnTmFtZX1bbmFtZT1cIiR7aW5wdXROYW1lfVwiXWA7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdudW1iZXJvbmx5Jykge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3RvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24ucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgZWxlbWVudFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZFZhbGlkYXRpb25zO1xufVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgdmFsaWRhdGlvbiBtb2RlbCBmb3IgZHluYW1pYyBmb3Jtc1xuICogQHBhcmFtICRmb3JtXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkZm9ybSkge1xuICAgIGxldCB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IFtdO1xuXG4gICAgJGZvcm0uZmluZCgnW2RhdGEtdmFsaWRhdGlvbl0nKS5lYWNoKChpbmRleCwgaW5wdXQpID0+IHtcbiAgICAgICAgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSB2YWxpZGF0aW9uc1RvUGVyZm9ybS5jb25jYXQoYnVpbGRWYWxpZGF0aW9uKCQoaW5wdXQpKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbnNUb1BlcmZvcm07XG59XG4iLCJpbXBvcnQgY3JlZGl0Y2FyZHMgZnJvbSAnY3JlZGl0Y2FyZHMnO1xuXG4vKipcbiAqIE9taXQgbnVsbCBvciBlbXB0eSBzdHJpbmcgcHJvcGVydGllcyBvZiBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XG5cbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVmT2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWZPYmo7XG59O1xuXG4vKipcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgaGVhZGVyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZhaWwgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHVuc3VjY2Vzc2Z1bCByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcbiAgICAvLyBIb3N0bmFtZSwgSWRzICYgVG9rZW5cbiAgICBwYXltZW50c1VybCxcbiAgICBzaG9wcGVySWQsXG4gICAgc3RvcmVIYXNoLFxuICAgIHZhdWx0VG9rZW4sXG59LCB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBQcm92aWRlciBJbmZvXG4gICAgcHJvdmlkZXJfaWQsXG4gICAgY3VycmVuY3lfY29kZSxcblxuICAgIC8vIEluc3RydW1lbnQgRGV0YWlsc1xuICAgIGNyZWRpdF9jYXJkX251bWJlcixcbiAgICBleHBpcmF0aW9uLFxuICAgIG5hbWVfb25fY2FyZCxcbiAgICBjdnYsXG4gICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuXG4gICAgLy8gQmlsbGluZyBBZGRyZXNzXG4gICAgYWRkcmVzczEsXG4gICAgYWRkcmVzczIsXG4gICAgY2l0eSxcbiAgICBwb3N0YWxfY29kZSxcbiAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgIGNvdW50cnlfY29kZSxcbiAgICBjb21wYW55LFxuICAgIGZpcnN0X25hbWUsXG4gICAgbGFzdF9uYW1lLFxuICAgIGVtYWlsLFxuICAgIHBob25lLFxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0sIGRvbmUsIGZhaWwpID0+IHtcbiAgICBjb25zdCBleHBpcnkgPSBleHBpcmF0aW9uLnNwbGl0KCcvJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGAke3BheW1lbnRzVXJsfS9zdG9yZXMvJHtzdG9yZUhhc2h9L2N1c3RvbWVycy8ke3Nob3BwZXJJZH0vc3RvcmVkX2luc3RydW1lbnRzYCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdmF1bHRUb2tlbixcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpbnN0cnVtZW50OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhcmQnLFxuICAgICAgICAgICAgICAgIGNhcmRob2xkZXJfbmFtZTogbmFtZV9vbl9jYXJkLFxuICAgICAgICAgICAgICAgIG51bWJlcjogY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZShjcmVkaXRfY2FyZF9udW1iZXIpLFxuICAgICAgICAgICAgICAgIGV4cGlyeV9tb250aDogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLFxuICAgICAgICAgICAgICAgIGV4cGlyeV95ZWFyOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSxcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25fdmFsdWU6IGN2dixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3M6IG9taXROdWxsU3RyaW5nKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzMSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzMixcbiAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlLFxuICAgICAgICAgICAgICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgICAgICAgICAgICAgY291bnRyeV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3ZpZGVyX2lkLFxuICAgICAgICAgICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAgICAgLmRvbmUoZG9uZSlcbiAgICAgICAgLmZhaWwoZmFpbCk7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybWF0dGVycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gY3JlZGl0Y2FyZHMuY2FyZC5mb3JtYXQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25Gb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQudmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzAtMV0pKFszLTldKSQvZywgJzAkMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXGRcXC9dfF5bXFwvXSokL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmICFjcmVkaXRjYXJkcy5leHBpcmF0aW9uLmlzUGFzdChjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksIGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGN2dlxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxuICAgICAqL1xuICAgIHNldEN2dlZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UsIGNhcmRUeXBlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmN2Yy5pc1ZhbGlkKHZhbCwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgJ3dlYWttYXAtcG9seWZpbGwnO1xuaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vLyBXZWFrTWFwIHdpbGwgZGVmaW5lZCBpbiB0aGUgZ2xvYmFsIHNjb3BlIGlmIG5hdGl2ZSBXZWFrTWFwIGlzIG5vdCBzdXBwb3J0ZWQuXG5jb25zdCB3ZWFrTWFwID0gbmV3IFdlYWtNYXAoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4vLyBTZXQgZGVmYXVsdHMgZm9yIHN3ZWV0YWxlcnQyIHBvcHVwIGJveGVzXG5jb25zdCBTd2FsID0gc3dlZXRBbGVydC5taXhpbih7XG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgIGNvbmZpcm1CdXR0b246ICdidXR0b24nLFxuICAgICAgICBjYW5jZWxCdXR0b246ICdidXR0b24nLFxuICAgIH0sXG59KTtcblxuLy8gUmUtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBTd2FsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
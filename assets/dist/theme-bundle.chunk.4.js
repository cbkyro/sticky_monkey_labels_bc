(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
});

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiftCertificate; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var GiftCertificate = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(GiftCertificate, _PageManager);
  function GiftCertificate(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    var $certBalanceForm = $('#gift-certificate-balance');
    var purchaseModel = {
      recipientName: function recipientName(val) {
        return val.length;
      },
      recipientEmail: function recipientEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      senderName: function senderName(val) {
        return val.length;
      },
      senderEmail: function senderEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      customAmount: function customAmount(value, min, max) {
        return value && value >= min && value <= max;
      },
      setAmount: function setAmount(value, options) {
        var found = false;
        options.forEach(function (option) {
          if (option === value) {
            found = true;
            return false;
          }
        });
        return found;
      }
    };
    var $purchaseForm = $('#gift-certificate-form');
    var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
    var purchaseValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: '#gift-certificate-form input[type="submit"]',
      delay: 300
    });
    if ($customAmounts.length) {
      var $element = $purchaseForm.find('input[name="certificate_amount"]');
      var min = $element.data('min');
      var minFormatted = $element.data('minFormatted');
      var max = $element.data('max');
      var maxFormatted = $element.data('maxFormatted');
      purchaseValidator.add({
        selector: '#gift-certificate-form input[name="certificate_amount"]',
        validate: function validate(cb, val) {
          var numberVal = Number(val);
          if (!numberVal) {
            cb(false);
          }
          cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: "You must enter a certificate amount between " + minFormatted + " and " + maxFormatted + "."
      });
    }
    purchaseValidator.add([{
      selector: '#gift-certificate-form input[name="to_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientName(val);
        cb(result);
      },
      errorMessage: _this.context.toName
    }, {
      selector: '#gift-certificate-form input[name="to_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientEmail(val);
        cb(result);
      },
      errorMessage: _this.context.toEmail
    }, {
      selector: '#gift-certificate-form input[name="from_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderName(val);
        cb(result);
      },
      errorMessage: _this.context.fromName
    }, {
      selector: '#gift-certificate-form input[name="from_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderEmail(val);
        cb(result);
      },
      errorMessage: _this.context.fromEmail
    }, {
      selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
      triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();
        cb(typeof val === 'string');
      },
      errorMessage: _this.context.certTheme
    }, {
      selector: '#gift-certificate-form input[name="agree"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }, {
      selector: '#gift-certificate-form input[name="agree2"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }]);
    if ($certBalanceForm.length) {
      var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);
      $certBalanceForm.on('submit', function () {
        balanceVal.performCheck();
        if (!balanceVal.areAll('valid')) {
          return false;
        }
      });
    }
    $purchaseForm.on('submit', function (event) {
      purchaseValidator.performCheck();
      if (!purchaseValidator.areAll('valid')) {
        return event.preventDefault();
      }
    });
    $('#gift-certificate-preview').click(function (event) {
      event.preventDefault();
      purchaseValidator.performCheck();
      if (!purchaseValidator.areAll('valid')) {
        return;
      }
      var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["defaultModal"])();
      var previewUrl = $(event.currentTarget).data('previewUrl') + "&" + $purchaseForm.serialize();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(previewUrl, {}, function (err, content) {
        if (err) {
          return modal.updateContent(_this.context.previewError);
        }
        modal.updateContent(content, {
          wrap: true
        });
      });
    });
    return _this;
  }
  var _proto = GiftCertificate.prototype;
  _proto.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
    var balanceValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $balanceForm.find('input[type="submit"]')
    });
    balanceValidator.add({
      selector: $balanceForm.find('input[name="giftcertificatecode"]'),
      validate: function validate(cb, val) {
        cb(Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__["default"])(val));
      },
      errorMessage: 'You must enter a certificate code.'
    });
    return balanceValidator;
  };
  return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbW9kZWxzL2Zvcm1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9naWZ0LWNlcnRpZmljYXRlLmpzIl0sIm5hbWVzIjpbImNlcnQiLCJmb3JtcyIsImVtYWlsIiwidmFsdWUiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwibGVuZ3RoIiwiR2lmdENlcnRpZmljYXRlIiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwiJGNlcnRCYWxhbmNlRm9ybSIsIiQiLCJwdXJjaGFzZU1vZGVsIiwicmVjaXBpZW50TmFtZSIsInZhbCIsInJlY2lwaWVudEVtYWlsIiwiZm9ybU1vZGVsIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzZW5kZXJOYW1lIiwic2VuZGVyRW1haWwiLCJjdXN0b21BbW91bnQiLCJtaW4iLCJtYXgiLCJzZXRBbW91bnQiLCJvcHRpb25zIiwiZm91bmQiLCJmb3JFYWNoIiwib3B0aW9uIiwiJHB1cmNoYXNlRm9ybSIsIiRjdXN0b21BbW91bnRzIiwiZmluZCIsInB1cmNoYXNlVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwiZGVsYXkiLCIkZWxlbWVudCIsImRhdGEiLCJtaW5Gb3JtYXR0ZWQiLCJtYXhGb3JtYXR0ZWQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJudW1iZXJWYWwiLCJOdW1iZXIiLCJlcnJvck1lc3NhZ2UiLCJyZXN1bHQiLCJ0b05hbWUiLCJ0b0VtYWlsIiwiZnJvbU5hbWUiLCJmcm9tRW1haWwiLCJ0cmlnZ2VyZWRCeSIsImNlcnRUaGVtZSIsImdldCIsImNoZWNrZWQiLCJhZ3JlZVRvVGVybXMiLCJiYWxhbmNlVmFsIiwiY2hlY2tDZXJ0QmFsYW5jZVZhbGlkYXRvciIsIm9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwibW9kYWwiLCJkZWZhdWx0TW9kYWwiLCJwcmV2aWV3VXJsIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsIm9wZW4iLCJhcGkiLCJnZXRQYWdlIiwiZXJyIiwiY29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCJwcmV2aWV3RXJyb3IiLCJ3cmFwIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiJGJhbGFuY2VGb3JtIiwiYmFsYW5jZVZhbGlkYXRvciIsImdpZnRDZXJ0Q2hlY2tlciIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSx5RUFBVUEsSUFBSSxFQUFFO0VBQzNCLElBQUksT0FBT0EsSUFBSSxLQUFLLFFBQVEsRUFBRTtJQUMxQixPQUFPLEtBQUs7RUFDaEI7O0VBRUE7RUFDQSxPQUFPLElBQUk7QUFDZixDOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBLElBQU1DLEtBQUssR0FBRztFQUNWQyxLQUFLLFdBQUFBLE1BQUNDLEtBQUssRUFBRTtJQUNULElBQU1DLEVBQUUsR0FBRyxZQUFZO0lBQ3ZCLE9BQU9BLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7RUFDekIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUcsUUFBUSxXQUFBQSxTQUFDSCxLQUFLLEVBQUU7SUFDWixPQUFPLElBQUksQ0FBQ0ksUUFBUSxDQUFDSixLQUFLLENBQUM7RUFDL0IsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJSSxRQUFRLFdBQUFBLFNBQUNKLEtBQUssRUFBRTtJQUNaLE9BQU9BLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUM7RUFDM0I7QUFDSixDQUFDO0FBRWNQLG9FQUFLLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnFCO0FBQ1Y7QUFDbUM7QUFDcEI7QUFDRztBQUNIO0FBQUEsSUFF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LE9BQU9SLEtBQUssQ0FBQ1UsYUFBYSxDQUFDbkUsS0FBQSxDQUFLRCxPQUFPLENBQUNxRSxZQUFZLENBQUM7UUFDekQ7UUFFQVgsS0FBSyxDQUFDVSxhQUFhLENBQUNELE9BQU8sRUFBRTtVQUFFRyxJQUFJLEVBQUU7UUFBSyxDQUFDLENBQUM7TUFDaEQsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQUMsT0FBQXJFLEtBQUE7RUFDUDtFQUFDLElBQUFzRSxNQUFBLEdBQUExRSxlQUFBLENBQUEyRSxTQUFBO0VBQUFELE1BQUEsQ0FFRHBCLHlCQUF5QixHQUF6QixTQUFBQSwwQkFBMEJzQixZQUFZLEVBQUU7SUFDcEMsSUFBTUMsZ0JBQWdCLEdBQUdoRCwyREFBRyxDQUFDO01BQ3pCQyxNQUFNLEVBQUU4QyxZQUFZLENBQUNqRCxJQUFJLENBQUMsc0JBQXNCO0lBQ3BELENBQUMsQ0FBQztJQUVGa0QsZ0JBQWdCLENBQUN6QyxHQUFHLENBQUM7TUFDakJDLFFBQVEsRUFBRXVDLFlBQVksQ0FBQ2pELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztNQUNoRVcsUUFBUSxXQUFBQSxTQUFDQyxFQUFFLEVBQUU3QixHQUFHLEVBQUU7UUFDZDZCLEVBQUUsQ0FBQ3VDLGtGQUFlLENBQUNwRSxHQUFHLENBQUMsQ0FBQztNQUM1QixDQUFDO01BQ0RnQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxDQUFDO0lBRUYsT0FBT21DLGdCQUFnQjtFQUMzQixDQUFDO0VBQUEsT0FBQTdFLGVBQUE7QUFBQSxFQTlMd0MrRSxxREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgZ2lmdENlcnRDaGVja2VyIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCBmb3JtTW9kZWwgZnJvbSAnLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdENlcnRpZmljYXRlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgJGNlcnRCYWxhbmNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWJhbGFuY2UnKTtcblxuICAgICAgICBjb25zdCBwdXJjaGFzZU1vZGVsID0ge1xuICAgICAgICAgICAgcmVjaXBpZW50TmFtZSh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWNpcGllbnRFbWFpbCguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1Nb2RlbC5lbWFpbCguLi5hcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW5kZXJOYW1lKHZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbmRlckVtYWlsKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybU1vZGVsLmVtYWlsKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1c3RvbUFtb3VudCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUgPj0gbWluICYmIHZhbHVlIDw9IG1heDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRBbW91bnQodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgJHB1cmNoYXNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGN1c3RvbUFtb3VudHMgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nKTtcbiAgICAgICAgY29uc3QgcHVyY2hhc2VWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIGRlbGF5OiAzMDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkY3VzdG9tQW1vdW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0ICRlbGVtZW50ID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyk7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSAkZWxlbWVudC5kYXRhKCdtaW4nKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbkZvcm1hdHRlZCA9ICRlbGVtZW50LmRhdGEoJ21pbkZvcm1hdHRlZCcpO1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gJGVsZW1lbnQuZGF0YSgnbWF4Jyk7XG4gICAgICAgICAgICBjb25zdCBtYXhGb3JtYXR0ZWQgPSAkZWxlbWVudC5kYXRhKCdtYXhGb3JtYXR0ZWQnKTtcblxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbnVtYmVyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBgWW91IG11c3QgZW50ZXIgYSBjZXJ0aWZpY2F0ZSBhbW91bnQgYmV0d2VlbiAke21pbkZvcm1hdHRlZH0gYW5kICR7bWF4Rm9ybWF0dGVkfS5gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fbmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwucmVjaXBpZW50TmFtZSh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC50b05hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnJlY2lwaWVudEVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnRvRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiZnJvbV9uYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5zZW5kZXJOYW1lKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21OYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImZyb21fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnNlbmRlckVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21FbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXTpmaXJzdC1vZi10eXBlJyxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRCeTogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdOmNoZWNrZWQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjYih0eXBlb2YgKHZhbCkgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmNlcnRUaGVtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJhZ3JlZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZ3JlZVwiXScpLmdldCgwKS5jaGVja2VkO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5hZ3JlZVRvVGVybXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiYWdyZWUyXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFncmVlMlwiXScpLmdldCgwKS5jaGVja2VkO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5hZ3JlZVRvVGVybXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoJGNlcnRCYWxhbmNlRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2VWYWwgPSB0aGlzLmNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGNlcnRCYWxhbmNlRm9ybSk7XG5cbiAgICAgICAgICAgICRjZXJ0QmFsYW5jZUZvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlVmFsLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFiYWxhbmNlVmFsLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHVyY2hhc2VGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKCFwdXJjaGFzZVZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2dpZnQtY2VydGlmaWNhdGUtcHJldmlldycpLmNsaWNrKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoIXB1cmNoYXNlVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBgJHskKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3ByZXZpZXdVcmwnKX0mJHskcHVyY2hhc2VGb3JtLnNlcmlhbGl6ZSgpfWA7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgYXBpLmdldFBhZ2UocHJldmlld1VybCwge30sIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RhbC51cGRhdGVDb250ZW50KHRoaXMuY29udGV4dC5wcmV2aWV3RXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoY29udGVudCwgeyB3cmFwOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGJhbGFuY2VGb3JtKSB7XG4gICAgICAgIGNvbnN0IGJhbGFuY2VWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkYmFsYW5jZUZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICB9KTtcblxuICAgICAgICBiYWxhbmNlVmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJGJhbGFuY2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJnaWZ0Y2VydGlmaWNhdGVjb2RlXCJdJyksXG4gICAgICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XG4gICAgICAgICAgICAgICAgY2IoZ2lmdENlcnRDaGVja2VyKHZhbCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgY2VydGlmaWNhdGUgY29kZS4nLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYmFsYW5jZVZhbGlkYXRvcjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
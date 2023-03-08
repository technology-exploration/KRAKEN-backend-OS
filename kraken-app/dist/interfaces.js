'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementStatus = exports.IdentityContext = void 0;
const fabric_common_1 = require("fabric-common");
Object.defineProperty(exports, "IdentityContext", { enumerable: true, get: function () { return fabric_common_1.IdentityContext; } });
// Status of an Agreement
var AgreementStatus;
(function (AgreementStatus) {
    AgreementStatus["ELIGIBLE"] = "ELIGIBLE";
    AgreementStatus["PAID"] = "PAID";
    AgreementStatus["ACCESS"] = "ACCESS";
})(AgreementStatus = exports.AgreementStatus || (exports.AgreementStatus = {}));

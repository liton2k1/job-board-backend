"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveStatus = exports.Gender = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (exports.Role = Role = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (exports.Gender = Gender = {}));
var ActiveStatus;
(function (ActiveStatus) {
    ActiveStatus["ACTIVE"] = "ACTIVE";
    ActiveStatus["INACTIVE"] = "INACTIVE";
    ActiveStatus["BLOCKED"] = "BLOCKED";
})(ActiveStatus || (exports.ActiveStatus = ActiveStatus = {}));

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageServices = void 0;
const contact_schema_1 = require("./contact.schema");
const sendMessage = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_schema_1.Contact.create(payload);
    return result;
});
const getAllMessageFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_schema_1.Contact.find();
    return result;
});
exports.MessageServices = {
    sendMessage,
    getAllMessageFromDB,
};

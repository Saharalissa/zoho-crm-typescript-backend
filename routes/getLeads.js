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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleRecord = void 0;
var record_operations_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record_operations");
var parameter_map_1 = require("@zohocrm/typescript-sdk/routes/parameter_map");
var header_map_1 = require("@zohocrm/typescript-sdk/routes/header_map");
var response_wrapper_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/response_wrapper");
var SampleRecord = /** @class */ (function () {
    function SampleRecord() {
    }
    SampleRecord.getRecords = function () {
        return __awaiter(this, void 0, void 0, function () {
            var moduleAPIName, recordOperations, paramInstance, headerInstance, response, responseObject, records, _i, records_1, record, createdBy, modifiedBy, tags, keyValues, keyArray, _a, keyArray_1, keyName, value, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        moduleAPIName = "Leads";
                        recordOperations = new record_operations_1.RecordOperations();
                        paramInstance = new parameter_map_1.ParameterMap();
                        return [4 /*yield*/, paramInstance.add(record_operations_1.GetRecordsParam.APPROVED, "both")];
                    case 1:
                        _b.sent();
                        headerInstance = new header_map_1.HeaderMap();
                        return [4 /*yield*/, headerInstance.add(record_operations_1.GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"))];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance)];
                    case 3:
                        response = _b.sent();
                        if (response != null) {
                            //Get the status code from response
                            console.log("Status Code: " + response.getStatusCode());
                            if ([204, 304].includes(response.getStatusCode())) {
                                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                                return [2 /*return*/];
                            }
                            responseObject = response.getObject();
                            if (responseObject != null) {
                                //Check if expected ResponseWrapper instance is received
                                if (responseObject instanceof response_wrapper_1.ResponseWrapper) {
                                    records = responseObject.getData();
                                    for (_i = 0, records_1 = records; _i < records_1.length; _i++) {
                                        record = records_1[_i];
                                        //Get the ID of each Record
                                        console.log("Record ID: " + record.getId());
                                        createdBy = record.getCreatedBy();
                                        //Check if createdBy is not null
                                        if (createdBy != null) {
                                            //Get the ID of the createdBy User
                                            console.log("Record Created By User-ID: " + createdBy.getId());
                                            //Get the name of the createdBy User
                                            console.log("Record Created By User-Name: " + createdBy.getName());
                                            //Get the Email of the createdBy User
                                            console.log("Record Created By User-Email: " + createdBy.getEmail());
                                        }
                                        //Get the CreatedTime of each Record
                                        console.log("Record CreatedTime: " + record.getCreatedTime());
                                        modifiedBy = record.getModifiedBy();
                                        //Check if modifiedBy is not null
                                        if (modifiedBy != null) {
                                            //Get the ID of the modifiedBy User
                                            console.log("Record Modified By User-ID: " + modifiedBy.getId());
                                            //Get the name of the modifiedBy User
                                            console.log("Record Modified By User-Name: " + modifiedBy.getName());
                                            //Get the Email of the modifiedBy User
                                            console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                                        }
                                        //Get the ModifiedTime of each Record
                                        console.log("Record ModifiedTime: " + record.getModifiedTime());
                                        tags = record.getTag();
                                        //Check if tags is not null
                                        if (tags != null) {
                                            tags.forEach(function (tag) {
                                                //Get the Name of each Tag
                                                console.log("Record Tag Name: " + tag.getName());
                                                //Get the Id of each Tag
                                                console.log("Record Tag ID: " + tag.getId());
                                            });
                                        }
                                        //To get particular field value
                                        console.log("Record Field Value: " + record.getKeyValue("Last_Name")); // FieldApiName
                                        console.log("Record KeyValues: ");
                                        keyValues = record.getKeyValues();
                                        keyArray = Array.from(keyValues.keys());
                                        for (_a = 0, keyArray_1 = keyArray; _a < keyArray_1.length; _a++) {
                                            keyName = keyArray_1[_a];
                                            value = keyValues.get(keyName);
                                            console.log(keyName + " : " + value);
                                        }
                                    }
                                }
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return SampleRecord;
}());
exports.SampleRecord = SampleRecord;
SampleRecord.getRecords();

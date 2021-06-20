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
exports.Records = void 0;
var record_operations_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record_operations");
var action_wrapper_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/action_wrapper");
var success_response_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/success_response");
var api_exception_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/api_exception");
var field_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/field");
var header_map_1 = require("@zohocrm/typescript-sdk/routes/header_map");
var record_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record");
var tag_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/tags/tag");
var body_wrapper_1 = require("@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/body_wrapper");
//Adding new fields
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.CONTACT_METHOD = new field_1.Field("contact_method");
    Test.CLINIC_NAME = new field_1.Field("clinic_name");
    Test.COUNTRY = new field_1.Field("country");
    Test.SOURCE = new field_1.Field("source");
    Test.MEDIUM = new field_1.Field("medium");
    Test.CAMPAIGN_NAME = new field_1.Field("campaign_name");
    Test.ADSET_NAME = new field_1.Field("adset_name");
    Test.CONTENT = new field_1.Field("content");
    return Test;
}());
var Records = /** @class */ (function () {
    function Records() {
    }
    /**
     * Create Records
     * This method is used to create records of a module and print the response.
     * @param moduleAPIName The API Name of the module to create records.
     */
    Records.createRecords = function (Last_Name, Contact_Method, Mobile, Clinic_Name, Country, City, Source, Medium, Campaign_Name, Adset_Name, Content) {
        return __awaiter(this, void 0, void 0, function () {
            var moduleAPIName, recordOperations, request, recordsArray, record, tagsArray, tag, trigger, larId, process, headerInstance, response, responseObject, actionResponses, details_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moduleAPIName = "Leads";
                        recordOperations = new record_operations_1.RecordOperations();
                        request = new body_wrapper_1.BodyWrapper();
                        recordsArray = [];
                        record = new record_1.Record();
                        /* Value to Record's fields can be provided in any of the following ways */
                        record.addFieldValue(field_1.Field.Leads.LAST_NAME, Last_Name);
                        record.addFieldValue(Test.CONTACT_METHOD, Contact_Method);
                        record.addFieldValue(field_1.Field.Leads.MOBILE, Mobile);
                        record.addFieldValue(Test.CLINIC_NAME, Clinic_Name);
                        record.addFieldValue(Test.COUNTRY, Country);
                        record.addFieldValue(field_1.Field.Leads.CITY, City);
                        record.addFieldValue(Test.SOURCE, Source);
                        record.addFieldValue(Test.MEDIUM, Medium);
                        record.addFieldValue(Test.CAMPAIGN_NAME, Campaign_Name);
                        record.addFieldValue(Test.ADSET_NAME, Adset_Name);
                        record.addFieldValue(Test.CONTENT, Content);
                        tagsArray = [];
                        tag = new tag_1.Tag();
                        tag.setName("Testtask");
                        tagsArray.push(tag);
                        //Add Record instance to the array
                        recordsArray.push(record);
                        //Set the array to data in BodyWrapper instance
                        request.setData(recordsArray);
                        trigger = [];
                        trigger.push("approval");
                        trigger.push("workflow");
                        trigger.push("blueprint");
                        //Set the array containing the trigger operations to be run
                        request.setTrigger(trigger);
                        larId = "34096432157065";
                        //Set the larId
                        request.setLarId(larId);
                        process = ["review_process"];
                        //Set the array containing the process to be run
                        request.setProcess(process);
                        headerInstance = new header_map_1.HeaderMap();
                        return [4 /*yield*/, recordOperations.createRecords(moduleAPIName, request)];
                    case 1:
                        response = _a.sent();
                        if (response != null) {
                            //Get the status code from response
                            console.log("Status Code: " + response.getStatusCode());
                            responseObject = response.getObject();
                            if (responseObject != null) {
                                //Check if expected ActionWrapper instance is received
                                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                                    actionResponses = responseObject.getData();
                                    actionResponses.forEach(function (actionResponse) {
                                        //Check if the request is successful
                                        if (actionResponse instanceof success_response_1.SuccessResponse) {
                                            //Get the Status
                                            console.log("Status: " + actionResponse.getStatus().getValue());
                                            //Get the Code
                                            console.log("Code: " + actionResponse.getCode().getValue());
                                            console.log("Details");
                                            //Get the details map
                                            var details_2 = actionResponse.getDetails();
                                            if (details_2 != null) {
                                                Array.from(details_2.keys()).forEach(function (key) {
                                                    console.log(key + ": " + details_2.get(key));
                                                });
                                            }
                                            console.log("Message: " + actionResponse.getMessage().getValue());
                                        }
                                        //Check if the request returned an exception
                                        else if (actionResponse instanceof api_exception_1.APIException) {
                                            //Get the Status
                                            console.log("Status: " + actionResponse.getStatus().getValue());
                                            //Get the Code
                                            console.log("Code: " + actionResponse.getCode().getValue());
                                            console.log("Details");
                                            //Get the details map
                                            var details_3 = actionResponse.getDetails();
                                            if (details_3 != null) {
                                                Array.from(details_3.keys()).forEach(function (key) {
                                                    console.log(key + ": " + details_3.get(key));
                                                });
                                            }
                                            //Get the Message
                                            console.log("Message: " + actionResponse.getMessage().getValue());
                                        }
                                    });
                                }
                                //Check if the request returned an exception
                                else if (responseObject instanceof api_exception_1.APIException) {
                                    //Get the Status
                                    console.log("Status: " + responseObject.getStatus().getValue());
                                    //Get the Code
                                    console.log("Code: " + responseObject.getCode().getValue());
                                    console.log("Details");
                                    details_1 = responseObject.getDetails();
                                    if (details_1 != null) {
                                        Array.from(details_1.keys()).forEach(function (key) {
                                            console.log(key + ": " + details_1.get(key));
                                        });
                                    }
                                    //Get the Message
                                    console.log("Message: " + responseObject.getMessage().getValue());
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Records;
}());
exports.Records = Records;

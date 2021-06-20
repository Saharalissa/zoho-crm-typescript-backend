import {DeleteRecordParam,DeleteRecordsParam,GetDeletedRecordsHeader,GetDeletedRecordsParam,GetMassUpdateStatusParam,GetRecordHeader,GetRecordParam,GetRecordsHeader,GetRecordsParam,RecordOperations,SearchRecordsParam} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record_operations"
import {ActionWrapper} from '@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/action_wrapper';
import {SuccessResponse} from '@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/success_response';
import {APIException} from '@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/api_exception';
import {Field} from '@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/field';
import { HeaderMap } from "@zohocrm/typescript-sdk/routes/header_map";
import { APIResponse } from "@zohocrm/typescript-sdk/routes/controllers/api_response";
import { Record } from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record";
import { Tag } from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/tags/tag";
import { BodyWrapper } from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/body_wrapper";
import { ActionHandler } from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/action_handler";
import { ActionResponse } from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/action_response";

//Adding new fields
class Test{
 public static CONTACT_METHOD:Field<string> = new Field<string>("contact_method");
 public static CLINIC_NAME:Field<string> = new Field<string>("clinic_name");
 public static COUNTRY:Field<string> = new Field<string>("country");
 public static SOURCE:Field<string> = new Field<string>("source");
 public static MEDIUM:Field<string> = new Field<string>("medium");
 public static CAMPAIGN_NAME:Field<string> = new Field<string>("campaign_name");
 public static ADSET_NAME:Field<string> = new Field<string>("adset_name");
 public static CONTENT:Field<string> = new Field<string>("content");
}

export class Records{
    /**
     * Create Records
     * This method is used to create records of a module and print the response.
     * @param moduleAPIName The API Name of the module to create records.
     */
    public static async createRecords(Last_Name: string, Contact_Method:string, Mobile: string, Clinic_Name:string, Country:string, City:string,
        Source:string, Medium:string, Campaign_Name:string, Adset_Name:string, Content:string){// here it is
        // public static async createRecords(moduleAPIName: string ){
        //example
        let  moduleAPIName = "Leads";

        //Get instance of RecordOperations Class
        let recordOperations: RecordOperations = new RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: BodyWrapper = new BodyWrapper();

        //Array to hold Record instances
        let recordsArray: Record[] = [];

        //Get instance of Record Class
        let record: Record = new Record();

        /* Value to Record's fields can be provided in any of the following ways */
        
        record.addFieldValue(Field.Leads.LAST_NAME, Last_Name);
        record.addFieldValue(Test.CONTACT_METHOD , Contact_Method );
        record.addFieldValue(Field.Leads.MOBILE,  Mobile);
        record.addFieldValue(Test.CLINIC_NAME,  Clinic_Name);
        record.addFieldValue(Test.COUNTRY, Country );
        record.addFieldValue(Field.Leads.CITY,  City);
        record.addFieldValue(Test.SOURCE,  Source);
        record.addFieldValue(Test.MEDIUM, Medium);
        record.addFieldValue(Test.CAMPAIGN_NAME,  Campaign_Name);
        record.addFieldValue(Test.ADSET_NAME, Adset_Name);
        record.addFieldValue(Test.CONTENT, Content);

        let tagsArray: Tag[] = [];

        let tag: Tag = new Tag();

        tag.setName("Testtask");

        tagsArray.push(tag);

        //Add Record instance to the array
        recordsArray.push(record);

        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        //Set the array containing the trigger operations to be run
        request.setTrigger(trigger);

        let larId: string = "34096432157065";

        //Set the larId
        request.setLarId(larId);

        let process: string[] = ["review_process"];

        //Set the array containing the process to be run
        request.setProcess(process);

        //Get instance of HeaderMap Class
        let headerInstance: HeaderMap = new HeaderMap();

        //Call createRecords method that takes BodyWrapper instance and moduleAPIName as parameters
        let response: APIResponse<ActionHandler> = await recordOperations.createRecords(moduleAPIName, request);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ActionHandler = response.getObject();

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received
                if(responseObject instanceof ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ActionResponse[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if(actionResponse instanceof SuccessResponse){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string,any> = actionResponse.getDetails();

                            if(details != null){
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if(actionResponse instanceof APIException){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string,any> = actionResponse.getDetails();

                            if(details != null){
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if(responseObject instanceof APIException){

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string,any> = responseObject.getDetails();

                    if(details != null){
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
 
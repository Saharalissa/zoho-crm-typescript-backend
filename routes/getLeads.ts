import {RecordOperations, GetRecordsHeader, GetRecordsParam} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record_operations";
import {ParameterMap} from "@zohocrm/typescript-sdk/routes/parameter_map";
import {HeaderMap} from "@zohocrm/typescript-sdk/routes/header_map";
import {ResponseWrapper} from  "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/response_wrapper";
import {ResponseHandler} from  "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/response_handler";
import {Record} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record";
import {Tag} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/tags/tag";

import {APIResponse} from "@zohocrm/typescript-sdk/routes/controllers/api_response";
export class SampleRecord {

    public static async getRecords(){

        try {
            let moduleAPIName = "Leads";
            //Get instance of RecordOperations Class
            let recordOperations: RecordOperations = new RecordOperations();
            let paramInstance: ParameterMap = new ParameterMap();
            await paramInstance.add(GetRecordsParam.APPROVED, "both");
            let headerInstance: HeaderMap  = new HeaderMap();
            await headerInstance.add(GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"));
            //Call getRecords method that takes paramInstance, headerInstance and moduleAPIName as parameters
            let response: APIResponse<ResponseHandler> = await recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance);
            if(response != null){

                //Get the status code from response
                console.log("Status Code: " + response.getStatusCode());
                if([204, 304].includes(response.getStatusCode())){
                    console.log(response.getStatusCode() == 204? "No Content" : "Not Modified");
                    return;
                }
                //Get the object from response
                let responseObject: ResponseHandler = response.getObject();
                if(responseObject != null){
                    //Check if expected ResponseWrapper instance is received
                    if(responseObject instanceof ResponseWrapper){
                        //Get the array of obtained Record instances
                        let records: Record[] = responseObject.getData();
                        for (let record of records) {

                            //Get the ID of each Record
                            console.log("Record ID: " + record.getId());
                            //Get the createdBy User instance of each Record
                            let createdBy = record.getCreatedBy();
                            //Check if createdBy is not null
                            if(createdBy != null)
                            {
                                //Get the ID of the createdBy User
                                console.log("Record Created By User-ID: " + createdBy.getId());
                                //Get the name of the createdBy User
                                console.log("Record Created By User-Name: " + createdBy.getName());
                                //Get the Email of the createdBy User
                                console.log("Record Created By User-Email: " + createdBy.getEmail());
                            }
                            //Get the CreatedTime of each Record
                            console.log("Record CreatedTime: " + record.getCreatedTime());
                            //Get the modifiedBy User instance of each Record
                            let modifiedBy = record.getModifiedBy();
                            //Check if modifiedBy is not null
                            if(modifiedBy != null){
                                //Get the ID of the modifiedBy User
                                console.log("Record Modified By User-ID: " + modifiedBy.getId());
                                //Get the name of the modifiedBy User
                                console.log("Record Modified By User-Name: " + modifiedBy.getName());
                                //Get the Email of the modifiedBy User
                                console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                            }
                            //Get the ModifiedTime of each Record
                            console.log("Record ModifiedTime: " + record.getModifiedTime());
                            //Get the list of Tag instance each Record
                            let tags: Tag[] = record.getTag();
                            //Check if tags is not null
                            if(tags != null){
                                tags.forEach(tag => {
                                    //Get the Name of each Tag
                                    console.log("Record Tag Name: " + tag.getName());
                                    //Get the Id of each Tag
                                    console.log("Record Tag ID: " + tag.getId());
                                });
                            }
                            //To get particular field value
                            console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                            console.log("Record KeyValues: " );
                            let keyValues: Map<string,any> = record.getKeyValues();
                            let keyArray: string[] = Array.from(keyValues.keys());
                            for (let keyName of keyArray) {
                                let value: any = keyValues.get(keyName);
                                console.log(keyName + " : " + value);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

SampleRecord.getRecords();
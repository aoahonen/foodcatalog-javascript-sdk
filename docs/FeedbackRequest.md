# PassioFoodCatalog.FeedbackRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedbackUuid** | **String** | the uuid returned by the previous /classify method | 
**rating** | **Number** | a value from 0.0 to 1.0 indicating how good / satisfied  the user is with the result, where 1.0 is total satisfied.  | 
**userChoice** | **String** | the final choice of the user (label) | 
**userComment** | **String** | The user can associate any comments to the evaluation | [optional] 
**clientComment** | **String** | (beta) The client can associate any comments or data to the evaluation.  Mainly used for future client specific training  | [optional] 



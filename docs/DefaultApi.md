# PassioFoodCatalog.DefaultApi

All URIs are relative to *https://foodcatalog-api-dot-bpiproject-145417.appspot.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classifyMedia**](DefaultApi.md#classifyMedia) | **POST** /classify | Classify an Image
[**feedback**](DefaultApi.md#feedback) | **POST** /feedback | Provides feedback on the generated classification


<a name="classifyMedia"></a>
# **classifyMedia**
> ClassifyResponse classifyMedia(body)

Classify an Image

Classify a given image. 

### Example
```javascript
var PassioFoodCatalog = require('PassioFoodCatalog');
var defaultClient = PassioFoodCatalog.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new PassioFoodCatalog.DefaultApi();

var body = new PassioFoodCatalog.ClassifyRequest(); // ClassifyRequest | The image to analyze base64 encoded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classifyMedia(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClassifyRequest**](ClassifyRequest.md)| The image to analyze base64 encoded | 

### Return type

[**ClassifyResponse**](ClassifyResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="feedback"></a>
# **feedback**
> feedback(body)

Provides feedback on the generated classification

A client can optionally decide to send feedback on the final result chosen by the user. 

### Example
```javascript
var PassioFoodCatalog = require('PassioFoodCatalog');
var defaultClient = PassioFoodCatalog.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new PassioFoodCatalog.DefaultApi();

var body = new PassioFoodCatalog.FeedbackRequest(); // FeedbackRequest | The media to analyze base64 encoded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.feedback(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FeedbackRequest**](FeedbackRequest.md)| The media to analyze base64 encoded | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


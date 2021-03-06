/**
 * Passio Food Catalog API
 * Welcome to the [Passiolife](https://www.passiolife.com) Food Catalog API.  The Passiolife Catalog API is organized around the [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer)  methodology, and it uses resource-oriented URLs, and common HTTP response codes to indicate API errors.  All requests are authenticated using an `api-key` which can be obtained by signing up.  
 *
 * OpenAPI spec version: 0.2-beta
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Label'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Label'));
  } else {
    // Browser globals (root is window)
    if (!root.PassioFoodCatalog) {
      root.PassioFoodCatalog = {};
    }
    root.PassioFoodCatalog.ClassifyResponse = factory(root.PassioFoodCatalog.ApiClient, root.PassioFoodCatalog.Label);
  }
}(this, function(ApiClient, Label) {
  'use strict';




  /**
   * The ClassifyResponse model module.
   * @module model/ClassifyResponse
   * @version 0.2-beta
   */

  /**
   * Constructs a new <code>ClassifyResponse</code>.
   * @alias module:model/ClassifyResponse
   * @class
   * @param results {Array.<module:model/Label>} Array of Labels sorted by score descending (highest score first) 
   * @param nutrients {Object} Map of ID:Nutrients 
   * @param feedbackUuid {String} \"Request identifier to be used for the /feedback api call\" 
   */
  var exports = function(results, nutrients, feedbackUuid) {
    var _this = this;

    _this['results'] = results;
    _this['nutrients'] = nutrients;
    _this['feedback_uuid'] = feedbackUuid;
  };

  /**
   * Constructs a <code>ClassifyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassifyResponse} obj Optional instance to populate.
   * @return {module:model/ClassifyResponse} The populated <code>ClassifyResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [Label]);
      }
      if (data.hasOwnProperty('nutrients')) {
        obj['nutrients'] = ApiClient.convertToType(data['nutrients'], Object);
      }
      if (data.hasOwnProperty('feedback_uuid')) {
        obj['feedback_uuid'] = ApiClient.convertToType(data['feedback_uuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * Array of Labels sorted by score descending (highest score first) 
   * @member {Array.<module:model/Label>} results
   */
  exports.prototype['results'] = undefined;
  /**
   * Map of ID:Nutrients 
   * @member {Object} nutrients
   */
  exports.prototype['nutrients'] = undefined;
  /**
   * \"Request identifier to be used for the /feedback api call\" 
   * @member {String} feedback_uuid
   */
  exports.prototype['feedback_uuid'] = undefined;



  return exports;
}));



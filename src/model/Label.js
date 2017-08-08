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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PassioFoodCatalog) {
      root.PassioFoodCatalog = {};
    }
    root.PassioFoodCatalog.Label = factory(root.PassioFoodCatalog.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Label model module.
   * @module model/Label
   * @version 0.2-beta
   */

  /**
   * Constructs a new <code>Label</code>.
   * @alias module:model/Label
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Label</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Label} obj Optional instance to populate.
   * @return {module:model/Label} The populated <code>Label</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique ID reference for this label. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A human readable name assigned to the label 
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * A value from 0.0 to 1.0 that indicates  how confident the algorithm is about this result. 
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;



  return exports;
}));


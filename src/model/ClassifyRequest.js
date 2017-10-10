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
    root.PassioFoodCatalog.ClassifyRequest = factory(root.PassioFoodCatalog.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClassifyRequest model module.
   * @module model/ClassifyRequest
   * @version 0.2-beta
   */

  /**
   * Constructs a new <code>ClassifyRequest</code>.
   * @alias module:model/ClassifyRequest
   * @class
   * @param userId {String} client unique user identifier
   * @param mediaB64 {String} content of the image base64 encoded
   */
  var exports = function(userId, mediaB64) {
    var _this = this;

    _this['user_id'] = userId;
    _this['media'] = mediaB64;
  };

  /**
   * Constructs a <code>ClassifyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassifyRequest} obj Optional instance to populate.
   * @return {module:model/ClassifyRequest} The populated <code>ClassifyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = ApiClient.convertToType(data['media'], 'String');
      }
    }
    return obj;
  }

  /**
   * client unique user identifier
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * content of the image base64 encoded
   * @member {String} media
   */
  exports.prototype['media'] = undefined;



  return exports;
}));




const isValidRequest = function(data){
    if(Object.keys(data).length == 0){
      return false
    }
    return true
  }

  const isValidString = function (value) {
    if (typeof value == undefined || value == null) return false;
    if (typeof value == "string" && value.trim().length == 0) return false;
    else if (typeof value == "string") return true;
  }

  const isValidURL = function(url){
    return (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/).test(url)

  }

  module.exports = {isValidRequest, 
                    isValidURL, 
                    isValidString}
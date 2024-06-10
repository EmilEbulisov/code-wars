function toCamelCase(str){
  return str.replace( /(\-|_)./g, function(v) { return v.toUpperCase(); }).replace(/(\-|_)/g, '');
}
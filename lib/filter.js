'use strict';

// Filter API - https://hexo.io/api/filter
module.exports = function(hexo) {
  return function(data) {
    console.log('hello world!');
    // e.g.
    // data.title = data.title.toLowerCase();
    return data;
  };
};

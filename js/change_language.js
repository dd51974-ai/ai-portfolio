jQuery(function($){ 
    url = window.location.href;
    if(url.search(/\/jp\//) !== -1) {
      langUrl = url.replace('/jp/', '/en/');
      $('p#language a').attr('href', langUrl);
    }else if(url.search(/\/en\//) !== -1) {
      langUrl = url.replace('/en/', '/jp/');
      $('p#language a').attr('href', langUrl);
    }
  });
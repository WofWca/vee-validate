!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.__vee_validate_locale__da=e.__vee_validate_locale__da||{},e.__vee_validate_locale__da.js=n())}(this,function(){"use strict";var e=function(e){var n=0===(e=1024*Number(e))?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,n)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},n={name:"da",messages:{_default:function(e){return e+" er ikke gyldig."},after:function(e,n){return e+" skal være efter "+n[0]+"."},alpha_dash:function(e){return e+" må kun indeholde tal, bogstaver, bindestreger og underscores."},alpha_num:function(e){return e+" må kun indeholde tal og bogstaver."},alpha_spaces:function(e){return e+" må kun indeholde bogstaver og mellemrum."},alpha:function(e){return e+" må kun indeholde bogstaver."},before:function(e,n){return e+" skal være før "+n[0]+"."},between:function(e,n){return e+" skal være mellem "+n[0]+" og "+n[1]+"."},confirmed:function(e,n){return e+" skal matche "+n[0]+"."},date_between:function(e,n){return e+" skal være mellem "+n[0]+" og "+n[1]+"."},date_format:function(e,n){return e+" skal være i formatet: "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=[]);var r=n[0];return void 0===r&&(r="*"),e+" skal være numerisk og må maksimalt indeholde "+("*"===r?"":r)+" decimaler."},digits:function(e,n){return e+" skal være et tal på "+n[0]+" cifre."},dimensions:function(e,n){return e+" skal være "+n[0]+" pixels gange "+n[1]+" pixels."},email:function(e){return e+" skal være en gyldig email."},ext:function(e){return e+" skal være en gyldig filtype."},image:function(e){return e+" skal være et billede."},in:function(e){return e+" skal være en gyldig værdi."},ip:function(e){return e+" skal være en gyldig ip-adresse."},max:function(e,n){return e+" må maksimalt være "+n[0]+" karakterer."},mimes:function(e){return e+" skal være en gyldig filtype."},min:function(e,n){return e+" skal minimum være "+n[0]+" karakterer."},not_in:function(e){return e+" skal være en gyldig værdi."},numeric:function(e){return e+" skal være numerisk."},regex:function(e){return e+" skal have et gyldigt format."},required:function(e){return e+" skal udfyldes."},size:function(n,r){var t=r[0];return n+" må maksimalt have en størrelse på "+e(t)+"."},url:function(e){return e+" skal være en gyldig URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.addLocale(n),n});
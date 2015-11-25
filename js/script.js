// lightTabs plugin
(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                i = parseInt($(this).attr("data-page"));
                showPage(i);
            });		
        };		
        return this.each(createTabs);
    };	
})(jQuery);


$(document).ready(function(){
    $(".tabs").lightTabs();

$(document).on('submit', '.skidkaData', function()
 {
  var data = $(this).serialize();
  $.ajax({
  type : 'POST',
  url  : 'submit.php',
  data : data,
  success :  function(data)
       {     
       }
  });
  return false;
 });
$(document).on('submit', '.question', function()
 {
  var data = $(this).serialize();
  $.ajax({
  type : 'POST',
  url  : 'submit.php',
  data : data,
  success :  function(data)
       {     
       }
  });
  return false;
 });
$(document).on('submit', '.call_data', function()
 {
  var data = $(this).serialize();
  $.ajax({
  type : 'POST',
  url  : 'submit.php',
  data : data,
  success :  function(data)
       {     
       }
  });
  return false;
 });


    $('.phoneHeader .call_us .callHeader').click(function() {
        $('.phoneHeader .call_us').hide();
        $('.phoneHeader .zakaz').show();
    });
    $('.phoneHeader .zakaz .close').click(function() {
        $('.phoneHeader .zakaz').hide();
        $('.phoneHeader .call_us').show();
    });
    $('.phoneHeader .vvod .send').click(function() {
        $('.phoneHeader .vvod').hide();
        $('.phoneHeader .thanks').show();
    });
    $('.phoneHeader .thanks .again').click(function() {
        $('.phoneHeader .call_data')[0].reset();
        $('.phoneHeader .thanks').hide();
        $('.phoneHeader .vvod').show();
    });

    $('.skidkaData .send').click(function() {
        $('.skidka .kupon').hide();
        $('.skidka .thanks').show();
    });


    $('.contact_us .questions .send').click(function() {
        $('.contact_us .questions').hide();
        $('.contact_us .thanks').show();
    });
    $('.contact_us .thanks .again').click(function() {
        $('.contact_us .question')[0].reset();
        $('.contact_us .thanks').hide();
        $('.contact_us .questions').show();
    });
    
});
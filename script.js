$(document).ready(function(){
    $("#heart").tap(function(){
      if($("#heart").hasClass("liked")){
        $("#heart").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $("#heart").removeClass("liked");
      }else{
        $("#heart").html('<i class="fa fa-heart" aria-hidden="true"></i>');
        $("#heart").addClass("liked");
      }
    });
  });
// var changeSearch = {
//   flag:true,
//   styleHandler:function(target){
//       var txt =  target.children[0];
//       if(this.flag){
//         txt.style.width = '240px';
//         this.flag = false;
//       }else if(!(this.flag)){
//         txt.style.width = '0px';
//         this.flag = true;
//       }
//   }
// };
$(document).ready(function(){
// searchTxt focus event
  $('.searchTxt').focus(function(){
    $(this).val('');
  });
  $('.searchTxt').focusout(function(){
    $(this).val('검색어를 입력하세요.');
  });

// search icon change handler
// 미구현..
  function displayAll(){
    $('.nonDisplay').removeClass('nonDisplay').addClass('white');
  }
  function choiceEngine(){
    $('.white').removeClass('white').addClass('nonDisplay');
    $(this).addClass('white').removeClass('nonDisplay');
  }
  if($('.white').length==1){
    $('#choiceEngine').find('.white').click(displayAll());
  }
  if($('white').length==3){
    $('#choiceEngine').find('.white').click(choiceEngine());
  }


});

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
  $('')

});

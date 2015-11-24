console.log("hi");
//Clockwork API key: 05402f56c48915b1d4058a6ec0f8fe75be8d57ce

// $.ajax({
//   // url: "http://textbelt.com/text?number=9132169521?message=hi",
//   url: "http://textbelt.com/text",
//   method: "POST",
//   number: 9132169521,
//   message: "hey"

//   }).done(function(data) {
//     console.log(data);
// });
var g =  $.post("http://textbelt.com/text",
  // var g = $.post("http://text@textbelt.com/text",
{
  // number: 9132169521,
  number: 8592277295,//deric
  message: "testing https://github.com/typpo/textbelt"
}
).done(function (data){
  console.log(g.responseText);
  console.log(data);
});
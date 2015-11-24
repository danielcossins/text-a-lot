console.log("hi");
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
{
  number: 9132169521,
  message: "testing https://github.com/typpo/textbelt"
}
).done(function (data){
  console.log(g.responseText);
  console.log(data);
});
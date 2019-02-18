//public api used for this task: https://randomuser.me/


$('#buttonId').click(function() {
  
 
 
  var newUrl ="";
   
  if (document.getElementById("male").checked) {
     $('.box').text('loading . . .');
    newUrl= "https://randomuser.me/api/?gender=male";
  } 
  else if (document.getElementById("female").checked) {
     $('.box').text('loading . . .');
    newUrl ="https://randomuser.me/api/?gender=female";
  }
  
 else {
   alert("Please select a gender");
   return false;
 }
  
  $.ajax({
    type:"GET",
    dataType: 'jsonp',
    
    url: newUrl,
    success: function(data) {
    
       $.each(data, function(){
         console.log(data.results);
 $('.box').html("<h2>Gender: "+ data.results[0].gender + "<h2>");
  $('.box').append("<h2>Full Name: "+ data.results[0].name.first + " " + data.results[0].name.last + "<h2>");
       });
      
    },
  });
});
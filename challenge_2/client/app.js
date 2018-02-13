
$('#form').on('submit', (event)=>{
  let postData = $('#data').val();

  $.ajax({
    type: "POST",
    url: 'http://127.0.0.1:3000',
    data: postData,
    contentType: 'application/json',
    success: (data)=>{
      console.log('Success!');
      $('#csv').html(JSON.parse(data));
    },
    error: (error)=>{
      console.log('Failed!')
      console.log(error);
    }
  });
  
  event.preventDefault();
})


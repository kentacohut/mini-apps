
$('#form').on('submit', (event)=>{
  let postData = $('#data').val();

  $.ajax({
    type: "POST",
    url: 'http://127.0.0.1:3000',
    data: postData,
    contentType: 'application/json',
    success: (data)=>{
      console.log('Success!');
      $('#csv').html('<h1>CSV Formatted Data</h1>' + JSON.parse(data));
      $('#data').val('');
    },
    error: (error)=>{
      console.log('Failed!')
      console.log(error);
    }
  });

  event.preventDefault();
})


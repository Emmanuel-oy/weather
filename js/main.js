$.ajax({
    url: 'http://api.weatherstack.com/current',
    data: {
      access_key: '0c902af5167402074c9ce332df2eba4b',
      query: 'New York'
    },
    dataType: 'json',
    success: function(apiResponse) {
      console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }
  });
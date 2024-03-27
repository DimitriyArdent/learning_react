const body = {
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "isStudent": false,
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    "friends": [
      {
        "name": "Alice",
        "age": 28
      },
      {
        "name": "Bob",
        "age": 32
      }
    ]
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Specify the content type as JSON
    },
    body: JSON.stringify(body) // Convert data to JSON string
  };
  
  const config = { headers: {
    'Content-Type': 'application/json' // Specify the content type as JSON
  }}
  export default [body,requestOptions,config];
  
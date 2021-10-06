const mockResponse = {
   data: {
      results: [
         {
            name: {
               first: "First Name",
               last: "Last Name"
            },
            picture: {
               large: "https://randomuser.me/api/portraits/men/39.jpg"
            },
            login: {
               username: "UserName"
            }
         }
      ]
   }
}


export default {
   get: jest.fn().mockResolvedValue(mockResponse)
}
import axios from 'axios'

const API = 'https://pinchkithelp.zendesk.com/api/v2/tickets.json'

axios.defaults.headers.common['Authorization'] = 'Basic cmFjaGl0QHBpbmNoa2l0LmNvbTpIdW1hbkZhY3RvcnMyMDIwQA=='
axios.defaults.headers.common['Content-Type'] = 'application/json'

const ticketHttp = {
  postTicket: async (data) => {
    const ticket = { 
      ticket: { 
        subject: "New contact submitted in Contact Us", 
        comment: {
          body: data
        }
      }
    }
    try {
      let results = await axios.post(API, ticket)
      window.alert(JSON.parse(results))
      if(results) {
        return results.data
      }
      return false
    }catch(err){
      return false
    }
  },
}

export default ticketHttp
import axios from 'axios'

const API = 'https://pinchkithelp.zendesk.com/api/v2/help_center/en-us'

axios.defaults.headers.common['Authorization'] = 'Basic cmFjaGl0QHBpbmNoa2l0LmNvbTpIdW1hbkZhY3RvcnMyMDIwQA=='
axios.defaults.headers.common['Content-Type'] = 'application/json'
const articleHttp = {
  getArticles: async () => {
    try {
      let results = await axios.get(`${API}/articles.json`)
      if(results) {
        return results.data.articles
      }
      return false
    }catch(err){
      return false
    }
  },
  getSections: async () => {
    try {
      let results = await axios.get(`${API}/sections.json`)
      if(results) {
        return results.data.sections
      }
      return false
    }catch(err){
      return false;
    }
  },
}

export default articleHttp
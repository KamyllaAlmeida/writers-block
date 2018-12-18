import axios from 'axios'

const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

class ContactApi {
  sendMessage(message, onSuccess, onError) {
    axios.post('/contact', 'message=${message}')
      .then(onSuccess)
      .catch(onError)
  }
}

export default ContactApi;
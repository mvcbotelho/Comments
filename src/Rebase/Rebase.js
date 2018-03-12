import FireBase from 'firebase'
import Rebase from 're-base'

const config = {
  apiKey: "AIzaSyDaQK1T5lRgxwsFGoJkbggLO-blaRfttQ4",
  authDomain: "primeiro-app-10bab.firebaseapp.com",
  databaseURL: "https://primeiro-app-10bab.firebaseio.com",
  projectId: "primeiro-app-10bab",
  storageBucket: "primeiro-app-10bab.appspot.com",
  messagingSenderId: "22992492432"
}

const app = FireBase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const providers = { 'facebook': new FireBase.auth.FacebookAuthProvider() }
export const auth = FireBase.auth()

export default base
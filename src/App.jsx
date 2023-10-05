import { useState } from 'react'
import Badge from "./Badge"
import "./style.css"

function App() {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    number: "",
    favFood: "",
    comments: ""
  })

  const [badgeData, setBadgeData] = useState([])

  function formHandle (e){
    
      setFormData( prevForm => ({
        ...prevForm,
        [e.target.name]: e.target.value
      }))
  }

  function handleSubmit (e){
    e.preventDefault()

    setBadgeData(
      prev => [...prev, formData]
    )
      setFormData(prev => ({
        ...prev,
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        number: "",
        favFood: "",
        comments: ""
      }))
  }
  const {firstName, lastName, email, birthPlace, number, favFood, comments} = formData

    const badgeElements = badgeData.map((badge, index) =>(
    <Badge 
    firstName={badge.firstName} 
    lastName={badge.lastName}
    email={badge.email}
    birthPlace={badge.birthPlace}
    number={badge.number}
    favFood={badge.favFood}
    comments={badge.comments}
    key={index}
    className={index % 2 === 0 ? "red" : "blue"}
    />))

  return (
    <>
      <div>
        <form className='form-container' onSubmit={handleSubmit}>
          <div>

              <input 
              placeholder='First Name'
              type='text'
              name='firstName'
              required={true}
              minLength={3}
              onChange={formHandle}
              value={formData.firstName}
              />

              <input 
              placeholder='Last Name'
              type='text'
              name='lastName'
              required={true}
              minLength={3}
              onChange={formHandle}
              value={formData.lastName}
              />
          
          </div>

          <div>

          <input
              type='email'
              placeholder='someone@somwhere.com'
              name='email'
              required={true}
              minLength={3}
              onChange={formHandle}
              value={formData.email}
              />

              <input
              type='text'
              placeholder='Place of birth'
              name='birthPlace'
              required={true}
              minLength={3}
              onChange={formHandle}
              value={formData.birthPlace}
          />
          </div>
          
          <div>

          <input
              type='tel'
              pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
              placeholder='8001001234'
              name='number'
              required={true}
              minLength={3}
              maxLength={10}
              onChange={formHandle}
              value={formData.number}
              />
              
              <input
              type='text'
              placeholder='Favorite Food'
              name='favFood'
              required={true}
              minLength={3}
              onChange={formHandle}
              value={formData.favFood}
              />

          </div>
              <textarea 
              name='comments' 
              placeholder='comments'
              required={true}
              minLength={3}
              onChange={formHandle}
              className='app--text-area'
              value={formData.comments}
              />


          <button type="submit" 
          disabled={!firstName || !lastName || !email || !birthPlace || !number || !favFood || !comments
            }>
              Submit
          </button>

        </form>
      </div>

      
        {badgeData.length > 0 && <> {badgeElements}</>}
    </>
  )
}

export default App

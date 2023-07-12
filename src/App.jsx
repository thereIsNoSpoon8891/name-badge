import { useState } from 'react'
import Badge from "./Badge"
import "./style.css"

function App() {
 
  const [ formData, setFormData] = useState({
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
    const badgeElements = badgeData.map(badge =>(
    <Badge 
    firstName={badge.firstName} 
    lastName={badge.lastName}
    email={badge.email}
    birthPlace={badge.birthPlace}
    number={badge.number}
    favFood={badge.favFood}
    comments={badge.comments}
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
              required
              minLength={3}
              onChange={formHandle}
              value={formData.firstName}
              />

              <input 
              placeholder='Last Name'
              type='text'
              name='lastName'
              required
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
              required
              minLength={3}
              onChange={formHandle}
              value={formData.email}
              />

              <input
              type='text'
              placeholder='Place of birth'
              name='birthPlace'
              required
              minLength={3}
              onChange={formHandle}
              value={formData.birthPlace}
          />
          </div>
          
          <div>

          <input
              type='tel'
              placeholder='Phone Number'
              name='number'
              required
              minLength={3}
              onChange={formHandle}
              value={formData.number}
              />
              
              <input
              type='text'
              placeholder='Favorite Food'
              name='favFood'
              required
              minLength={3}
              onChange={formHandle}
              value={formData.favFood}
              />

          </div>

              <textarea 
              name='comments' 
              placeholder='comments'
              required
              minLength={3}
              onChange={formHandle}
              className='app--text-area'
              value={formData.comments}
              />

          <button>
              Submit
          </button>

        </form>
      </div>

      
        {badgeData.length > 0 && <> {badgeElements}</>}
    </>
  )
}

export default App

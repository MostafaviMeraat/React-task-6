import { Fragment, useReducer, useState } from "react"
import UserData from "./UserData"

const ACTIONS = {
  ADDUSER: 'submit',
  INPUTCHANGE: 'inputChange'
}

const initial = {
  name: '',
  lastName: '',
  age: '',
  nationalID: '',
  city: '',
  education: '',
  score: '',
  nationality: '',
  height: '',
  weigth: '',
  hairColor:''
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INPUTCHANGE:
      return { ...state, [action.payload.input]: action.payload.value, id: Date.now() }
    
    case ACTIONS.ADDUSER: 
      return state

      default: return state
  }
}

const lableStyle = {
  fontSize: '20px',
  fontWeigth: '700'
}

const Form = () => {

  const [state, dispatch] = useReducer(reducer, initial)
  const [check, setCheck] = useState(false)

  const inputChange = (e) => {
    setCheck(false)

    dispatch({
      type: ACTIONS.INPUTCHANGE,
      payload: {
        id: Date.now(),
        input: e.target.name,
        value: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    if (state.name !== '') {
      e.preventDefault()
      dispatch({
        type: ACTIONS.ADDUSER
      })

      setCheck(true)
    }
    else {
      alert('Fill the name')
    }
  }
  
  return (<div className='wrapper'>
    <form >

      <lable
        className='firstChild'
        style={lableStyle}
      >Name: </lable>
      <input
        autoFocus
        autoComplete="new-password"
        type="text"
        name='name'
        onChange={inputChange}
      />

      <lable style={lableStyle}>Last Name: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='lastName'
        onChange={inputChange}
      />

      <lable style={lableStyle}>Age: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='age'
        onChange={inputChange}
      />

      <lable style={lableStyle}>National-ID: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='nationalID'
        onChange={inputChange}
      />

      <lable style={lableStyle}>City: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='city'
        onChange={inputChange}
      />

      <lable style={lableStyle}>Eduction: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='education'
        onChange={inputChange}
      />

      <lable style={lableStyle}>Score: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='score'
        onChange={inputChange}
      />

      <lable style={lableStyle}>Nationality: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='nationality'
        onChange={inputChange}
      />

      <lable style={lableStyle}>Height: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='height'
        onChange={inputChange}
      />

      <lable style={lableStyle}>Weigth: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='weigth'
        onChange={inputChange}
      />

      <lable style={lableStyle}>Hair color: </lable>
      <input
        autoComplete="new-password"
        type="text"
        name='hairColor'
        onChange={inputChange}
      />

    <button className="button lastChild" onClick={handleSubmit}>Submit</button>
    
    </form>
    {check && < UserData info={state} setCheck={setCheck} />}

  </div>)
}

export default Form
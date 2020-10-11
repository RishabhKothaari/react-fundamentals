import React from 'react'

/*3 disable on lowercase*/
function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 replace input's name attribute with id attribute
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  // return (
  //   <form>
  //     <div>
  //       <label>Username:</label>
  //       <input name="username" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )
  const labelProps = {children: 'Username:'}
  const inputProp = {name: 'username', type: 'text', id: 'usernameInput'}
  const buttonProps = {type: 'submit', children: 'Submit'}
  const usernameRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(e.target.elements.usernameInput.value)
  }

  const handleChange = e => {
    const {value} = e.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }
  const form = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput" {...labelProps} />
        <input ref={usernameRef} onChange={handleChange} {...inputProp} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} {...buttonProps} />
    </form>
  )
  return form
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

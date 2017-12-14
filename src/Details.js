import React from 'react'
import './Details.css'
import { Button } from 'semantic-ui-react'
class Details extends React.Component {
  render() {
    return (
        <div className='main'>

          <div className='edit'>
            <Button primary>Edit</Button>
          </div>

          <div className='data'>
            <h1>Party Name</h1>
            <span>---Guest List---</span>
            <ul>
              <li>Osoba 1</li>
              <li>Osoba 2</li>
              <li>Osoba 3</li>
              <li>Osoba 4</li>
              <li>Osoba 5</li>
            </ul>
          </div>

        </div>

    )
  }
}

export default Details;
import React, { Fragment } from 'react'
import Select from 'react-select'
import { ReactComponent as Lens} from '../assets/svg/magnifying-glass.svg'

const Header = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  return (
    <Fragment>
      <div className="header">
        <div className="header-brand">
          <h1>Electro</h1>
        </div>
        <div className="header-searcher">
          <form method="post">
            <div className="header-form-group">
              <Select options={options} />
            </div>
            <div className="header-form-group">
              <input type="text" className="h-form-input" />
            </div>
            <button type="submit"><Lens/></button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
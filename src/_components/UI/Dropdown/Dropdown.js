import React, { useState, createContext, useContext, useEffect } from "react";

const DropdownContext = createContext();

// give error if not used in context
const DropdownMenu = ({ children }) => {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState()
  const [options, setOptions] = useState([])

  const hide = () => setPopupOpen(false)
  const toggle = () => setPopupOpen((prevState) => !prevState)

  return (
    <DropdownContext.Provider value={{ isPopupOpen, toggle, hide, setSelectedItem, selectedItem }}>
      <div
        className="dropdown mx-2 my-2 inline-flex"
        tabIndex={0}
        onBlur={hide}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

const DropdownMenuTrigger = ({ children }) => {
  const { toggle, selectedItem } = useContext(DropdownContext)
  return (
    <div
      className=""
      onClick={toggle}
    >
      {children}
    </div>
  )
}

const DropdownMenuContent = ({ children }) => {
  const { isPopupOpen, hide } = useContext(DropdownContext)

  return (
    <React.Fragment>
      {isPopupOpen && <div onClick={hide} className="overlay overlay-transparent z-50"></div>}
      <div className={`dropdown-box z-50 border border-another min-w-xs rounded-md mt-9 bg-default fixed ${isPopupOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col my-1 p-1 text-sm">
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

const DropdownMenuItem = ({ onChange, value, children, ...props }) => {

  const { hide, selectedItem, setSelectedItem } = useContext(DropdownContext)

  const handleSelect = (e) => {
    e.stopPropagation()
    hide()
    setSelectedItem(value)
    onChange && onChange(value)
  }

  return (
    <span className={`py-1.5 px-2 my-1 cursor-pointer ${selectedItem === value ? 'bg-custom' : 'hover-secondary'}`} onClick={handleSelect} {...props}>
      {children}
    </span>
  )
}

const DropdownMenuItemGroup = ({ options = [], value, onChange }) => {


  return (
    <React.Fragment>
      {options.map(option => {
        const { id, text } = option || {}
        return (
          <DropdownMenuItem
            onChange={onChange}
            value={id}
          >
            {text}
          </DropdownMenuItem>
        )
      }
      )}
    </React.Fragment>
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemGroup
}
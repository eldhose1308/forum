import React, { useState, createContext, useContext, useEffect } from "react";

const DropdownContext = createContext();

// give error if not used in context
const DropdownMenu = ({ children }) => {
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState()
  const [options, setOptions] = useState([])

  return (
    <DropdownContext.Provider value={{ isPopupOpen, setPopupOpen, setSelectedItem, selectedItem }}>
      <div
        className="dropdown mx-2 my-2"
        tabIndex={0}
        onBlur={() => setPopupOpen(false)}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

const DropdownMenuTrigger = ({ children }) => {
  const { setPopupOpen, selectedItem } = useContext(DropdownContext)
  return (
    <div
      className="relative"
      onClick={(e) => setPopupOpen(prev => !prev)}
    >
      {children}
    </div>
  )
}

const DropdownMenuContent = ({ children }) => {
  const { isPopupOpen } = useContext(DropdownContext)

  return (
    <div className={`dropdown-box border border-another min-w-xs rounded-md my-1 bg-default fixed ${isPopupOpen ? '' : 'hidden'}`}>
      <div className="flex flex-col my-1 p-1 text-sm">
        {children}
      </div>
    </div>
  )
}

const DropdownMenuItem = ({ onChange, value, children, ...props }) => {

  const { setPopupOpen, selectedItem, setSelectedItem } = useContext(DropdownContext)

  const handleSelect = (e) => {
    e.stopPropagation()
    setPopupOpen(false)
    setSelectedItem(value)
    onChange && onChange(value)
  }

  return (
    <span className={`py-1.5 px-2 my-1 cursor-pointer ${selectedItem === value ? 'bg-custom' : 'hover-secondary'}`} onClick={handleSelect} {...props}>
      {children}
    </span>
  )
}

const DropdownMenuItemGroup = ({ options=[], value, onChange }) => {
  

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
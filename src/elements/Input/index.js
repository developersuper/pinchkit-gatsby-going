/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

import './Calendar.scss';
import './index.scss'
import passImg from '../../images/icon/password.png'
import passShowImg from '../../images/icon/see-password.png'
import emailImg from '../../images/icon/email.png'
import nameImg from '../../images/icon/name.png'
import phoneImg from '../../images/icon/phone.png'

const Input = ({type="text", placeholder, iconSrc, icon, handler, ...rest}) => {

  const [value, setValue] = useState('')
  const [date, setDate] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [passtype, setType] = useState('password')
  
  useEffect(()=>{
    if(type === 'date') {
      handler(date)
      setShowCalendar(false)
    }else{
      handler(value)
    }
  }, [value, date])

  if(!iconSrc){
    if(type === 'name'){
      return (
        <div className="customInput" {...rest}>
          <input 
            type="text"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={placeholder} 
            sx={{fontSize: 'small-plus'}}
            className="icon-normal left-icon-input"
          />
          <img src={nameImg} alt="" className="left-icon" />
        </div>
      )
    }
    if(type === 'phone'){
      return (
        <div className="customInput" {...rest}>
          <input 
            type="text"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={placeholder} 
            sx={{fontSize: 'small-plus'}}
            className="icon-normal left-icon-input"
          />
          <img src={phoneImg} alt="" className="phone-left-icon" />
        </div>
      )
    }
    if(type === 'password'){
      return (
        <div className="customInput" {...rest}>
          <input 
            type={passtype}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={placeholder} 
            sx={{fontSize: 'small-plus'}}
            className="icon-normal left-icon-input "
          />
          <img src={passImg} alt="" className="pass-left-icon" />
          <img 
            onMouseDown={() => setType('text')} 
            onMouseUp={() => setType('password')}
            src={passShowImg}
            alt="" 
            className="pass-right-icon"
          />
        </div>
      )
    } 
    if(type === 'email'){
      return (
        <div className="customInput" {...rest}>
          <input 
            type={type}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={placeholder} 
            sx={{fontSize: 'small-plus'}}
            className="icon-normal left-icon-input"
          />
          <img src={emailImg} alt="" className="email-left-icon" />
        </div>
      )
    } 
    return (
      <div className="customInput" {...rest}>
        <input 
          type={type}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder={placeholder} 
          sx={{fontSize: 'small-plus'}}
          className="icon-normal"
        />
      </div>
    )
  }else{
    if(icon === 'left'){
      return (
        <div className="customInput" {...rest}>
          <input 
            type={type}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder={placeholder} 
            sx={{fontSize: 'small-plus'}}
            className="icon-normal left-icon-input"
          />
          <img src={iconSrc.file.url} alt="" className="left-icon" />
        </div>
      )
    }else{
      if(type === 'date'){
        return (
          <div className="customInput" {...rest}>
            <input
              onClick={() => setShowCalendar(true)} 
              type="text"
              placeholder="dd/mm/yyyy" 
              sx={{fontSize: 'small-plus'}}
              className="icon-normal right-icon-input pointer"
              value={date ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` : ''}
              readOnly
            />
            <img onClick={() => setShowCalendar(true)}  src={iconSrc.file.url} alt="" className="right-icon"/>
            {
              showCalendar && 
              <div className="calendar-wrapper">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="calendar"
                  tileClassName="eachTile"
                />
              </div>
            }
          </div>
        )
      }
    }
  }
}
export default Input

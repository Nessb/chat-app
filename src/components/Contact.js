import React from 'react'
import './Contact.css'

export default function Contact () {
    const name = 'Nellie Newman'
    const avatar = 'https://randomuser.me/api/portraits/women/45.jpg'
    const status = true
    return (
        <div className='Contact'>
            <img className='avatar' src={avatar} alt="avatar"/>
            <div>
                <h4 className='name'>{name}</h4>
                <div className='status'>
                    <div className='status-online '>{status ? 'online' : 'offline'}</div>
                </div>
            </div>
        </div>
    )
}

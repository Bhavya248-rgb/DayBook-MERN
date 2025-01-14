import React from 'react'
import ShowEntry from './ShowEntry'
import '../App.css'

const EntryCard = ({entries})=>{
    // console.log(entries);
  return (
        <div className='entries-container'>
            {entries.map((entry)=>{
                return <ShowEntry entry = {entry}/>
            })}
        </div>
  )
}

export default EntryCard
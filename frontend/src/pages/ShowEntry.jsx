import React from 'react'
import '../App.css'

const ShowEntry = ({entry})=>{
  console.log("Showw:",entry);
  return (
    <main className='SingleEntryCard'>
        <header className='entry-header'>{entry.day} {entry.date}
            <p className='entry-p'>{entry.time}</p>
        </header>
        <section>
            <div className='EntryDetails'>
            <h2 className='entry-h2'>Milestones:</h2><p className='entry-p'>{entry.milestones}</p>
            <h2 className='entry-h2'>Thoughts: </h2><p className='entry-p'>{entry.thoughts}</p>
            <h2 className='entry-h2'>Gratitude:</h2><p className='entry-p'> {entry.gratitude}</p>
            <h2 className='entry-h2'>MoveOn:</h2><p className='entry-p'> {entry.moveOn}</p>
            </div>
        </section>
    </main>
  )
}

export default ShowEntry
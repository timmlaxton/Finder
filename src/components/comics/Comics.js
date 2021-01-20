import React, { Component } from 'react'
import ComicItem from './ComicItem'

 class Comics extends Component {
    state = {
      comics: [
       { id: "1",
       name: 'Superman',
       aliases: "Clark Kent",
       url: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
      },
       { id: "2",
       name: 'A-Bomb',
       aliases: "Rick Jones",
       url: "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
      },
       { id: "3",
       name: 'Power Girl',
       aliases: "Karen Starr",
       url: "https://www.superherodb.com/pictures2/portraits/10/100/758.jpg"
      },

      ]
    }


  render() {
    return (
      <div style={comicStyle}>
        {this.state.comics.map(comic => (
          <ComicItem key={comic.id} comic={comic} /> 
        ))}
      </div>
    )
  }
}

const comicStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}


export default Comics

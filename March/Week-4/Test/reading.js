var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];

 for(var i =0; i<library.length; i++){
     if(library[i].readingStatus == true)
         console.log("The book " + library[i].title + " by " + library[i].author + " was completed")
     else
        console.log("The book " + library[i].title + " by " + library[i].author + " was not completed")
 }
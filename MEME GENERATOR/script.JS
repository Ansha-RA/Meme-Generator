var generateMeme = document.querySelector('.generateMeme');
var tittleval = document.querySelector('.tittle');
var memeImg = document.querySelector('.memeImg');
var authorval = document.querySelector('.author');


const updateData =(url,tittle,author) =>{
    memeImg.setAttribute('src' , url)
    tittleval.innerHTML = tittle
    authorval.innerHTML = author
}

const getMeme = () => {

fetch("https://meme-api.com/gimme")
.then(res => res.json()
.then(data => {
    updateData( data.url , data.tittle , data.author)
}
))
    
}

generateMeme .addEventListener('click' , getMeme)  
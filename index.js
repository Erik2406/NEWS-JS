const API_KEY = 'abad6aa6bb6749c595d5984884a2a61e';
const url = "https://newsapi.org/v2/everything?q=";


async function fetchData(query){
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json()
   return data
}

fetchData('all').then(data => rend(data.articles))

let mobilemenu = document.querySelector('.mobile');
let menubtn = document.querySelector('.menu');
let menubtnDis = true;

menubtn.addEventListener('click',()=> {
  mobilemenu.classList.toggle('hiden')
})

function rend(a){
    let mainHTML = ''
    for(let i = 0 ; i < a.length ;i++){
        if(a[i].urlToImage){
        mainHTML += ` <div class="card">
                        <a href=${a[i].url}>
                        <img src=${a[i].urlToImage} lazy="loading" />
                        <h4>${a[i].title}</h4>
                        <div class="publishbyDate">
                            <p>${a[i].source.name}</p>
                            <span>•</span>
                            <p>${new Date(a[i].publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                           ${a[i].description}
                        </div>
                        </a>
                     </div>
        `
        }
    }

    document.querySelector("main").innerHTML = mainHTML
}
// ------------------------------------------------------------------------------------------------------//
const searchBtn = document.getElementById("searchForm")
const searchBtnMobile = document.getElementById("searchFormMobile")
const searchInputMobile = document.getElementById("searchInputMobile") 
const searchInput = document.getElementById("searchInput")

searchBtn.addEventListener("submit",async(e)=>{
    e.preventDefault()
  
    const data = await fetchData(searchInput.value)
    rend(data.articles)
})
searchBtnMobile.addEventListener("submit",async(e)=>{
    e.preventDefault()
    const data = await fetchData(searchInputMobile.value)
    rend(data.articles)
})


async function Search(query){
    const data = await fetchData(query)
    rend(data.articles)
}
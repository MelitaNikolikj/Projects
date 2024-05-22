//Popular
const options = {
    apikey: '36f82afce18db4adcc0cd7454af022b8',
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmY4MmFmY2UxOGRiNGFkY2MwY2Q3NDU0YWYwMjJiOCIsInN1YiI6IjY2MjU1YTA2MmUyYjJjMDE4NzY3OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7cS8rB95TTbrbBOQK6WNo7xrfsBm_ROEmVwP5ztsOw'
    }
  };
  let cardsWrapper = document.querySelector('.cards-wrapper2')
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
       let results = response.results;
       let html='';
       results.forEach(element => {
        html += `
        <div class="card2">
                    <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
                    <div class="text-year">
                        <h4>${element.title}</h4>
                        <h5>${element.release_date}</h5>
                    </div>
        </div>
        `
       })
       cardsWrapper.innerHTML = html;
    })
    .catch(err => console.error(err));



    //Top rated

    const options1 = {
        apikey: '36f82afce18db4adcc0cd7454af022b8',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmY4MmFmY2UxOGRiNGFkY2MwY2Q3NDU0YWYwMjJiOCIsInN1YiI6IjY2MjU1YTA2MmUyYjJjMDE4NzY3OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7cS8rB95TTbrbBOQK6WNo7xrfsBm_ROEmVwP5ztsOw'
        }
      };
      let cardsWrapper1=document.querySelector('.cards-wrapper3')
      
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options1)
        .then(response => response.json())
        .then(response => {
            let results = response.results;
            let html = '';
            results.forEach(element =>{
                html += `
            <div class="card3">
                <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
                <div class="text-year">
                    <h4>${element.title}</h4>
                    <h5>${element.release_date}</h5>
                </div>
            </div>
                `
            })
            cardsWrapper1.innerHTML = html;
            
        })
        .catch(err => console.error(err));




        //UPCOMING
        const options2 = {
            apikey: '36f82afce18db4adcc0cd7454af022b8',
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmY4MmFmY2UxOGRiNGFkY2MwY2Q3NDU0YWYwMjJiOCIsInN1YiI6IjY2MjU1YTA2MmUyYjJjMDE4NzY3OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7cS8rB95TTbrbBOQK6WNo7xrfsBm_ROEmVwP5ztsOw'
            }
          };
          let cardsWrapper2 = document.querySelector('.cards-wrapper4')
          
          fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options2)
            .then(response => response.json())
            .then(response => {
                let results = response.results;
                let html = '';
                results.forEach(element =>{
                    html += `
                <div class="card4">
                    <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
                    <div class="text-year">
                        <h4>${element.title}</h4>
                        <h5>${element.release_date}</h5>
                    </div>
                </div>
                    `
                })
                cardsWrapper2.innerHTML = html;
            })
            .catch(err => console.error(err));





            //HERO CARDS

            const options3 = {
                apikey: '36f82afce18db4adcc0cd7454af022b8',
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmY4MmFmY2UxOGRiNGFkY2MwY2Q3NDU0YWYwMjJiOCIsInN1YiI6IjY2MjU1YTA2MmUyYjJjMDE4NzY3OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7cS8rB95TTbrbBOQK6WNo7xrfsBm_ROEmVwP5ztsOw'
                }
              };
              let cardsWrapper3 = document.querySelector('.cards-wrapper')
              fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options3)
                .then(response => response.json())
                .then(response => {
                    results=response.results;
                    console.log(results)
                    let html = '';
                    let index = 0;
                    results.forEach(element =>{
                        html += `
                    <div class="card" data-index='${index}'>
                        <img class="img1" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
                        <div class="text-year">
                            <h4 class='title'>${element.title}</h4>
                            <h5 class='release-date'>${element.release_date}</h5>
                        </div>
                        <div class='hidden'>
                            <p class='overview'>${element.overview}</p>
                            <p class='genres'>${element.genre_ids[0]}</p>
                            <p class='rating'>${element.vote_average}</p>
                        </div>
                    </div>
                        `
                        index++;
                    })
                    cardsWrapper3.innerHTML = html;
                    let imageContainer = document.querySelector('.image');
                    let contentContainer = document.querySelector('.content');
                    let card = document.querySelectorAll('.card');
                    card.forEach(element => {
                        element.addEventListener('click', function(e){
                        let index = parseInt(e.target.closest('div').getAttribute('data-index'));
                        let index1 = card[index];
                        // imageContainer.innerHTML= index1.children;
                        let html = '';
                        html+= `<img src=${index1.children[0].currentSrc}/>`
                        imageContainer.innerHTML = html;    
                        let html2=''
                        html2 += `
                     <h1 id="title">${index1.children[1].children[0].innerHTML}</h1>
                    <p>${index1.children[2].children[0].innerHTML}</p>
                    <div class="details">
                        <h6>A Netflix Original Film</h6>
                        <h5 id="gen">${index1.children[2].children[1].innerHTML}</h5>
                        <div class="year">
                            <h4>${index1.children[1].children[1].innerHTML}</h4>
                            <h3 id="rate"><i class="bi bi-star-fill"></i>${index1.children[2].children[2].innerHTML}</h3>
                        </div>
                    </div>
                        `
                        contentContainer.innerHTML = html2;
                        })
                    })


                })
                .catch(err => console.error(err));

                //SEARCH INPUT


                const options4 = {
                    apikey: '36f82afce18db4adcc0cd7454af022b8',
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmY4MmFmY2UxOGRiNGFkY2MwY2Q3NDU0YWYwMjJiOCIsInN1YiI6IjY2MjU1YTA2MmUyYjJjMDE4NzY3OWZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7cS8rB95TTbrbBOQK6WNo7xrfsBm_ROEmVwP5ztsOw'
                    }
                  };
                  
                  let btn1 = document.querySelector('.btn1');
                  
                  btn1.addEventListener('click', function(e) {
                    e.preventDefault();
                    let input = document.querySelector('#search_input').value;
                  
                    fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options4)
                      .then(response => response.json())
                      .then(data => {
                        let results = data.results;
                        console.log(results);
                        let html ='';
                        let index = 0;
                        let search = document.querySelector('.search');
                        search.style.display='block';
                        results.forEach(element => {
                            html +=`
                            <a href="#" class="cardsearch" data-index='${index}'>
                                <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="image of movie">
                                <div class="cont">
                                    <h3>${element.title}</h3>
                                    <div>
                                        <p>${element.release_date}</p>
                                    </div>
                                </div>
                            </a>
                            `
                            index ++;
                        })
                        search.innerHTML = html;
                        let section2 = document.querySelector('.section2');
                        let section3 = document.querySelector('.section3');
                        let section4 = document.querySelector('.section4');
                        let faqs = document.querySelector('.faqs');
                        let section6 = document.querySelector('.section6');
                        let cardscontainer = document.querySelector('.cards-container')
                        let image = document.querySelector('.image');
                        let content = document.querySelector('.content')
                        let footer = document.querySelector('footer');
                        document.querySelectorAll('.cardsearch').forEach(card => {
                            card.addEventListener('click', function(e) {
                                e.preventDefault();
                                let index = parseInt(e.target.closest('a').getAttribute('data-index'));
                                let index1 = results[index];
                                console.log(index1);
                                search.style.display='none';
                                section3.style.display='none';
                                section4.style.display='none';
                                section6.style.display='none';
                                faqs.style.display='none';
                                cardscontainer.style.display='none';
                                section2.style.paddingTop='120px';
                                footer.style.display='none';
                                section2.style.paddingBottom='8 0px';
                                let html = '';
                                html += `
                                <img src="https://image.tmdb.org/t/p/original${index1.poster_path}">
                                `
                                image.innerHTML = html;
                                let html1 = '';
                                html1 +=`
                                <h1 id="title">${index1.title}</h1>
                                <p>${index1.overview}</p>
                                <div class="details">
                                    <h6>Movie</h6>
                                    <h5 id="gen">${index1.genre_ids[0]}</h5>
                                    <div class="year">
                                        <h4>${index1.release_date}</h4>
                                        <h3 id="rate"><i class="bi bi-star-fill"></i>${index1.vote_average}</h3>
                                    </div>
                                </div>
                                `
                                content.innerHTML = html1;
                                console.log(results);
                                let sectionSuggested = document.querySelector('.cards-wrapper2');
                                sectionSuggested.style.display='block';
                                let sectionHeader = document.querySelector('.h2')
                                sectionHeader.innerHTML='Suggested'
                                let html3='';
                                results.forEach(element =>{
                                    html3 +=`<div class="card2">
                                    <img src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="">
                                    <div class="text-year">
                                        <h4>${element.title}</h4>
                                        <h5>${element.release_date}</h5>
                                    </div>
                                </div>
                                `
                                
                                    sectionSuggested.innerHTML = html3;
                                })
                            });
                        });
                    
                    })


                      .catch(err => console.error(err));
                  });
                  




                
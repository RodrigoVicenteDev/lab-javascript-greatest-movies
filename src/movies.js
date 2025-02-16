// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map( (elements ) => {
        return elements.director
    })

    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let Steven = moviesArray.filter((elements ) => {
        return elements.director === 'Steven Spielberg' && elements.genre.includes('Drama')

    })
    
    return Steven.length


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let averenge = moviesArray.reduce( (acumulador, element) => {
        return (acumulador + element.score) /2
    },0)    
     averenge = +(averenge.toFixed(2))
     
    return averenge
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramamovies = moviesArray.filter( (element) => {
        return element.genre.includes('Drama')
    })
     let dramascore = dramamovies.reduce( (acumulador, element) => {
        
            return (acumulador + element.score) /2   

    },0) 
    dramascore = +(dramascore.toFixed(2))

    return dramascore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderarray = [...moviesArray]

    orderarray.sort(( a,b) => {
        return a.year - b.year || a.title - b.title
    })
    

    return orderarray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alfaarray = [...moviesArray]
    alfaarray.sort( (a,b) => {
        if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          
          return 0;
        })

    return alfaarray.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

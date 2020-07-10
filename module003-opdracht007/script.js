//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);



//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------




const calculateSupply = (age, amountPerDay) => {
    const maxAge = 100;
    const totalNeeded = (amountPerDay * 365) * (maxAge - age);
    let message = ('You will need ' + totalNeeded +' to last you until the ripe old age of ' + maxAge)
    console.log(message)
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);



//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------




const myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

// Or...
function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It stars ' + movie.stars.join(', '));
}
printMovie(myFavMovie);
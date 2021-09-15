//https://docs.google.com/document/d/1NN3L7KFfGcBpp3nQtr5op0DwWXN2Rvp4/edit#


let series = ['Friends', 'Seinfeld', 'The Nanny', 'Super Natural'];

console.log(series)

for(i = 0; i < series.length; i++) {
    series[i] = series[i].toUpperCase()
}

console.log(series)

module.exports = series;
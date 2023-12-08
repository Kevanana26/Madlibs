let adjective = prompt('Give me and Adjective, please and thank you')
let noun = prompt('Give me and Noun, please and thank you')
let verb = prompt('Give me and verb, please and thank you')
let adverb = prompt('Give me and Adverb, please and thank you')

let story = `Once upon a time, a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}`

let madlibOutputDiv = document.getElementById('madlibOutput')

madlibOutputDiv.innerHTML = `<p>${story}<p>`
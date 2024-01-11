let holiday = prompt('Give me a Holiday, please and thank you')
let place = prompt('Give me a place, please and thank you')
let verb = prompt('Give me a Verb, please and thank you')
let name = prompt('Give me a Name, please and thank you')
let adjective2 = prompt('Give me another adjective, please and thank you')
let activity = prompt('Give me and Activity, please and thank you')
let person = prompt('Give me a Person, please and thank you')
let verb2 = prompt('Give me another verb, please and thank you')
let adjective = prompt('Give me an Adjective, please and thank you')
let story = `Twas the night before ${holiday}, and everyone was ${adjective}, in the  ${place} except for ${name}, he was busy with ${activity} While he up he saw ${person} and he thought he was a ${adjective2} so he ${verb} until he left the house `

let madlibOutputDiv = document.getElementById('madlibOutput')

madlibOutputDiv.innerHTML = `<p>${story}<p>`
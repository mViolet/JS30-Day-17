// Learned about regEx and how sort works, also stayed up late but solved it without the video!

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.getElementById("bands");

//function to remove the articles

function remove(item) {
  return item.replace(/^the |^an |^a /gi, ""); //starts with the_ or an_ or a_
}

//sort that array based on removed articles
const newBandsList = bands.sort((a,b) => {
  if (remove(a) < remove(b)) {
    return -1; //if band a sans articles is (alphabetically) less than band b sans articles, sort to left
  }
  if (remove(a) > remove(b)){
    return 1;
  }
});

//replace HTML with sorted band names
newBandsList.forEach(band => {
  const li = document.createElement("li"); //create a <li>
  const text = document.createTextNode(`${band}`); //create text for <li>
  li.appendChild(text); //place text in <li>
  bandsList.appendChild(li); //place <li> in #bands
});


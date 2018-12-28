const timer = setInterval(() => {
  var div_doc = document.getElementsByClassName('_1b7c');
  if(div_doc.length != 0) {
    clearTimeout(timer);
    addButton();
  }
}, 150);

function addButton()
{
	var div = document.createElement('div');

    div.className = 'row';

    div.innerHTML =
        '<input type="button" value="Button" onclick="alert("Button clicked")">';

    // var aButton = document.createElement('button');
    // aButton.id = "aButton";
    // document.body.appendChild(aButton)
    // aButton.addEventListener('click', function() {
    //     alert('damn');
    // });

    var div_doc = document.getElementsByClassName('_1b7c');
    console.log(div_doc.length)
    for (i = 0; i < div_doc.length; i++) {
  		div_doc[i].appendChild(div);
	}
}

// document.body.appendChild(button)

// alert('Button inserted to page bottom, please scroll down the page, find and click on it.')

// // scroll down the page
// window.scrollTo(0, document.body.scrollHeight)
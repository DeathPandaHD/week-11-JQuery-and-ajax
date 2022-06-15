let p = $('#test');
let ul=$('ul');
let div= $('#Div')

console.log(p)
console.log(ul)
console.log(div)

console.log(p.text())
p.text('New text')
$('input').attr('placeholder','placeholder text')

div.prepend('<p>prepended paragraph</p>')
div.append('<p>appended paragraph</p>')
div.before('<p>paragraph that was added befor the div</p>')
div.after('<p>paragraph added after the div</p>')

div.empty();
ul.remove()

$('input').hide();
setTimeout(() => $('input').show(), 2000)
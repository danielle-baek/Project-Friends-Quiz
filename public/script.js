function proceed(n) {
  var form = document.createElement('form')
  console.log(n)
  form.setAttribute('method', 'post')
  form.setAttribute('action', '/friends/' + (n+1))
  form.style.display = 'hidden'
  document.body.appendChild(form)
  form.submit()

}
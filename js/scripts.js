// //Bootstrap 4 jquery
// $('#about-tab').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// })
// $('#projects-tab').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// })
// $('#resume-tab').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// })
// $('#contact-tab').on('click', function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// })

//Bootstrap 5 js
var triggerTabList = [].slice.call(document.querySelectorAll('#about-tab'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
var triggerTabList = [].slice.call(document.querySelectorAll('#projects-tab'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
var triggerTabList = [].slice.call(document.querySelectorAll('#experience-tab'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
var triggerTabList = [].slice.call(document.querySelectorAll('#resume-tab'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
var triggerTabList = [].slice.call(document.querySelectorAll('#contact-tab'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
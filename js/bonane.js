/* global $ */
/** https://standardjs.com/ */
/**
 * RAJERISON Julien
 * 01 Janvier 2019
 * @type {number}
 */

let gasyYear = new Date().getFullYear()
document.querySelector('#year').innerText = gasyYear
document.title += ` ${gasyYear}`
function formatMessage (message) {
  if (message) {
    return message.replace('{{YEAR}}', gasyYear)
  } else {
    return `Bonne année ${gasyYear} !`
  }
}

function isActive (i) {
  return i === 0 ? 'active' : ''
}

$.getJSON('USER.json', function (elements) {
  elements.forEach(function (nous, i) {
    document.getElementById('carousel-indicators').innerHTML += `
              <li data-target="#quote-carousel" data-slide-to="${i}" class="${isActive(i)}" title="${nous.name}"></li>
    `
    document.getElementById('name').innerHTML += `
            <div class="item ${isActive(i)}">\n
               <blockquote>\n
                  <div class="row">\n
                       <div class="col-sm-3 text-center">\n
                           <img class="img-circle" src="${nous.image}" style="width: 100px;height:100px;">\n
                       </div>\n
                        <div class="col-sm-9">\n
                            <p>${formatMessage(nous.message)}</p>\n
                            <small>  ${nous.name}  </small>\n
                        </div>\n
                    </div>\n
               </blockquote>\n
            </div>`
  })
})

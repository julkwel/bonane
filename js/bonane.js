/* Global $ (https://standardjs.com)

// RAJERISON Julien 01 Janvier 2019

// Init carousel
$(document).ready(function () {
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
});

/**
 * Github base_url
 *
 * @type {string}
 */
const baseUrl = 'https://github.com/';

/**
 * Get date
 *
 * @type {number}
 */
let gasyYear = new Date().getFullYear();

/**
 * Query html selector add date
 *
 * @type {number}
 */
document.querySelector('#year').innerText = gasyYear;
document.title += ` ${gasyYear}`;

/**
 * Prevent message on null, undefined, '', 0, NaN, false
 *
 * @param message
 *
 * @returns {*}
 */
function formatMessage(message) {
    if (message) {
        return message.replace('{{YEAR}}', gasyYear)
    } else {
        return `Bonne année ${gasyYear} !`
    }
}

/**
 * Check slide active
 *
 * @param i
 *
 * @returns {string}
 */
function isActive(i) {
    return i === 0 ? 'active' : ''
}

/**
 * Prevent image on null, undefined, '', 0, NaN, false
 *
 * @param image
 *
 * @returns {*}
 */
function checkImage(image) {
    if (image) {
        return image;
    } else {
        return 'https://avatars1.githubusercontent.com/u/30557565';
    }
}

/**
 * Prevent image on null, undefined, '', 0, NaN, false
 *
 * @param nous
 *
 * @returns {*}
 */
function checkName(nous) {
    if (nous) {
        return nous;
    } else {
        return 'From Madagascar';
    }
}

/**
 * Check github link
 *
 * @param link
 *
 * @returns {*}
 */
function checkGithub(link) {
    if (link) {
        return baseUrl + link;
    } else {
        return 'https://github.com/';
    }
}

// Fetch json file
$.getJSON('USER.json', function (elements) {
    elements.forEach(function (nous, i) {
        document.getElementById('carousel-indicators').innerHTML += `
              <li data-target="#quote-carousel" data-slide-to="${i}" class="${isActive(i)}" title="${checkName(nous.name)}">
                <img src="${checkImage(nous.image)}" alt="">
              </li>`

        document.getElementById('name').innerHTML += `
            <div class="item ${isActive(i)}">
               <blockquote>
                  <div class="row">
                       <div class="col-sm-3 text-center">
                           <img class="img-circle" src="${checkImage(nous.image)}" style="width: 100px;height:100px;">
                       </div>
                        <div class="col-sm-9">
                            <p>${formatMessage(nous.message)}</p>
                            <div class="row">
                                <small>
                                    ${checkName(nous.name)}
                                    <a href="${checkGithub(nous.username)}" target="_blank" 
                                    style="color: #f9f9f9;margin: 5px"><i class="fa fa-github"></i></a>
                                </small>
                            </div>
                        </div>
                    </div>
               </blockquote>
            </div>`
    })
})

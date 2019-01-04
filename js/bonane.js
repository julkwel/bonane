/**
 * RAJERISON Julien
 * 01 Janvier 2019
 * @type {number}
 */

let gasy_year = new Date().getFullYear();
document.querySelector("#year").innerText = gasy_year;
document.title += ` ${gasy_year}`;
$.getJSON('USER.json', function (element) {
    for (const nous of element) {
        let gasy_nom = nous.name;
        let gasy_image = nous.image;
        document.getElementById('name').innerHTML += `
            <div class="item">\n
               <blockquote>\n
                  <div class="row">\n
                       <div class="col-sm-3 text-center">\n
                           <img class="img-circle" src="${gasy_image}" style="width: 100px;height:100px;">\n
                       </div>\n
                        <div class="col-sm-9">\n
                            <p>Bonne année  ${gasy_year} !</p>\n
                            <small>  ${gasy_nom}  </small>\n
                        </div>\n
                    </div>\n
               </blockquote>\n
            </div>`
    }
})
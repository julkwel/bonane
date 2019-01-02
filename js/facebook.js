/**
 * Bonne année 2019 By Jul
 * @type {Array}
 */

friendList = ['amis'];

friendList.forEach(function (friends) {
    if (friends.length){
        this.sendMessage("Bonne année " + friends.name + " mirary soa sy ny tsara indrindra hoanao ")
    } else {
        document.write("Mirary soa ho ahy");
    }
});


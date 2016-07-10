$(function() {

var kitties = {
    1: 'Ddh7lw7b72w',
    2: 'go43XeW6Wg4',
    3: 'X3iFhLdWjqc',
    4: '7VSR4_tAYvw',
    5: 'z_AbfPXTKms',
    6: 'vdQj2ohqCBk',
    7: 'wNv74rvkAw8',
    8: '0vmoZEaN_-o',
    9: '7M-jsjLB20Y',
    10: 'fzzjgBAaWZw',
    11: '2XID_W4neJo',
    12: 'JMSUU2b1xJ8',
    13: 'N22TJe6Gxro',
    14: 'tntOCGkgt98',
    15: 'D36JUfE1oYk',
    16: 'J---aiyznGQ',
    17: 'hdlvNX3xscE',
    18: '1nTeKe9QVc8',
    19: 'OtRRUEs3o0c',
    20: 'w_XRV5n3oZk',
    21: 'J7UwSVsiwzI',
    22: 'M819-9E6kyU',


};

var bigKitties = {
    1: 'zztFiijm34s',
    2: 'x3BHSt42L0Y',
    3: '9SZEPNYHMKQ',
    4: 'sdbSnmetciU',
    5: 'ALvS1EezLtE',
    6: 'J11uu8L8FTY',
    7: '7OJ4Iv06CtI',
    8: 'DfHARgviUzQ',
    9: 'lkeVUFhiFss',
    10: '2btR9rAcdzo',
    11: 'TUsNyDYc8KA'

};

var giantBunnies = {
    1: '1Fo236Hfaqs',
    2: 'dDW2ZYbZTHY',
    3: 'tTlMpP_EQNM',
    4: '7xAToHK2nMk',
    5: 'mQ6kje4YZ-4',
    6: '3m1_cJdvzgo',
    7: 'I0myNPKYrJQ',
    8: 'PJiMgoFcXS8',
    9: 'Byb1hIUDW9k',
    10: 'iUZgEFRoIX8'

};

var others = {
    1: 'vb11rZgfihc',
    2: 'Ytp95piqWno',
    3: 'epUk3T2Kfno',
    4: 'wavh47RpLz4',
    5: 'hhoQqN9oUpo',
    6: '18-xvIjH8T4',
    7: 'gynuHWj5mzI',
    8: '_AtP7au_Q9w',
    9: 'Gg2HTHt02sA',
    10: 'CbILj_CYqno',
    11: 'de6uTMEiZf0',
    12: 'fTpgqgfJs4w',
    13: 'sGF6bOi1NfA'

    
};


$(".fetchit").click(function() {
    $(".fetchit").text("Fetch Me Another Pettable Pet to Pet, Please");
    var chosen = $("#selectpet").val();
    $(".underbutton").show();


    switch (chosen) {

        case "kitties":
            var linkNum = Object.keys(kitties).length;
            var randomKey = Math.floor(Math.random() * (linkNum + 1));
            var randomVid = kitties[randomKey];
            console.log(randomVid);

            if (typeof randomVid !== "undefined") {
                $(".video").html("");
                $(".video").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + randomVid + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>');
            }
            break;

        case "big kitties":
            var linkNum = Object.keys(bigKitties).length;
            var randomKey = Math.floor(Math.random() * (linkNum + 1));
            var randomVid = bigKitties[randomKey];
            console.log(randomVid);
            if (typeof randomVid !== "undefined") {
                $(".video").html("");
                $(".video").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + randomVid + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>');
            }
            break;

        case "giant bunnies":
            var linkNum = Object.keys(giantBunnies).length;
            var randomKey = Math.floor(Math.random() * (linkNum + 1));
            var randomVid = giantBunnies[randomKey];
            console.log(randomVid);
            if (typeof randomVid !== "undefined") {
                $(".video").html("");
                $(".video").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + randomVid + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>');
            }
            break;

        case "others":
            var linkNum = Object.keys(others).length;
            var randomKey = Math.floor(Math.random() * (linkNum + 1));
            var randomVid = others[randomKey];
            console.log(randomVid);
            if (typeof randomVid !== "undefined") {
                $(".video").html("");
                $(".video").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + randomVid + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>');
            }
            break;

        default:

            break;
    }
    if ($(".video").css('opacity') != 0) {
        $(".video").css('opacity', 0);
    }
    $(".video").fadeTo(2000, 1);
});



});

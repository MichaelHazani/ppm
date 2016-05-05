// $(function() {

var kitties = {
    1: 'https://www.youtube.com/embed/Ddh7lw7b72w',
    2: 'https://www.youtube.com/embed/go43XeW6Wg4',
    3: 'https://www.youtube.com/embed/X3iFhLdWjqc',
    4: 'https://www.youtube.com/embed/7VSR4_tAYvw',
    5: 'https://www.youtube.com/embed/z_AbfPXTKms',
    6: 'https://www.youtube.com/embed/vdQj2ohqCBk',
    7: 'https://www.youtube.com/embed/wNv74rvkAw8',
    8: 'https://www.youtube.com/embed/0vmoZEaN_-o',
    9: 'https://www.youtube.com/embed/7M-jsjLB20Y',
    10: 'https://www.youtube.com/embed/fzzjgBAaWZw',
    11: 'https://www.youtube.com/embed/2XID_W4neJo',
    12: 'https://www.youtube.com/embed/JMSUU2b1xJ8',
    13: 'https://www.youtube.com/embed/N22TJe6Gxro',
    14: 'https://www.youtube.com/embed/tntOCGkgt98',
    15: 'https://www.youtube.com/embed/D36JUfE1oYk',
    16: 'https://www.youtube.com/embed/J---aiyznGQ',
    17: 'https://www.youtube.com/embed/hdlvNX3xscE',
    18: 'https://www.youtube.com/embed/1nTeKe9QVc8',
    19: 'https://www.youtube.com/embed/OtRRUEs3o0c',
    20: 'https://www.youtube.com/embed/w_XRV5n3oZk',
    21: 'https://www.youtube.com/embed/J7UwSVsiwzI',
};

var bigKitties = {
    1: 'https://www.youtube.com/embed/zztFiijm34s',
    2: 'https://www.youtube.com/embed/x3BHSt42L0Y',
    3: 'https://www.youtube.com/embed/9SZEPNYHMKQ',
    4: 'https://www.youtube.com/embed/sdbSnmetciU',
    5: 'https://www.youtube.com/embed/ALvS1EezLtE',
    6: 'https://www.youtube.com/embed/J11uu8L8FTY',
    7: 'https://www.youtube.com/embed/7OJ4Iv06CtI',
    8: 'https://www.youtube.com/embed/DfHARgviUzQ',
    9: 'https://www.youtube.com/embed/lkeVUFhiFss',
    10: 'https://www.youtube.com/embed/2btR9rAcdzo',
    11: 'https://www.youtube.com/embed/TUsNyDYc8KA'

};

var giantBunnies = {
    1: 'https://www.youtube.com/embed/1Fo236Hfaqs',
    2: 'https://www.youtube.com/embed/dDW2ZYbZTHY',
    3: 'https://www.youtube.com/embed/tTlMpP_EQNM',
    4: 'https://www.youtube.com/embed/7xAToHK2nMk',
    5: 'https://www.youtube.com/embed/mQ6kje4YZ-4',
    6: 'https://www.youtube.com/embed/3m1_cJdvzgo',
    7: 'https://www.youtube.com/embed/I0myNPKYrJQ',
    8: 'https://www.youtube.com/embed/PJiMgoFcXS8',
    9: 'https://www.youtube.com/embed/Byb1hIUDW9k',
    10: 'https://www.youtube.com/embed/iUZgEFRoIX8'

};

var others = {
    1: 'https://www.youtube.com/embed/vb11rZgfihc',
    2: 'https://www.youtube.com/embed/Ytp95piqWno',
    3: 'https://www.youtube.com/embed/epUk3T2Kfno',
    4: 'https://www.youtube.com/embed/wavh47RpLz4',
    5: 'https://www.youtube.com/embed/hhoQqN9oUpo',
    6: 'https://www.youtube.com/embed/18-xvIjH8T4',
    7: 'https://www.youtube.com/embed/gynuHWj5mzI',
    8: 'https://www.youtube.com/embed/_AtP7au_Q9w',
    9: 'https://www.youtube.com/embed/Gg2HTHt02sA',
    10: 'https://www.youtube.com/embed/CbILj_CYqno',
    11: 'https://www.youtube.com/embed/de6uTMEiZf0',
    12: 'https://www.youtube.com/embed/fTpgqgfJs4w'
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
                $(".video").append('<iframe width="560" height="315" src="' + randomVid + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>');
            }
            break;

        case "big kitties":
            var linkNum = Object.keys(bigKitties).length;
            var randomKey = Math.floor(Math.random() * (linkNum + 1));
            var randomVid = bigKitties[randomKey];
            console.log(randomVid);
            if (typeof randomVid !== "undefined") {
                $(".video").html("");
                $(".video").append('<iframe width="560" height="315" src="' + randomVid + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>');
            }
            break;

        case "giant bunnies":
            var linkNum = Object.keys(giantBunnies).length;
            var randomKey = Math.floor(Math.random() * (linkNum + 1));
            var randomVid = giantBunnies[randomKey];
            console.log(randomVid);
            if (typeof randomVid !== "undefined") {
                $(".video").html("");
                $(".video").append('<iframe width="560" height="315" src="' + randomVid + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>');
            }
            break;

        case "others":
            var linkNum = Object.keys(others).length;
            var randomKey = Math.floor(Math.random() * (linkNum + 1));
            var randomVid = others[randomKey];
            console.log(randomVid);
            if (typeof randomVid !== "undefined") {
                $(".video").html("");
                $(".video").append('<iframe width="560" height="315" src="' + randomVid + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>');
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



// });

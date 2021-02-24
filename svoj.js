$(function (){
    let ak = 0;
    let slikesDat = [
        {
            slika: 'zagreb.jpg',
            titlova: 'Zagreb',
            tekst: 'Zagreb je glavni grad Republike Hrvatske i najveći grad u Hrvatskoj po broju stanovnika. Šire područje grada okuplja više od milijun stanovnika. Povijesno gledajući, grad Zagreb je izrastao iz dva naselja na susjednim brežuljcima, Gradeca i Kaptola, koji čine jezgru današnjeg grada, njegovo povijesno središte.'
            ,mini: 'zagrebmini.jpg',
            grad: 'Zagreb'
        },
        {
            slika: 'zadar.jpg',
            titlova: 'Zadar',
            tekst: 'Zadar (talijanski: Zara) je hrvatski grad na Jadranskom moru, središte Zadarske županije i šireg regionalnog kompleksa sjeverne Dalmacije i Like, unutar europske NUTS 2 regije Jadranske Hrvatske.'
            ,mini: 'zadarmini.jpg',
            grad: 'Zadar'
        },
        {
            slika: 'varazdin.jpg',
            titlova: 'Varaždin',
            tekst: 'Varaždin je grad u sjeverozapadnoj Hrvatskoj smješten uz obalu rijeke Drave, povijesno, kulturno, obrazovno, gospodarsko, sportsko i turističko središte Varaždinske županije, najstarije županije u Hrvatskoj.'
            ,mini: 'varazdinmini.jpg',
            grad: 'Varaždin'
        },
        {
            slika: 'split.jpg',
            titlova: 'Split',
            tekst: 'Varaždin je grad u sjeverozapadnoj Hrvatskoj smješten uz obalu rijeke Drave, povijesno, kulturno, obrazovno, gospodarsko, sportsko i turističko središte Varaždinske županije, najstarije županije u Hrvatskoj. Split je gospodarsko i kulturno središte Dalmacije.'
            ,mini: 'splitmini.jpg',
            grad: 'Split'
        },
        {
            slika: 'rijeka.jpg',
            titlova: 'Rijeka',
            tekst: 'Rijeka (čakavski: Rika, Reka, slovenski: Reka, njemački: Sankt Veit am Flaum, talijanski i mađarski: Fiume) najveća je hrvatska luka, treći po veličini grad u Hrvatskoj te administrativno središte Primorsko-goranske županije.'
            ,mini: 'rijekamini.jpg',
            grad: 'Rijeka'
        },
        {
            slika: 'osijek.jpg',
            titlova: 'Osijek',
            tekst: 'Osijek je grad u istočnoj Hrvatskoj. Smješten je u ravnici na desnoj obali rijeke Drave između 16-og i 24-og kilometra od ušća u Dunav. Najveći je grad u Slavoniji, četvrti po veličini grad u Hrvatskoj, te je industrijsko, upravno, akademsko, sudsko i kulturno središte Osječko-baranjske županije.'
            ,mini: 'osijekmini.jpg',
            grad: 'Osijek'
        },
        {
            slika: 'dubrovnik.jpg',
            titlova: 'Dubrovnik',
            tekst: 'Dubrovnik (lat. Ragusium) je grad na jugu Hrvatske. Ime je dobio po hrastovoj šumi, dubravi. Administrativno je središte Dubrovačko-neretvanske županije i jedno od najvažnijih povijesno-turističkih središta Hrvatske. Nalazi se u južnoj Dalmaciji.'
            ,mini: 'dubrovnikmini.jpg',
            grad: 'Dubrovnik'
        },
        {
            slika: 'cakovec.jpg',
            titlova: 'Čakovec',
            tekst: 'Čakovec je grad u sjevernoj Hrvatskoj i sjedište Međimurske županije, regije koja se nalazi između rijeka Mure i Drave i poznata je po svojim vinogradima, agrokulturi i lovištima.'
            ,mini: 'cakovecmini.jpg',
            grad: 'Čakovec'
        }

    ];

    let punj = (i) => {
        $('#glavnaslika').attr("src",slikesDat[i].slika);
        $('#naslov').text(slikesDat[i].titlova);
        $('#tekst').text(slikesDat[i].tekst);
    }

    punj(ak);

    $('#desno').click(() =>{
        if (ak < slikesDat.length-1){
            ak++;
        }
        punj(ak);
        $(`#m${ak}`).css("border","4px solid yellow");
        $(`#m${ak-1}`).css("border","2px solid white");
    })

    $('#lijevo').click(() =>{
        if (ak > 0){
            ak--;
        }
        punj(ak);
        $(`#m${ak}`).css("border","4px solid yellow");
        $(`#m${ak+1}`).css("border","2px solid white");
    })

    slikesDat.forEach((item,index) => {
        $('#dole').append(`
        
        <div class="minis" id="d${index} kakav="${index}">
        <img src="${item.mini}" id="m${index}">
        <div class="grad">${item.grad}</div>
        </div>`);
        $(`#m${index}`).css("width","80px");
        $(`#m${index}`).css("border-radius","6px");
        $(`#m${index}`).css("border","2px solid white");
        $(`#m${index}`).css("cursor","pointer");
        $(`#m${index}`).css("box-shadow","2px 2px 2px black");
        $(`#m${ak}`).css("border","4px solid yellow");

        $(`#m${index}`).click(() => {
            punj(index);
            ak = index;
            for (let i=0; i<slikesDat.length; i++){
                $(`#m${i}`).css("border","2px solid white");
            }
            $(`#m${ak}`).css("border","4px solid yellow");
        }) 
    })
});

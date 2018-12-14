    /*de body uit het html document wordt opgeslaan in een variabele, 
    deze kan altijd gebruikt worden en dit is sneller dan steeds opnieuw deze informatie uit het document te halen.*/
    var body = document.body;
    body.classList.remove("bg-aqua");

    body.classList.add("bg-olive");

    document.getElementById("first-paragraph").classList.remove("bg-lime", "gray");
    document.getElementById("first-paragraph").classList.add("aqua");

    /*
    getElementById: geeft een id terug
    getElementsByTagName: geeft een array terug
    getElementsByClassName: geeft een array terug

    Controleer vaker je code door console.log() uit te voeren, zo zie je wat je terugkrijgt (bv array, enzovoort)!!!
    */

    //maak een variabele die een lijst maakt van alle elementen met onderstaande class
    let bgSilverListObjects = document.getElementsByClassName("bg-silver");
    //hier is het geen plaats binnen de lijst van de for, maar het eerste object(element) binnen de lijst die gelezen wordt
    for (objects of bgSilverListObjects) {
        //vervang elk element in objects met een andere class
        objects.classList.replace("bg-silver", "bg-teal");
    }
    /* weet altijd wat je terugkrijgt en wat je uitvoert,
    bij een getElementsByClassName kan je meerdere resultaten terugkrijgen, daarom krijg je een 'Array' terug waardoor je dit opnieuw
    in een variabele moet steken indien je hier wat mee wilt doen. Zo als remove, add. */
    let blockQuoteListObjects = document.getElementsByTagName("blockquote");
    console.log(blockQuoteListObjects);
    //daarom gebruik je ook een for, zodat je dit op bv. elk element met die bijhorende class kan toepassen.
    for (objects of blockQuoteListObjects) {
        //vervang elk element in objects met een andere class
        objects.classList.add("bg-white");
    }

    let elementMyTable = document.querySelector("#my-table");
    elementMyTable.classList.add("bg-purple");
    //queryselect container en binnen de container selectorAll paragraphs
    let shadowList = document.querySelector(".container").querySelectorAll("p");
    console.log(shadowList);
    for (objectsShadow of shadowList) {
        //vervang elk element in objects met een andere class
        objectsShadow.classList.add("shadow");
    }
    //ik krijg een array terug, maak een for-lus voor 
    let preElements = document.querySelectorAll("pre");
    for (item of preElements) {
        //classList is altijd met hoofletter L
        //ken aan elke variabele item binnen mijn array preEelements de style toe, color: white
        item.style.color = "white";
        //indien je class names toekent als variabele binnen JS, bv background-color, gebruik je altijd camelCase: backgroundColor
        item.style.backgroundColor = "violet";
        item.style.borderBottom = "3px solid red";
        item.style.borderTop = "3px solid red";
    }
    //selecteer het eerste element met de tag h3 die je tegenkomt in de html
    let headerThirdStyle = document.querySelector("h3");
    //Vervang de html binnen de h3 tag met het volgende: (schrijf dit altijd als string)
    headerThirdStyle.innerHTML = ("<em>Italic title ! yeah !</em>");
    console.log(headerThirdStyle);

    let headerSecondStyle = document.querySelector("h2");
    headerSecondStyle.innerHTML = ("<strong>HTML doesn't work !</strong>");
    console.log(headerSecondStyle);

    //maak een variabele voor de eerste ul in de html
    var firstUnorderedList = document.querySelector("ul");
    //maak een variabele voor 
    var li = document.createElement("li");
    //voeg html toe aan Li item, create textNode wordt gezien als enkel tekst toevoegen
    li.innerHTML = ("My best friend is <a href='http://www.google.com'>Google</a>");
    //wijs  li toe aan de variabele gemaakt voor de ul
    firstUnorderedList.appendChild(li);
    //maak een variabele voor het eerste a-element binnen de li variabele
    var aColor = li.querySelector("a");
    aColor.style.color = "yellow";

    var firstOlList = document.querySelector("ol");
    //met een while lus kan je dit gemakkelijk schrijven
    console.log(firstOlList);
    //wanneer er in de lijst een child op positie 0 staat, verwijder dan het child van firstOlList
    while (firstOlList.children[0]) {
        firstOlList.removeChild(firstOlList.children[0]);
    }


    let arrayNames = ["Silent Teacher", "Code Monkey", "CodeCombat"];
    let linkNames = ["http://silentteacher.toxicode.fr/", "https://www.playcodemonkey.com/", "https://codecombat.com/"];
    //Dit is een for lus voor mijn arrayNames, de functie wordt toegepast op elk element binnen de lus
    for (let index = 0; index < arrayNames.length; index++) {
        console.log(arrayNames[index]);
        //binnen de lus wordt er een variabele voor elk element aangemaakt, "a" en "li"
        let li = document.createElement("li");
        let a = document.createElement("a");
        //href is een attribute, geef a het attribuut href mee en doe dit voor elk item van de array in volgorde zo als de index gedefiniëerd is in de for-lus
        a.setAttribute("href", linkNames[index]);
        //voeg inner html toe deze uit arrayNames
        a.innerHTML = (arrayNames[index]);
        //voeg de variabele a toe aan elk li item
        li.appendChild(a);
        //voeg elk li item toe aan firstOlList
        firstOlList.appendChild(li);
    }
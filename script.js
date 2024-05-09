"use strict";

window.addEventListener("load", start)

function start() {
    console.log("javascript kører");
    registerButtonClick()
    currentScene = scene0; 
    showScene(currentScene)
    connectNodes(); 

}

let currentScene;

function registerButtonClick() {
    document.querySelector("main").addEventListener("click", userClicked);

    
}

function userClicked(event) {
    const target = event.target;
    console.log(target);

    if(target.tagName === "BUTTON") {
        buttonClicked(target);
    }
}

function buttonClicked(button) {
    console.log(button);
    
    button.parentElement.remove()

    const index = Number(button.id.substring(10));
    console.log(index)

    const choice = currentScene.choices[index];

    currentScene = choice.node;

    showScene(currentScene)
    
}

function connectNodes() {
    scene01.choices[0].node = scene111;
    scene01.choices[1].node = scene112;
    scene02.choices[1].node = scene02;
    scene111.choices[0].node = scene211;
    scene111.choices[1].node = scene212;
    scene211.choices[0].node = scene311;
    scene211.choices[1].node = scene212;
    scene311.choices[0].node = scene411;
    scene311.choices[1].node = scene412;
    scene411.choices[0].node = scene511;
    scene411.choices[1].node = scene512;
    scene511.choices[0].node = scene611;
    scene511.choices[1].node = scene612;
    scene02.choices[0].node = scene121;
    scene02.choices[1].node = scene122;
    
}



const scene122 = {
    title: "Kæmpen med det ene øje",
    text: /*html*/ ` <p> Du lister dig langsom tættere på, nu i skovkanten i stedet for på stien. Da du kommer helt tæt på kan du se de kæmpe arme, hvor der hænger en lang kølle for enden af. Skikkelsen vender sig langsomt om, og du kan se den kun har et øje, Du prøver at liste dig forbi, men en gren knækker under dig.  skikkelsen bliver forskrækket og slår ud efter dig, slaget rammer dig lige i hovedet så det splatter ud. Start forfra og prøv igen   `,
    choices: [
        {
        name: "(1) Click CTRL + R for at starte fra ny",
        node: null
        }
        ,
        {
            name: "(2) Click CTRL + R for at starte fra ny",
            node: null
        } 
    ]

}

const scene121 = {
    title: "Kæmpen med det ene øje",
    text: /*html*/ ` <p> Da du kommer tættere på kan du se de kæmpe arme, hvor der hænger en lang kølle for enden af. Skikkelsen vender sig langsomt om, og du kan se den kun har et øje, skikkelsen bliver forskrækket og slår ud efter dig, slaget rammer dig lige i hovedet så det splatter ud. Start forfra og prøv igen  `,
    choices: [
        {
        name: "(1) Click CTRL + R for at starte fra ny",
        node: null
        }
        ,
        {
            name: "(2) Click CTRL + R for at starte fra ny",
            node: null
        } 
    ]

}


const scene612 = {
    title: "Sværet i stenen",
    text: /*html*/ ` <p> Efter du har gået i noget tid kan du se en stor sten, med noget der stikker op af stenen. Du begynder og gå hurtigere og efter du kom helt op på bakken kan du se et sværd stikke op af stenen. Du tager fat i sværdet og prøver at hive det op. Ud af det blå slår der et lyn ned i sværdet. strømmen fra lynnet bliver ledet gemmet svært og er så stærk du dør. Start forfra og prøv igen `,
    choices: [
        {
        name: "(1) Click CTRL + R for at starte fra ny ",
        node: null
        }
        ,
        {
            name: "(2) Click CTRL + R for at starte fra ny",
            node: null
        } 
    ]

}

const scene611 = {
    title: "Guldet for enden af regnbuen",
    text: /*html*/ ` <p> Du takker pænt ja til at gå med den lille mand. Du kigger nervøst på ham da du træder op på regnbuen, men til din forbavselse kan du gå på den, regnbuen føles blød under dine føder. For enden af regnbuen, er den smukkeste skov du nogensinde har set, sommerfugle flyver rundt om dig, og du kan se en gruppe hjorte drikke af en sø tæt på jer, den lille mand kigger glad på det, og siger tillykke hvorefter han laver en sjov bevægelse med sin arm, og ud af det blå kommer en kæmpe sort krukke med guld. De alle sammen til dig siger den lille mand, og hvis du nogensinde kommer til at mangle hjælp får du her en fløjte, hvis du puster i den tre gange kommer jeg. Den kan dsv kun bruges en gang så brug den fornuftigt. Du har vundet! `,
    choices: [
        {
        name: "(1) Tillykke du har fundet guldet for enden af regnbuen ",
        node: null
        }
        ,
        {
            name: "(2) Tillykke du har fundet guldet for enden af regnbuen",
            node: null
        } 
    ]

}

const scene512 = {
    title: "Sværdet i stenen",
    text: /*html*/ ` <p> Da du kommer tættere på bakken kan du se en stor sten, med noget der stikker op af stenen. Du begynder og gå hurtigere og efter du kom helt op på bakken kan du se et sværd stikke op af stenen. Du tager fat i sværdet og prøver at hive det op. Ud af det blå slår der et lyn ned i sværdet. strømmen fra lynnet bliver ledet gemmet svært og er så stærk du dør. Start forfra og prøv igen  `,
    choices: [
        {
        name: "(1) Click CTRL + R for at starte fra ny ",
        node: null
        }
        ,
        {
            name: "(2) Click CTRL + R for at starte fra ny",
            node: null
        } 
    ]

}



const scene511 = {
    title: "Den lille mand med det grønnetøj",
    text: /*html*/ ` <p> Du følger regnbuen og efter at have gået i noget tid ser du enden. Ved enden af regnbuen ser du en lillebitte mand med grønt tøj og en høj hat. Manden her et stort rødt skæg og en 4 kløver i sin jakke lomme. Manden bliver super glad for at se dig, og spørg om du vil med over på den anden side af regnbuen. `,
    choices: [
        {
        name: "(1) Går du med manden over regnbuen.",
        node: null
        }
        ,
        {
            name: "(2) Siger ellers tak og går videre",
            node: null
        } 
    ]

}

const scene412 = {
    title: "Grenen",
    text: /*html*/ ` <p> Du tager grenen og binder snoren fast til den. Du kaster derefter grenen efter et træ, efter 3 kast lykkes det dig at få stenen til at sætte sig fast mellem 2 grene. Du trækker langsomt i rebet for at se om det holder, hvor efter du langsomt klatre op af hullet. Da du næsten er kommet hele vejen op af hullet knækker grenen. Du falder tilbage ned i hullet og slår dit hoved på en sten. Slaget er så hårdt at du dør. Start forfra og prøv igen  `,
    choices: [
        {
        name: "(1) Click CTRL + R for at starte fra ny ",
        node: null
        }
        ,
        {
            name: "(2) Click CTRL + R for at starte fra ny",
            node: null
        } 
    ]

}

const scene411 = {
    title: "Stenen",
    text: /*html*/ ` <p> Du tager stenen og binder snoren fast til den. Du kaster derefter stenen efter et træ, efter 3 kast lykkes det dig at få stenen til at sætte sig fast mellem 2 grene. Du trækker langsomt i rebet for at se om det holder, hvorefter du langsomt klatre op af hullet. Da du kom op af hullet igen, og er gået lidt, ser du en regnbue og en bakke. Regnbuen ser virkelig klar ud, så klar man næsten skulle tro man kunne gå på den, og man kan næsten skimte enden i horisonten. På bakken kan du se et tårn.  `,
    choices: [
        {
        name: "(1) Gå hen for at finde regnbuens ende ",
        node: null
        }
        ,
        {
            name: "(2) Gå hen for at se hvad der er på toppen af baggen? ",
            node: null
        } 
    ]

}

const scene311 = {
    title: "Hullet",
    text: /*html*/ ` <p> Efter du har gået i noget tid falder du ned i et hul. Hullet er for dybt til du kan komme op. 
    Der ligger sten og grene nede i hullet. 
    Du kommer i tanke om at du har fået et reb af manden, men du bliver nød til at binde noget fast til rebet så du kan få det til at sætte sig fast i et tre`,
    choices: [
        {
        name: "(1) Brug en sten",
        node: null
        }
        ,
        {
            name: "(2) Bruger en pind",
            node: null
        } 
    ]

}

const scene212 = {
    title: "Hullet",
    text: /*html*/ ` <p> Du vælger at forlade stien og gå dybere ind i skoven. Efter du har gået i noget tid, falder du ned i et dybt hull. Hullet er for dybt til du kan komme op og du dør af tørst efter at være fanget i hullet i et par dage. Start forfra og prøv igen `,
    choices: [
        {
        name: "(1) Click CTRL + R for at starte fra ny",
        node: null
        }
        ,
        {
            name: "(2) Click CTRL + R for at starte fra ny",
            node: null
        } 
    ]
}

const scene211 = {
    title: "Giv hunden til manden",
    text: /*html*/ ` <p> Efter du har gået noget tid ser du pludselig hunden. Den er sød og følger med dig med tilbage til manden uden problemer. Manden bliver glad og giver dig et reb. Du takker manden og går videre. `,
    choices: [
        {
        name: "(1) Går du tilbage af stien du havde fundet hunden på",
        node: null
        }
        ,
        {
            name: "(2) forlader du stien og går dybere ind i skoven",
            node: null
        } 
    ]

}

const scene112 = {
    title: "Hullet",
    text: /*html*/ ` <p> Efter du går videre ind i skoven, ser du en hund løbe forbi, du tænker ikke videre over det. Efter  du har gået i noget tid, falder du ned i et dybt hul. Hullet er for dybt til du kan komme op og du dør af tørst efter at være fanget i hullet i et par dage. Start forfra og prøv igen  `,
    choices: [
        {
        name: "(1) Click CTRL + R to restart the game",
        node: null

        }
        ,
        {
            name: "(2) Click CTRL + R to restart the game",
            node: null
        } 
    ]

}


const scene111 = {
    title: "Hjælp med at finde hunden",
    text: /*html*/ ` <p> Manden ser fortvivlede ud og siger han har mistede sin hund  `,
    choices: [
        {
        name: "(1) hjælper du manden  med at finde hunden ",
        node: null
        }
        ,
        {
            name: "(2) siger du har travlt og går videre",
            node: null
        } 
    ]

}

const scene02 = {
    title: "Manden",
    text: /*html*/ ` <p> Efter du er gået hen af stien til venstre ser du en kæmpe skikkelse `,
    choices: [
        {
        name: "(1) Går du hen til skikkelsen og snakker",
        node: null
        }
        ,
        {
            name: "(2) prøver forsigtig at snige dig forbi skikkelsen",
            node: null
        } 
    ]
}

const scene01 = {
    title: "Manden",
    text: /*html*/ ` <p> Efter du er gået hen af stien til højre, møder du en mand `,
    choices: [
        {
        name: "(1)Det snakker med ham",
        node: null
        }
        ,
        {
            name: "(2) Går du videre ind i skoven",
            node: null
        } 
    ]
}


const scene0 = {
    title: "Historien begynder",
    text: /*html*/ ` <p> Du står i en skov. Det er en sti der går i to retninger. Går du til højre eller venstre `,
    choices: [
        {
        name: "(1) går til højre?",
        node: scene01
        }
        ,
        {
         name:  "(2) Gå til venstre",
         node: scene02   
        }
       
    ]
}


function showScene(scene) {
    const html = `
    <div class="scene">
        <h2>${scene.title}</h2>
        <div class="text">
            ${scene.text}
        </div>
        <div class="choices">
            ${scene.choices.map((choice, i) => `<button id="btn-choice${i}"> ${choice.name}</button>`).join(" ")}
        </div>
    </div>`;

    document.querySelector("main").insertAdjacentHTML("beforeend", html);
}

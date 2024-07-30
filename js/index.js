 //CHANGE CONTENT SHOWED

 //resources
 let resources = {
    solar: {
        title: 'Solar Energy',
        bodyText: ' Solar energy is a freely available natural resource that could be utilized for heat production or even electricity. It is also the most renewable and clean source of energy. This energy source is applicable in several ways: generating power in homes and businesses, controlling indoor climatic conditions, heating water, and many other applications. ',
        source: 'Information Retrieved from: https://www.seia.org/initiatives/about-solar-energy',
        url: 'img/solar-energy.png'
    },
    wind: {
        title: 'Wind Energy',
        bodyText: ' Wind energy refers to the capacity of wind power to work with the efficiency of mechanical energy, electrical energy, or both. Currently, wind power utilizes large propellers to produce electricity at wind farms where the climate has been favourable to wind conditions and proximity to electrical networks. These turbines run when the wind is strong enough to turn the blades, but they are turned off by wind gusts that may be destructive.',
        source: 'Information Retrieved from: https://natural-resources.canada.ca/energy/energy-sources-distribution/renewables/wind-energy/7299',
        url: 'img/wind-energy.png'
    },
    ocean: {
        title: 'Ocean Energy',
        bodyText: ' The oceans contain large quantities of energy; The wave energy, for example, is the realization of wind-wave concentration through wind-actuated ocean currents from the differential temperature of the globe and various atmospheric phenomena. This is due to the effects of the earth’s motion concerning facilities such as the moon and the sun, as well as their mutual influence in terms of gravity that brings about cyclic shifts in the tide of seawater, which is characterized by oscillation in its elevation as well as the velocity with which the water flows. These tidal influences are more felt in the coastal zones where there are restricted water channels, which enhance the flow of water, creating high energy density.',
        source: 'Information Retrieved from: https://www.ocean-energy-systems.org/ocean-energy/what-is-ocean-energy/',
        url: 'img/ocean-energy.png'
    }
}

//get the references to the active parts

let dc = document.getElementById('dynamic-content');
let controls = document.getElementById('controls');
 let buttons = controls.children;
//event handler
function selectPage(ev) {
    let currentButton = ev.target.closest('button');

    for (let btn of buttons) {
        //if id-attribute exists in the currently accessed button
        if (btn.hasAttribute('class')) {
            // to fnd this attribute, just search on google " how to remove attribute in javascript"
            //remove it!
            btn.removeAttribute('class');
        }
    }


    //add the attribute id="active" to the current clicked element 
    currentButton.setAttribute('class', 'active');

    //console.log(currentButton.id);
    dc.innerHTML = `
    <h2>${resources[currentButton.id].title}</h2>
    <img src="${resources[currentButton.id].url}">
    <p>${resources[currentButton.id].bodyText}<br><br>${resources[currentButton.id].source}</p>
    `;
}

document.addEventListener('DOMContentLoaded', (event) =>{
    dc.innerHTML = `
    <h2>${resources.solar.title}</h2>
    <img src="${resources.solar.url}">
    <p>${resources.solar.bodyText}<br><br>${resources.solar.source}</p>
    `;
});
// registering buttons for click event

for (let btn of buttons) {
    btn.addEventListener('click', selectPage);
}

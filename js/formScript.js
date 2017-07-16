/**
 * Created by deepanshu on 6/7/17.
 */

let dogs=JSON.parse(localStorage.getItem('dogList'));
let change={};
let i;

for(i in dogs)
{
    if(dogs[i]['status']=='toAdopt'){
        change=dogs[i];
        break;
    }

}

$(function () {
    var dog = $('#dog');
    dog.append(
        $(`
<div class="col-12 col-md-6 col-lg-4">
            <div class="card" style="border-color: green">
                <img class="card-img-top" src=${change['image']} alt=${change['name']} title=${change['name']} height=265rem width="100%">
                <div class="card-block">
                    <h4 class="card-title">Name : ${change['name']}</h4>
                    <p class="card-text">Gender : <span>${change['gender']}</span></p>
                    <p class="card-text">City : ${change['city']}</p>
                    <p class="card-text">Age : ${change['age']}</p>
                </div>
            </div>
        </div>`)
    );
});

function done() {
    dogs[i]['status']='Adopted';


    for(var z =dogs.length-1;z>=0;z--)
    {
        if(dogs[z]['status']=="Available"){
            var temp = dogs[z];
            dogs[z]=dogs[i];
            dogs[i]=temp;
            break;
        }
    }



    localStorage.setItem('dogList',JSON.stringify(dogs));
    window.alert("Thank You for helping one life to live more!");

}
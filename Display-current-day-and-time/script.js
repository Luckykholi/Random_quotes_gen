


let arr = [
    {Name: "bmw", img: "https://up.yimg.com/ib/th/id/OIP.Wev8DnQItkcVDjn_3wEo7wHaE7?pid=Api&rs=1&c=1&qlt=95&w=154&h=102"
    },

    {Name: "bmw2", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },

    {Name: "hybussa", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },
    {Name: "s100rr", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },

    {Name: "bugati", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },

     {Name: "lambergini", img: "https://up.yimg.com/ib/th/id/OIP.Wev8DnQItkcVDjn_3wEo7wHaE7?pid=Api&rs=1&c=1&qlt=95&w=154&h=102"
    },

    {Name: "fortuner", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },


     {Name: "Tvtv", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },

    {Name: "Harrier", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },

    {Name: "Maruti-suzuki", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },

    {Name: "Thar", img: "https://up.yimg.com/ib/th/id/OIP.xjleorZ_H_riNTIknmJODgHaEo?pid=Api&rs=1&c=1&qlt=95&w=164&h=102"
    },
]

function showTheImage() {
    let clutter = '';
    arr.forEach(function(value,idx) {
        clutter += `
        <div class="img">
            <img src="${value.img}"  alt="${idx}">
        </div>
        `;
    })
    document.querySelector(".imageshow").innerHTML = clutter;
}

function SearchInputBtn() {
    let input = document.getElementById("input");
    let underg = document.querySelector(".underg");
    let Backcol = document.querySelector(".color-back")

    input.addEventListener("focus" , function() {
       underg.style.display = "block"
       Backcol.style.backgroundColor = "#999"
    })

    input.addEventListener("blur" , function() {
       underg.style.display = "none"
       Backcol.style.backgroundColor = "#fff";
    })

    input.addEventListener('input', function(e) {
        let output = arr.filter(function(det) {
           return det.Name.toLocaleLowerCase().startsWith(input.value)
        });

        let clutter = '';


        output.forEach(function(details) {
            clutter += `
               <div class="backtoback">
                         <i class="ri-message-3-fill" id="i"></i>
                         <h4>${details.Name}</h1>
                    </div>
            `;
        })

        underg.innerHTML = clutter;
    })
}


SearchInputBtn()
showTheImage()
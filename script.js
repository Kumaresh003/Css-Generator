document.addEventListener('DOMContentLoaded', () => {

    // home 

    var optbtn1 = document.querySelector(".opt1");
    var home = document.querySelector(".home");
    var container = document.querySelector(".container");
    var rtn_home = document.querySelector(".rtn_home");

    optbtn1.addEventListener("click", function () {
        home.style.display = "none";
        container.style.display = "flex";
    })

    rtn_home.addEventListener("click", function () {
        home.style.display = "block";
        container.style.display = "none";
    })


    // border content

    var allborder = document.getElementById("all");
    var Show = document.querySelector(".show");
    var code = document.getElementById("code");
    var obj = document.querySelector(".obj");
    var btnCopy = document.getElementById("btnCopy");
    var border_style = document.getElementById("border_style");
    var style_show = document.querySelector(".style_show");
    var border_style = document.getElementById("border_style");
    var border_type = document.getElementById("border_type");
    var border_top_left = document.getElementById("border_top_left");
    var top_left_show = document.querySelector(".top_left_show");
    var border_top_right = document.getElementById("border_top_right");
    var top_right_show = document.querySelector(".top_right_show");
    var border_bottom_left = document.getElementById("border_bottom_left");
    var bottom_left_show = document.querySelector(".bottom_left_show");
    var border_bottom_right = document.getElementById("border_bottom_right");
    var bottom_right_show = document.querySelector(".bottom_right_show");


    var b_style = "none";

    // display size = 576 range input value change

    function updateMaxValue() {
        if (window.innerWidth <= 576) {
            allborder.max = 125;
            border_top_left.max = 125;
            border_top_right.max = 125;
            border_bottom_left.max = 125;
            border_bottom_right.max = 125;

        } else {
            allborder.max = 200;
        }
    }


    function allborderupdate() {
        var top_left = border_top_left.value;
        var top_right = border_top_right.value;
        var bottom_left = border_bottom_left.value;
        var bottom_right = border_bottom_right.value;
        var border_sty = border_style.value;
        var allradious = allborder.value;

        Show.innerText = allradious + 'px';
        style_show.innerText = border_sty + "px";
        top_left_show.innerText = top_left + "px";
        top_right_show.innerText = top_right + "px";
        bottom_left_show.innerText = bottom_left + "px";
        bottom_right_show.innerText = bottom_right + "px";

        // var coding = `border-radius: ${allradious}px; \n` + 
        // `border: ${border_sty}px ${b_style} red; \n` +
        // `border-top-left-radius: ${top_left}px;`;
        var coding;
        if (top_left == 0 & top_right == 0 & bottom_left == 0 & bottom_right == 0) {
            coding = `border-radius: ${allradious}px; \n` +
                `border: ${border_sty}px ${b_style} red;`;

        } else {
            coding = `border-top-left-radius: ${top_left}px; \n` +
                `border-top-right-radius: ${top_right}px; \n` +
                `border-bottom-left-radius: ${bottom_left}px; \n` +
                `border-bottom-right-radius: ${bottom_right}px; \n` +
                `border: ${border_sty}px ${b_style} red;`;
        }


        code.value = coding;
        obj.style.cssText = coding;
    }

    allborder.addEventListener("input", allborderupdate);   // allborder.addEventListener("mousemove", allborderupdate);    // allborder.addEventListener("change", allborderupdate);
    border_style.addEventListener("input", allborderupdate);
    border_top_left.addEventListener("input", allborderupdate);
    border_top_right.addEventListener("input", allborderupdate);
    border_bottom_left.addEventListener("input", allborderupdate);
    border_bottom_right.addEventListener("input", allborderupdate);

    border_type.addEventListener("change", function () {
        b_style = this.value;
        allborderupdate();
    })

    btnCopy.addEventListener("click", () => {
        code.select();
        document.execCommand("copy");
        alert("Code Copyed.")
    })



    allborderupdate();

    window.addEventListener('resize', updateMaxValue);
    updateMaxValue();

    // box Shadow

    var btn = document.querySelector(".btn");
    var slide_nav = document.querySelector(".slide_nav");

    btn.addEventListener("click", () => {
        slide_nav.classList.toggle("open");
    });
            
    slide_nav.addEventListener("click", ()=>{
        slide_nav.classList.remove("open");
    });



})

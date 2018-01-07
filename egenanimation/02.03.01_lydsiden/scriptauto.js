$(window).on("load", startHistorie);

function startHistorie() {
    console.log("Start titelskærm");

    $("#titel_container").removeClass("titel_start_pos");
    $("#titel_container").addClass("titel_ned");
}

/*******************************/


$("#clickable").on("click", titelBtnHandler);

function titelBtnHandler() {
    console.log("Titelskærm");

    $("#titel_container").removeClass("titel_ned");
    $("#titel_container").addClass("titel_slut_pos");
    $("#baggrund_melodi")[0].play();
    $("#baggrund_melodi")[0].volume = 0;
    $("#baggrund_melodi").animate({
        volume: .4
    }, 3000);


    $("#titel_container").on("animationend", lynStart);
}

/*******************************/

function lynStart() {
    console.log("Lyn og torden starter");

    $("#titel_container").off("animationend", lynStart);

    $("#lyn_container").removeClass("lyn_start_pos");
    $("#lyn_lyd")[0].play();
    $("#lyn_container").addClass("lyn_cycle");

    $("#lyn_container").on("animationend", slimeIn);
}


/*******************************/

function slimeIn() {
    console.log("Slime kommer ind");
    $("#lyn_container").off("animationend", lynStart);

    $("#lyn_container").removeClass("lyn_cycle");
    $("#slime_container").removeClass("slime_start_pos");

    $("#slime_sprite").addClass("slime_walkcycle");
    $("#slime_container").addClass("slime_move_right");

    $("#slime_container").on("animationend", slimeHappy);
}


/*******************************/


function slimeHappy() {
    console.log("Slime bliver glad -> ser den anden side");

    $("#slime_container").off("animationend", slimeHappy);

    $("#slime_sprite").removeClass("slime_walcycle");
    $("#slime_container").removeClass("slime_move_right");


    $("#slime_sprite").addClass("slime_happy_cycle");
    $("#slime_container").addClass("slime_happy_stand");

    $("#slime_container").on("animationend", valgBoks);
}

/*******************************/

function valgBoks() {
    console.log("Slime får en tanke - han skal tage et valg");

    $("#slime_container").off("animationend", valgBoks);
    $("#boble2_container").removeClass("boble2_start_pos");
    $("#boble_container").removeClass("boble_start_pos");

    $("#boble_container").addClass("boble_float");
    $("#boble_sprite").addClass("boble_walkcycle");

    $("#boble2_container").addClass("boble2_float");
    $("#boble2_sprite").addClass("boble2_walkcycle");
}

//$("#boble_container").on("click", valgJump);
//
//function valgJump() {
//    console.log("Brugeren har valg jump");
//
//    $("#boble2_container").removeClass("boble2_float");
//    $("#boble_container").removeClass("boble_float");
//
//    $("#boble2_container").addClass("boble2_start_pos");
//    $("#boble_container").addClass("boble_start_pos");
//
//    $("#boble_container").on("animationend", evilSlimeIn);
//}

/*******************************/

$("#boble_container, #boble2_container").on("click", evilSlimeIn);

function evilSlimeIn() {
    console.log("Ond slime kommer ind");

    $("#slime_container").off("animationend", evilSlimeIn);

    $("#boble2_container").removeClass("boble2_float");
    $("#boble_container").removeClass("boble_float");

    $("#slime_sprite").removeClass("slime_happy_cycle");
    $("#evil_slime_container").removeClass("evil_slime_start_pos");
    $("#slime_sprite").removeClass("slime_happy_cycle");

    $("#boble2_container").addClass("boble2_start_pos");
    $("#boble_container").addClass("boble_start_pos");


    $("#evil_slime_container").addClass("evil_slime_move_right");
    $("#evil_slime_sprite").addClass("evil_slime_walkcycle");
    $("#slime_sprite").addClass("slime_scared_cycle");

    $("#slime_sprite").on("animationend", evilSlimeStand);
}

/*******************************/

function evilSlimeStand() {
    console.log("Ond slime angriber");
    $("#slime_sprite").off("animationend", evilSlimeStand);

    $("#slime_sprite").removeClass("slime_happy_cycle");

    $("#slime_sprite").addClass("slime_scared_cycle");
    $("#evil_slime_container").addClass("evil_slime_stand_pos");

    $("#evil_slime_container").on("animationend", evilSlimeAttack);

}


function evilSlimeAttack() {
    console.log("Ond slime angriber");
    $("#slime_sprite").off("animationend", evilSlimeAttack);

    $("#evil_slime_container").removeClass("evil_slime_stand_pos");
    $("#evil_slime_container").removeClass("evil_slime_walkcycle");
    $("#slime_container").removeClass("slime_happy_stand");

    $("#fireball_lyd")[0].play();

    $("#evil_slime_sprite").addClass("evil_slime_attack");
    $("#slime_sprite").addClass("slime_scared_cycle");

    $("#fireball_sprite").addClass("fireball_walkcycle");
    $("#fireball_container").addClass("fireball_move_right");

    $("#slime_container").addClass("slime_hit");
    $("#slime_sprite").addClass("slime_hitcycle");

}


/*******************************/

$(".slime_jump_btn").on("click", slimeJumpBtnHandler);

function slimeJumpBtnHandler() {
    console.log("Slime hopper af glæde");

    $("#slime_sprite").removeClass("slime_happy_cycle");

    $("#slime_sprite").addClass("slime_jumpcycle");
    $("#slime_container").addClass("slime_jump");
}

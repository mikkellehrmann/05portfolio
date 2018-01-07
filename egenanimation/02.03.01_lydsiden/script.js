/*******************************/


$("#clickable").on("click", titelBtnHandler);

function titelBtnHandler() {
    console.log("Titelskærm");

    $("#titel_container").removeClass("titel_ned");
    $("#titel_container").addClass("titel_slut_pos");
}


/*******************************/


$(".slime_in_btn").on("click", slimeInBtnHandler);

function slimeInBtnHandler() {
    console.log("Slime kommer ind");

    $("#slime_container").removeClass("slime_start_pos");

    $("#slime_container").addClass("slime_move_right");
    $("#slime_sprite").addClass("slime_walkcycle");
}


$(".lyn_btn").on("click", lynStarterBtnHandler);

function lynStarterBtnHandler() {
    console.log("Lyn starter");

    $("#lyn_container").removeClass("lyn_start_pos");

    $("#lyn_container").addClass("lyn_cycle");
}

/*******************************/


$(".slime_in_btn").on("click", slimeInBtnHandler);

function slimeInBtnHandler() {
    console.log("Slime kommer ind");

    $("#slime_container").removeClass("slime_start_pos");

    $("#slime_container").addClass("slime_move_right");
    $("#slime_sprite").addClass("slime_walkcycle");
}

/*******************************/


$(".slime_happy_btn").on("click", slimeHappyBtnHandler);

function slimeHappyBtnHandler() {
    console.log("Slime bliver glad -> ser den anden side");

    $("#slime_sprite").removeClass("slime_walkcycle");
    $("#slime_sprite").addClass("slime_happy_cycle");
}

/*******************************/


$(".evil_slime_in_btn").on("click", EvilSlimeInBtnHandler);

function EvilSlimeInBtnHandler() {
    console.log("Ond slime kommer ind");

    $("#evil_slime_container").removeClass("evil_slime_start_pos");

    $("#evil_slime_container").addClass("evil_slime_move_right");
    $("#evil_slime_sprite").addClass("evil_slime_walkcycle");

    $("#slime_sprite").removeClass("slime_happy_cycle");

    $("#slime_sprite").addClass("slime_scared_cycle");
}

/*******************************/


$(".evil_slime_attack_btn").on("click", EvilSlimeAttackBtnHandler);

function EvilSlimeAttackBtnHandler() {
    console.log("Ond slime angriber");
    $("#evil_slime_container").removeClass("evil_slime_walkcycle");

    $("#evil_slime_sprite").addClass("evil_slime_attack");

    $("#fireball_sprite").addClass("fireball_walkcycle");
    $("#fireball_container").addClass("fireball_move_right");
    $("#slime_container").addClass("slime_hit");
    $("#slime_sprite").addClass("slime_hitcycle");

    $("#slime_sprite").removeClass("slime_happy_cycle");
    $("#slime_sprite").addClass("slime_scared_cycle");
}


/*******************************/

$(".slime_jump_btn").on("click", slimeJumpBtnHandler);

function slimeJumpBtnHandler() {
    console.log("Slime hopper af glæde");

    $("#slime_sprite").removeClass("slime_happy_cycle");

    $("#slime_sprite").addClass("slime_jumpcycle");
    $("#slime_container").addClass("slime_jump");
}

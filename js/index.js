$(function () {
    let gallery = $(".works__content").html();
    $(".works__more__btn").click(function () {
        $(".works__content").append(gallery);
    });
}); 
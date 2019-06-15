const cl = (v) => console.log(v);
const gradient = 'linear-gradient(180deg, rgba(0, 0, 109, 0.81), rgba(68, 0, 0, 0.7)), '
const changeImage = async (obj) => {
    const res = await fetch('https://source.unsplash.com/1024x780/?railway,transportation');
    const url = await res.url;
    $(obj).css('background-image', gradient + 'url(' + url + ')');
}



$(document).ready(() => {
    const speed = 7000;
    const loop = () => {
        $('.img2').fadeOut(speed, () => {
            changeImage('.img2');
            $('.img2').css('z-index', '1');
            $('.img1').css('z-index', '2');
            $('.img2').show();
            $('.img1').fadeOut(speed, () => {
                changeImage('.img1');
                $('.img1').css('z-index', '1');
                $('.img2').css('z-index', '2');
                $('.img1').show();
                loop();
            });
        })
    };

    loop();

    $('.nl').animate({ opacity: 1 }, 2000);

    $(".wpcf7-form").on('submit', function (event) {
        $('.wpcf7-submit').val('Aguarde...');
        $('.wpcf7-submit').attr('disabled', 'disabled');


    });

    $(".wpcf7").on('wpcf7:invalid', function (event) {
        $('.wpcf7-submit').val('Ops...');
        $('.wpcf7-submit').removeAttr('disabled');
    });

    $(".wpcf7").on('wpcf7:mailfailed', function (event) {
        $('.wpcf7-submit').val('Falhou !');
        $('.wpcf7-submit').css('background-color', '#4e1717')
        $('.wpcf7-submit').removeAttr('disabled');
    });

    $(".wpcf7").on('wpcf7:mailsent', function (event) {
        $('.wpcf7-submit').val('OBRIGADO !');
        $('.wpcf7-submit').css('background-color', '#074921');
        $('.wpcf7-submit').removeAttr('disabled');
        $('.nl').fadeOut(2000);

    });
});




//css('background-image', 'url(' + getImage() + ')')
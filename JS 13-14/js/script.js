// "use strict";
$(function() {
    let html = $('#test').html();
    let tests = {
        title: 'Тест по программированию',
        questions: {
            question1: 'Сколько будет 2+2?',

            question2: 'Сколько будет 2*2+2?',

            question3: 'Сколько будет 1+2*2?'
        },

        answers: [{
                answer: '4'
            },
            {
                answer: '5'
            },
            {
                answer: '6'
            }
        ],
        answers1: [{
                answer: '6'
            },
            {
                answer: '5'
            },
            {
                answer: '4'
            }
        ],
        answers2: [{
                answer: '5'
            },
            {
                answer: '4'
            },
            {
                answer: '3'
            }
        ],
        submit: '<input type="submit" name="" value="Проверить результаты" id="check">',
        reset: '<input type="reset" name="" value="reset" id="reset">',
    };
    let content = tmpl(html, tests);
    $('body').append(content);
    let newArr = [];
    let rightAnswer = ["4", "6", "5"];
    let results = [];

    $('#check').on('click', function pushResult(e) {
        e.preventDefault();
        newArr = [];
        results = [];

        $('input:checked').each((i, el) => {
            newArr.push($(el).val());
        });

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] == rightAnswer[i]) {
                results.push(newArr[i]);
            }
            console.log(tests);
        }
        $('#overlay').fadeIn(400, () => {
            $('#modal_form')
                .css('display', 'block')
                .animate({
                    opacity: 1,
                    top: '30%'
                }, 200);
            let text = $('<p class="text">Правильных ответов:' + results.length + '</p>').appendTo('#modal_form');
        });
    });
    $('#modal_close, #overlay').on('click', () => {
        $('#modal_form')
            .animate({
                    opacity: 0,
                    top: '50%'
                }, 300,
                () => {
                    // location.reload();
                    $('p.text').remove();
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                });
    });

});

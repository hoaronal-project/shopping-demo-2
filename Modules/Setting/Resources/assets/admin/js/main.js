window.admin.removeSubmitButtonOffsetOn(['#logo']);

let currencyRateExchangeService = $('#currency_rate_exchange_service');

$(`#${currencyRateExchangeService.val()}-service`).removeClass('hide');

currencyRateExchangeService.on('change', (e) => {
    $('.currency-rate-exchange-service').addClass('hide');

    $(`#${e.currentTarget.value}-service`).removeClass('hide');
});

$('#auto_refresh_currency_rates').on('change', () => {
    $('#auto-refresh-frequency-field').toggleClass('hide');
});

$('#search_engine').on('change', (e) => {
    $('.search-engine').addClass('hide');

    $(`.search-engine#${e.currentTarget.value}`).removeClass('hide');
});

$('#paypal_express_enabled').on('change', () => {
    $('#paypal-express-fields').toggleClass('hide');
});

$('#stripe_enabled').on('change', () => {
    $('#stripe-fields').toggleClass('hide');
});

$('#bank_transfer_enabled').on('change', () => {
    $('#bank-transfer-fields').toggleClass('hide');
});

$('#check_payment_enabled').on('change', () => {
    $('#check-payment-fields').toggleClass('hide');
});

$('#store_country').on('change', (e) => {
    let oldState = $('#store_state').val();

    $.ajax({
        type: 'GET',
        url: route('countries.states.index', e.currentTarget.value),
        success(states) {
            $('.store-state').addClass('hide');

            if (_.isEmpty(states)) {
                return $('.store-state.input').removeClass('hide').find('input').val(oldState);
            }

            let options = '';

            for (let code in states) {
                options += `<option value="${code}">${states[code]}</option>`;
            }

            $('.store-state.select').removeClass('hide')
                .find('select')
                .html(options)
                .val(oldState);
        },
    });
});

$(function () {
    $('#store_country').trigger('change');
});

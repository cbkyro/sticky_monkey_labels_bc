import _ from 'lodash';
import { showAlertModal } from './modal';

function decrementCounter(counter, item) {
    const index = counter.indexOf(item);

    if (index > -1) {
        counter.splice(index, 1);
    }
}

function incrementCounter(counter, item) {
    counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
    if (counter.length !== 0) {
        if (!$link.is('visible')) {
            $link.addClass('show');
        }
        $link.attr('href', `${urlContext.compare}/${counter.join('/')}`);
        $link.find('span.countPill').html(counter.length);
    } else {
        $link.removeClass('show');
    }
}
export default function (urlContext) {
    let products;

    const $checked = $('body').find('input[name="products\[\]"]:checked');
    const $compareLink = $('a[data-compare-nav]');

    if ($checked.length !== 0) {
        products = _.map($checked, element => element.value);

        updateCounterNav(products, $compareLink, urlContext);
    } else {
        $compareLink.find('span.countPill').html('0');
    }

    const compareCounter = products || [];

    $('body').on('click', '[data-compare-id]', event => {
        const product = event.currentTarget.value;
        const $clickedCompareLink = $('a[data-compare-nav]');

        if (event.currentTarget.checked) {
            incrementCounter(compareCounter, product);
        } else {
            decrementCounter(compareCounter, product);
        }

        updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
    });

    $('body').on('submit', '[data-product-compare]', event => {
        const $this = $(event.currentTarget);
        const productsToCompare = $this.find('input[name="products\[\]"]:checked');

        if (productsToCompare.length <= 1) {
            showAlertModal('You must select at least two products to compare');
            event.preventDefault();
        }
    });

    $('body').on('click', 'a[data-compare-nav]', () => {
        const $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

        if ($clickedCheckedInput.length <= 1) {
            showAlertModal('You must select at least two products to compare');
            return false;
        }
    });
}

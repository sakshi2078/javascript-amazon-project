import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCartFetch } from '../data/cart.js';
//import '../data/backend-practice.js';

async function loadPage() {
    try {
        //throw 'error1';
        await Promise.all([
            loadProductsFetch(),
            loadCartFetch()
        ]);
    } catch (error) {
        console.log('Something went wrong!');
    }

    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
}
loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});
*/
/*
why promises are better than callbacks
bcos they are more readable and callbacks coz a lot of nesting which can be avoided with promises

new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });
}).then((value) => {
    console.log(value);
    return
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});
-----------------------------
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
        renderCheckoutHeader();
    });
});
 */
import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import compareProducts from './global/compare-products';
import privacyCookieNotification from './global/cookieNotification';
import adminBar from './global/adminBar';
import carousel from './common/carousel';
import webdigify from './custom/webdigify';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import objectFitImages from './global/object-fit-polyfill';

export default class Global extends PageManager {
    onReady() {
        const {
            channelId, cartId, productId, categoryId, secureBaseUrl, maintenanceModeSettings, adminBarLanguage, themeSettings,
        } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
		compareProducts(this.context.urls);
        carousel();
		webdigify();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        if (themeSettings['show-admin-bar']) {
            adminBar(secureBaseUrl, channelId, maintenanceModeSettings, JSON.parse(adminBarLanguage), productId, categoryId);
        }
        loadingProgressBar();
        svgInjector();
        objectFitImages();
    }
}

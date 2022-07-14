import getData from './modules/getData';
import renderCard from './modules/renderCard';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import actionPage from './modules/actionPage';

(async function(){
    const db = await getData();
        renderCard(db);
        toggleCheckbox();
        toggleCart();
        addCart();
        actionPage();
        renderCatalog();
}());


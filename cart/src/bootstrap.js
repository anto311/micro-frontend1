import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} in your cart</div`
    document.querySelector('#dev-cart').innerHTML = cartText
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector("#dev-cart")
    if(el){
        mount(el);
    }
}

export { mount };
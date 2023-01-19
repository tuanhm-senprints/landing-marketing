const GOOGLE_FORM_API = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGxEp206QoUygV-y0U4wzrBFnsY8dOPwl9GGPMliNGwBPTEw/formResponse"
const PHONE_EMPTY_TEXT = 'Số điện thoại không thể để trống'
const PHONE_INVALID_TEXT = 'Số điện thoại không hợp lệ'
const FACEBOOK_INVALID_TEXT = 'Link tài khoản facebook không hợp lệ'
const SUBMIT_SUCCESS_TEXT = 'Gửi thành công!'
const bestSellerProducts = [
    {
        'img': '4bf8b451a01dbaf7',
        'title': "Sorry I'm Late My Cat Was Sitting On Me Funny Lazy Cat Lover QTCAT011222A23",
        'link': 'https://senprints.com/sorry-i-m-late-my-cat-was-sitting-on-me-funny-lazy-cat-lover-qtcat011222a23?product=unisex-standard-t-shirt',
        'price': '22.95',
        isCustomable: false
    },
    {
        'img': '99ae5ded70341ce20ea93ea8c55b41c1',
        'title': "If YOUR NAME Can't Fix it ! We're all screwed",
        'link': 'https://senprints.com/if-your-1?product=unisex-sweatshirt',
        'price': '34.99',
        isCustomable: true
    },
    {
        'img': '39751ed50660e3bb',
        'title': "The Beagles HOD130123D13",
        'link': 'https://senprints.com/the-beagles-hod130123d13?product=unisex-standard-t-shirt',
        'price': '23.95',
        isCustomable: false
    },
    {
        'img': 'ce983df1f0235f28',
        'title': "Happy Valentine My Love",
        'link': 'https://senprints.com/happy-valentine-my-love?product=white-mug',
        'price': '23.99',
        isCustomable: true
    },
]
const newProducts = [
    {
        'img': 'a84426dfb2a741a0',
        'title': "Rabbit Ears Easter Eggs Das Ist Mein Ostern Pyjamas",
        'link': 'https://senprints.com/rabbit-ears-easter-eggs-das-ist-mein-ostern-pyjamas',
        'price': '21.99',
        isCustomable: false
    },
    {
        'img': 'c4ab462c146dbb26',
        'title': "Horse Racing Horse Race Italian Food Horse Track Racing",
        'link': 'https://senprints.com/horse-racing-horse-race-italian-food-horse-track-racing',
        'price': '21.99',
        isCustomable: false
    },
    {
        'img': '03ebf311b773f876',
        'title': "Happy Easter Bunny Rabbit Eggs Family Dye",
        'link': 'https://senprints.com/happy-easter-bunny-rabbit-eggs-family-dye',
        'price': '21.99',
        isCustomable: false
    },
    {
        'img': '12a668bd565ff218',
        'title': "Family Matching Christmas Family Vacation Cookie Baking Crew 447",
        'link': 'https://senprints.com/family-matching-christmas-family-vacation-cookie-baking-crew-447',
        'price': '21.99',
        isCustomable: false
    }
]
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('google-form').addEventListener('submit', submitForm)
    const IMG_EXT = 'webp'
    const newProductGroup = document.getElementById('new-product-group')
    for (let i = 0; i < newProducts.length; i++) {
        const product = newProducts[i]
        newProductGroup.innerHTML += `
            <a href="${product.link}"
                class="lg:w-1/4 sm:w-1/2 w-full text-center space-y-1.5 hover:opacity-90 px-5 py-5"
                title="Volleyball Sport Lover My Favorite Volleyball Player Calls Me Mom 141">
                <picture class="w-full">
                    <img class="mx-auto w-1/2 sm:w-full"
                        src="./assets/img/product/${product.img}.${IMG_EXT}"
                        loading="lazy" alt="${product.title}" />
                </picture>
                <div class="truncate font-bold">
                    ${product.title}
                </div>
                <div class="text-secondary-stop font-bold text-sm">$${product.price}</div>
                <div
                    class="py-1.5 xl:px-10 lg:px-6 sm:px-8 px-6 sm:text-base text-sm rounded-full uppercase bg-gradient-to-r from-primary-start to-primary-stop inline-block text-white">
                    Xem sản phẩm</div>
            </a>
        `
    }
    const bestSellerProductsGroup = document.getElementById('best-seller-product-group')
    for (let i = 0; i < bestSellerProducts.length; i++) {
        const product = bestSellerProducts[i]
        bestSellerProductsGroup.innerHTML += `
        <a href="${product.link}"
            class="lg:w-1/4 sm:w-1/2 w-full text-center space-y-1.5 hover:opacity-90 px-5 py-5"
            title="${product.title}">
                <div class="${product.isCustomable ? '' : 'hidden'} flex items-center space-x-2 bg-green-600 text-white opacity-80 w-fit py-2 px-4 text-lg absolute">
                    <div>Personalize it!</div>
                    <div>
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg">
                            <use href="#pen" />
                        </svg>
                    </div>
                </div>
                <picture class="w-full">
                    <img class="mx-auto w-1/2 sm:w-full"
                        src="./assets/img/product/${product.img}.${IMG_EXT}"
                        loading="lazy" alt="Family Christmas Cruise 2022 Christmas Cruise Cruising Lover 581" />
                </picture>
                <div class="truncate font-bold sm:text-base text-sm">
                    ${product.title}
                </div>
                <div class="text-secondary-stop font-bold sm:text-sm text-xs">$${product.price}</div>
                <div
                    class="py-1.5 xl:px-10 lg:px-6 sm:px-8 px-6 sm:text-base text-sm rounded-full uppercase bg-gradient-to-r from-primary-start to-primary-stop inline-block text-white">
                    Xem sản phẩm</div>
        </a>
    `
    }
})

function submitForm(e) {
    e.preventDefault()
    const name = document.getElementById('form-name').value
    const facebook = document.getElementById('form-facebook').value
    const phone = document.getElementById('form-phone').value
    const submitButton = document.getElementById('submit-button')
    if (facebook !== '' && !isFacebookAccountValid(facebook)) {
        showFacebookError(FACEBOOK_INVALID_TEXT)
        return
    }
    if (phone === '') {
        showPhoneError(PHONE_EMPTY_TEXT)
        return
    }
    if (!isVietnamesePhoneNumberValid(phone)) {
        showPhoneError(PHONE_INVALID_TEXT)
        return
    }
    submitButton.textContent = SUBMIT_SUCCESS_TEXT
    submitButton.disabled = true
    const formData = new FormData()
    formData.append('entry.1474971859', name)
    formData.append('entry.1321824324', facebook)
    formData.append('entry.968582734', phone)
    fetch(GOOGLE_FORM_API, {
        method: 'POST',
        body: formData
    })
}
function isVietnamesePhoneNumberValid(number) {
    return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(number);
}
function isFacebookAccountValid(link) {
    return /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/.test(link)
}
function showPhoneError(errorText = PHONE_INVALID_TEXT) {
    const phoneError = document.getElementById('phone-error')
    phoneError.style.display = 'block'
    phoneError.textContent = errorText
}
function hidePhoneError() {
    document.getElementById('phone-error').style.display = 'none'
}
function hideFacebookError() {
    document.getElementById('facebook-error').style.display = 'none'
}
function showFacebookError(errorText = FACEBOOK_INVALID_TEXT) {
    const facebookError = document.getElementById('facebook-error')
    facebookError.style.display = 'block'
    facebookError.textContent = errorText
}
console.log('bobbyhadz.com');

/**
 * Code for setting a cookie
 */

function setCookie(name, value, days = 7) {
  let expires = '';

  if (days) {
    const date = new Date();

    date.setDate(date.getDate() + days);

    expires = '; expires=' + date.toUTCString();
  }

  document.cookie =
    name +
    '=' +
    (encodeURIComponent(value) || '') +
    expires +
    '; path=/';
}

const setCookieBtn = document.getElementById('set-cookie-btn');
const cookieNameInput = document.getElementById('cookie-name');
const cookieValueInput = document.getElementById('cookie-value');

setCookieBtn.addEventListener('click', () => {
  setCookie(cookieNameInput.value, cookieValueInput.value);

  cookieNameInput.value = '';
  cookieValueInput.value = '';
});

/**
 * -------------------------------------------------
 */

/**
 * Code for checking if a cookie exists
 */

const checkCookieBtn = document.getElementById(
  'check-cookie-btn',
);
const cookieExistsInput = document.getElementById(
  'check-cookie-exists',
);

checkCookieBtn.addEventListener('click', () => {
  if (cookieExists(cookieExistsInput.value)) {
    console.log('✅ The cookie exists.');
  } else {
    console.log('⛔️ The cookie does not exist');
  }
});

function getCookie(name) {
  const nameEquals = name + '=';
  const cookieArray = document.cookie.split(';');

  for (cookie of cookieArray) {
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.slice(1, cookie.length);
    }

    if (cookie.indexOf(nameEquals) == 0)
      return decodeURIComponent(
        cookie.slice(nameEquals.length, cookie.length),
      );
  }

  return null;
}

function cookieExists(name) {
  return document.cookie
    .split(';')
    .some(item => item.trim().startsWith(`${name}=`));
}

/**
 * Code used to remove a specific cookie
 */

function removeCookie(name) {
  document.cookie =
    name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const removeCookieBtn = document.getElementById(
  'remove-cookie-btn',
);
const removeCookieInput = document.getElementById(
  'cookie-to-remove',
);

removeCookieBtn.addEventListener('click', () => {
  removeCookie(removeCookieInput.value);

  console.log(`Cookie ${removeCookieInput.value} removed`);

  removeCookieInput.value = '';
});

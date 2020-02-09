
const USER_SELECT_COUNTRY = document.getElementById("lst_country");
const USER_SELECT_COUNTRY_SAVE_STORAGE = "country";
let country = localStorage.getItem(USER_SELECT_COUNTRY_SAVE_STORAGE);

function asaveName(text) {
  localStorage.setItem(USER_SELECT_COUNTRY_SAVE_STORAGE, text);
  console.log(text);
}

function agetName(data)
{
    return localStorage.getItem(data);
}
function changeItem(event) {
  const getValue =
    USER_SELECT_COUNTRY.options[USER_SELECT_COUNTRY.selectedIndex].value;
    asaveName(getValue);
}

function ainit() {
    country = agetName(USER_SELECT_COUNTRY_SAVE_STORAGE);
    if(country != null)
    {
        if(country == 'KR')
        {
            USER_SELECT_COUNTRY.options[1].selected = true;
        }
        else if(country == 'GR')
        {
            USER_SELECT_COUNTRY.options[2].selected = true;
        }
        else if(country == 'TR')
        {
            USER_SELECT_COUNTRY.options[3].selected = true;
        }
        else if(country == 'FI')
        {
            USER_SELECT_COUNTRY.options[4].selected = true;
        }
    }
  USER_SELECT_COUNTRY.addEventListener("change", changeItem);
}

ainit();

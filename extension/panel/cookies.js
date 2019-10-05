function filterCookie(cookie) {
  if (cookie.name.indexOf("geo") > -1 || cookie.name === 'ah') {
    return {
      cookie: cookie,
      tag: "location"
    }
  }
  return false
}

function showCookiesForTab(tabs) {
  //get the first tab object in the array
  let tab = tabs.pop()

  //get all cookies in the domain
  var gettingAllCookies = browser.cookies.getAll({ url: tab.url })
  gettingAllCookies.then(cookies => {
    //set the header of the panel
    var activeTabUrl = document.getElementById("header-title")
    activeTabUrl.innerHTML = ""
    var text = document.createTextNode("Cookies at: " + tab.title)
    var cookieList = document.getElementById("cookie-list")
    var yourDataList = document.getElementById("your-data-list")
    var parent = document.getElementById("messages")
    cookieList.innerHTML = ""
    yourDataList.innerHTML = ""
    parent.innerHTML = ""
    activeTabUrl.appendChild(text)

    if (cookies.length > 0) {
      //add an <li> item with the name and value of the cookie to the list
      for (let cookie of cookies) {
        let personalisation = filterCookie(cookie)
        if (personalisation) {
          let dt = document.createElement("dt")
          let dd = document.createElement("dd")
          let dtContent = document.createTextNode(
            personalisation.tag
          )
          let ddContent = document.createTextNode(
            cookie.name
          )
          dt.appendChild(dtContent)
          dd.appendChild(ddContent)
          yourDataList.appendChild(dt)
          yourDataList.appendChild(dd)
        } else {
          let li = document.createElement("li")
          let content = document.createTextNode(
            cookie.name + ": " + cookie.value
          )
          li.appendChild(content)
          cookieList.appendChild(li)
        }
      }
    } else {
      let p = document.createElement("p")
      let content = document.createTextNode("No cookies in this tab.")

      p.appendChild(content)
      parent.appendChild(p)
    }
  })
}

//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({ currentWindow: true, active: true })
}
getActiveTab().then(showCookiesForTab)

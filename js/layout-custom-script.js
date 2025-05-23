// support link 
document.addEventListener("DOMContentLoaded", function () {
  const supportLink = document.createElement("a");
  supportLink.href = "/support"; // Replace with your actual support URL
  supportLink.textContent = "Contact Support";
  supportLink.className = "support-link";

  const innerHeader = document.querySelector(".portal-header .inner");
  if (innerHeader) {
    innerHeader.appendChild(supportLink);
  }
});


// FeedBack comment
$(document).ready(function () {
  var lang = $(document.documentElement).attr("lang");
  if (lang in feedbackLinkDict) {
    var text = feedbackLinkDict[lang];
    setLinkText(text);
    $(document).ajaxComplete(function () {
      setLinkText(text);
    });
  }
});

function setLinkText(text) {
  var $link = $("#email-feedback a");
  if ($link.length) {
    $link.text(text);
  }
}

//Change text here 
var feedbackLinkDict = {
  "en": "Send us feedback about the documentation"
};

// Add custom footer dynamically
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.className = "custom-footer";

  footer.innerHTML = `
    <div class="footer-content">
      <span>© 2025 Anthology</span> |
      <a href="https://www.anthology.com/trust-center/privacy-statement" target="_blank">Privacy Policy</a> |
      <a href="https://www.anthology.com/do-not-sell" target="_blank">Do Not Sell My Information</a>
    </div>
  `;

  document.body.appendChild(footer);
});

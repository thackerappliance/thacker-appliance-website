/* =====================================================
   WEBSITE FEATURE CONFIGURATION
   Update these flags to enable or disable optional
   customer-facing features without editing HTML markup.
   ===================================================== */

const siteConfig = Object.freeze({
    showPhoneNumber: false,
    showEmailAddress: true,
    showLegacyPage: false,
    acceptServiceRequests: true,
    enableDarkMode: false,
    enableAnimations: true,
    contact: {
        phoneNumber: "+16159622134",
        phoneDisplay: "(615) 962-2134",
        emailAddress: "service@thackerappliance.com"
    }
});

/* =====================================================
   FEATURE RENDERING
   Optional UI is created from the configuration so hidden
   features are not present in the rendered page.
   ===================================================== */

function createLink(href, text, className) {
    const link = document.createElement("a");

    link.href = href;
    link.textContent = text;

    if (className) {
        link.className = className;
    }

    return link;
}

function renderHeroActions() {
    const actions = document.querySelector("#hero-actions");

    if (!actions) {
        return;
    }

    if (siteConfig.showPhoneNumber) {
        actions.append(
            createLink(`tel:${siteConfig.contact.phoneNumber}`, "Call Now", "btn call")
        );
    }

    if (siteConfig.acceptServiceRequests) {
        actions.append(
            createLink("#contact", "Request Service", "btn request")
        );
    }
}

function renderContactMethods() {
    const contactMethods = document.querySelector("#contact-methods");

    if (!contactMethods) {
        return;
    }

    if (siteConfig.showPhoneNumber) {
        const phone = document.createElement("p");
        const label = document.createElement("strong");

        label.textContent = "Phone: ";
        phone.append(
            label,
            createLink(`tel:${siteConfig.contact.phoneNumber}`, siteConfig.contact.phoneDisplay)
        );
        contactMethods.append(phone);
    }

    if (siteConfig.showEmailAddress) {
        const email = document.createElement("p");
        const label = document.createElement("strong");

        label.textContent = "Email: ";
        email.append(
            label,
            createLink(`mailto:${siteConfig.contact.emailAddress}`, siteConfig.contact.emailAddress)
        );
        contactMethods.append(email);
    }
}

function renderFooterContactMethods() {
    const footerContactMethods = document.querySelector("#footer-contact-methods");
    const methods = [];

    if (!footerContactMethods) {
        return;
    }

    if (siteConfig.showPhoneNumber) {
        methods.push(
            createLink(`tel:${siteConfig.contact.phoneNumber}`, siteConfig.contact.phoneDisplay)
        );
    }

    if (siteConfig.showEmailAddress) {
        methods.push(
            createLink(`mailto:${siteConfig.contact.emailAddress}`, siteConfig.contact.emailAddress)
        );
    }

    methods.forEach((method, index) => {
        if (index > 0) {
            footerContactMethods.append(" • ");
        }

        footerContactMethods.append(method);
    });

    footerContactMethods.hidden = methods.length === 0;
}

function renderOptionalFeatures() {
    document.querySelectorAll('[data-feature="legacy-page"]').forEach((element) => {
        element.hidden = !siteConfig.showLegacyPage;
    });
}

renderHeroActions();
renderContactMethods();
renderFooterContactMethods();
renderOptionalFeatures();

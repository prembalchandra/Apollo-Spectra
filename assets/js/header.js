const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".apollo-spectra-header-hamburger");
const drawerClose = document.querySelector(".apollo-spectra-drawer-close");
const menuOverlay = document.querySelector(".apollo-spectra-menu-overlay");
const navigation = document.querySelector("#primary-navigation");
const drawerNav = document.querySelector(".apollo-spectra-header-column-center");
const submenuToggle = document.querySelector(".submenu-toggle");
const submenuItem = submenuToggle?.closest(".apollo-spectra-header-wrapper-subemenu");

if (header && menuToggle && navigation) {
    const mobileNavigation = window.matchMedia("(max-width: 1150px)");

    const setMenuOpen = (isOpen) => {
        header.classList.toggle("is-menu-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        navigation.setAttribute("aria-hidden", String(mobileNavigation.matches && !isOpen));
        
        if (mobileNavigation.matches) {
            document.body.style.overflow = isOpen ? "hidden" : "";
        } else {
            document.body.style.overflow = "";
        }
    };

    setMenuOpen(false);

    menuToggle.addEventListener("click", () => {
        setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    drawerClose?.addEventListener("click", () => {
        setMenuOpen(false);
    });

    menuOverlay?.addEventListener("click", () => {
        setMenuOpen(false);
    });

    submenuToggle?.addEventListener("click", () => {
        const isOpen = submenuToggle.getAttribute("aria-expanded") !== "true";
        submenuToggle.setAttribute("aria-expanded", String(isOpen));
        submenuItem?.classList.toggle("is-open", isOpen);
    });

    navigation.addEventListener("click", (event) => {
        if (mobileNavigation.matches && event.target instanceof Element &&
            event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    // Close when clicking outside drawer on mobile
    document.addEventListener("click", (event) => {
        if (mobileNavigation.matches && header.classList.contains("is-menu-open") &&
            event.target instanceof Node) {
            if (!drawerNav?.contains(event.target) && !menuToggle.contains(event.target)) {
                setMenuOpen(false);
            }
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
            submenuToggle?.setAttribute("aria-expanded", "false");
            submenuItem?.classList.remove("is-open");
            menuToggle.focus();
        }
    });

    mobileNavigation.addEventListener("change", (event) => {
        setMenuOpen(false);
        navigation.setAttribute("aria-hidden", String(event.matches));
        submenuToggle?.setAttribute("aria-expanded", "false");
        submenuItem?.classList.remove("is-open");
        document.body.style.overflow = "";
    });
}

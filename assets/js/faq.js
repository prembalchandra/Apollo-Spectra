/**
 * Apollo Spectra - FAQ Accordion Interaction
 */
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const questionBtn = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!questionBtn || !answer) return;

        questionBtn.addEventListener("click", function () {
            const isCurrentlyActive = item.classList.contains("active");

            // Close all open accordion items
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    const otherAnswer = otherItem.querySelector(".faq-answer");
                    const otherBtn = otherItem.querySelector(".faq-question");
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                    if (otherBtn) {
                        otherBtn.setAttribute("aria-expanded", "false");
                    }
                }
            });

            // Toggle current item
            if (isCurrentlyActive) {
                item.classList.remove("active");
                answer.style.maxHeight = null;
                questionBtn.setAttribute("aria-expanded", "false");
            } else {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + 30 + "px";
                questionBtn.setAttribute("aria-expanded", "true");
            }
        });
    });
});

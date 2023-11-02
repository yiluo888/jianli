const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailInput = document.querySelector("#personal-info .form-email .email-input");
const notificate = document.querySelector("#personal-info .form-email .notificate-email-input");
const btnSubmit = document.querySelector("#personal-info .form-email .btn-submit-email");
const infoContainer = document.querySelector("#personal-info .info-container");
const formEmail = document.querySelector("#personal-info .form-email");

const handleBtnSubmit = () => {
    const emailValue = emailInput.value;
    if (regex.test(emailValue)) {
        infoContainer.classList.remove("hidden");
        infoContainer.classList.add("display");
        formEmail.classList.add("hidden");
        formEmail.classList.remove("display");
    } else {
        notificate.innerHTML = "请输入正确邮箱格式";
        notificate.style.color = "red";
    }
};
btnSubmit.addEventListener("click", handleBtnSubmit)

const columns = document.querySelectorAll("#job-info .container .column");
const viewMorecolumns = document.querySelectorAll("#job-info .container .column .view-more");
const viewMoreBtnList = document.querySelectorAll("#job-info .container .column .view-more .btn-view-more");
const columnContentList = document.querySelectorAll("#job-info .container .column .content");

let toggle = true;

for (let i = 0; i < columns.length; ++i) {
    columns[i].addEventListener("mouseover", () => {
        viewMorecolumns[i].classList.remove("hidden");
    });
    columns[i].addEventListener("mouseout", () => {
        viewMorecolumns[i].classList.add("hidden");
    });
}

for (let i = 0; i < viewMoreBtnList.length; ++i) {
    viewMoreBtnList[i].addEventListener("click", () => {
        if (toggle) {
            columnContentList[i].classList.remove("hidden");
            columns[i].classList.add("height-auto");
            viewMoreBtnList[i].innerHTML = "&#x25B2; VIEW LESS";
        } else {
            columnContentList[i].classList.add("hidden");
            columns[i].classList.remove("height-auto");
            viewMoreBtnList[i].innerHTML = "&#x25BC; VIEW MORE";
        }
        toggle = !toggle;
    });
}
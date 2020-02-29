let footer = document.querySelector("[data-selector='footer']");

const renderFooterComponent = () => {
    footer.innerHTML = `
    <div class="site_map d-flex flex-direction-column">
        <div class="footer_info d-flex justify-between">
            <div class="footer_left">
                <h4 class="footer_text f-size-14 f-size-16-tablet">Quick Links</h4>
                <ul class="footer_nav f-size-14-desktop">
                    <li><a href="#" class="footer_link">Store locator</a></li>
                    <li><a href="#" class="footer_link">Gift cards</a></li>
                    <li><a href="#" class="footer_link">Size guide</a></li>
                    <li><a href="#" class="footer_link">About us</a></li>
                    <li><a href="#" class="footer_link">Support</a></li>
                </ul>
            </div>
            <div class="footer_right">
                <div class="footer_text f-size-14 f-size-16-tablet">
                    <h4>Customer care</h4>
                </div>
                <ul class="footer_nav f-size-14-desktop">
                    <li><a href="#" class="footer_link">Customer service</a></li>
                    <li><a href="#" class="footer_link">Track my order</a></li>
                    <li><a href="#" class="footer_link">Return policy</a></li>
                    <li><a href="#" class="footer_link">Shipping & delivery</a></li>
                    <li><a href="#" class="footer_link">Contact us</a></li>
                    <li><a href="#" class="footer_link">Careers</a></li>
                </ul>
            </div>
        </div>
        <div class="footer_adress d-flex justify-between">
            <div class="footer_questions">
                <h3 class="footer_text f-size-14 f-size-16-tablet">Questions</h3>
                <img src="img/twi_ico.jpg" class="footer_img">
                <span class="footer_tweet f-size-14-desktop">Tweet us @<b>template</b></span>
             </div>
            <div class="footer_contact">
                <h3 class="footer_text f-size-14 f-size-16-tablet">Order by fhone</h3>
                <span>8-800-409-47-12</span>
            </div>
            <div class="text d-none f-size-16-desktop">
                <p><i>We have our own delivery service which operates in 23 major European cities. Delivery time - 3-5 days. </i></p>
            </div>
        </div>
    </div>
    <div class="footer_bottom">
        <div class="policy_and_copyRights f-size-10">
            <span class="bottom">Legal notice</span>
            <span class="bottom">Privacy police</span>
            <span class="bottom">Site map</span>
        </div>
        <div class="footer_end">
            <div class="footer_copy"><small>&copy; 2010-2015, The Template Group inc.</small></div>
            <div class="footer_share f-size-14">
                <span class="share">Share</span>
                <span class="share_num">1 437</span>
            </div>
        </div>
    </div>
    <div class="footer_icon">
        <img src="img/fb.jpg" alt="fb" class="fb">
        <img src="img/twi.jpg" alt="twitter" class="twitter">
    </div>
    `
    return footer;
};

window.addEventListener("DOMContentLoaded", renderFooterComponent);
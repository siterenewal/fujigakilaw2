// ヘッダーを挿入
function loadHeader() {
    const headerHTML = `
    <header id="header">
        <div class="header-container">
            <div class="logo-area">
                <img src="css/images/S__18145305.jpg" alt="ロゴ">
                <a href="index.html" class="logo">藤垣法律事務所</a>
            </div>
            <nav id="mainNav">
                <ul>
                    <li><a href="index.html">ホーム</a></li>
                    <li><a href="news.html">お知らせ</a></li>
                    <li><a href="service.html">取扱分野</a></li>
                    <li><a href="case.html">解決事例</a></li>
                    <li><a href="pricing.html">料金案内</a></li>
                    <li><a href="profile.html">代表弁護士の想い</a></li>
                    <li><a href="column.html">コラム</a></li>
                    <li><a href="company.html">事務所概要</a></li>
                    <li><a href="contact.html">お問い合わせ</a></li>
                </ul>
            </nav>
            <button class="mobile-menu-btn" onclick="toggleMenu()" aria-label="メニューを開く">
                <span class="menu-icon"></span>
            </button>
        </div>
    </header>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    
    // 現在のページをアクティブに
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#mainNav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// フッターを挿入
function loadFooter() {
    const footerHTML = `
    <footer>
        <div class="footer_button">
            <div class="wrap">
                <p class="pc">平日 9:00～18:00 受付<br>弁護士無料相談</p>
                <p class="sp">平日 9:00～18:00（初回無料）</p>
                <ul class="footer_button_icon">
                    <li class="email sp">
                        <a href="contact.html">
                            メールで相談する
                            <b>24時間受付中</b>
                        </a>
                    </li>
                    <li class="line">
                        <a href="https://page.line.me/209ivkpx?oat_content=url&openQrModal=true" target="_blank" rel="nofollow noopener">
                            LINEで相談する<span class="pc">※QRコードが表示されます</span>
                        </a>
                    </li>
                    <li class="tel pc">
                        <a href="contact.html">
                            電話で相談する
                            <b>050-8889-5335</b>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <address class="copy">
            <p class="privacypolicy">[<a href="privacy.html">プライバシーポリシー</a>]</p>
            <p class="bengoshikai">埼玉弁護士会所属 藤垣法律事務所 代表弁護士 藤垣圭介</p>
            <p class="copyright">&copy; 2025 藤垣法律事務所.</p>
        </address>
    </footer>

    <div class="floating-contact">
        <a href="contact.html">無料相談予約</a>
    </div>
    <div id="line-banner-container">
        <a href="https://page.line.me/209ivkpx?oat_content=url&openQrModal=true" target="_blank" rel="noopener noreferrer" class="line-banner-link">
            <span>LINE 無料相談</span>
        </a>
    </div>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

// モバイルメニュー
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

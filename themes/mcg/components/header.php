<header class="c-header  c-header--sticky">
    <div class="c-header__inner">

        <button
            class="c-hamburger  js-nav-toggle"
            type="button"
            aria-label="Open mobile navigation"
            aria-controls="navigation"
        >
            <span class="c-hamburger__patty  c-hamburger__patty--top"></span>
            <span class="c-hamburger__patty  c-hamburger__patty--bottom"></span>
        </button>

        <nav class="c-nav">
            <?php bem_menu('primary-navigation', 'c-nav', false, false, true); ?>
        </nav>

        <div class="c-header__logo">
            <a class="c-header__brand" href="/" title="">
                <svg class="c-brand"><use xlink:href="#logo"></use></svg>
            </a>
        </div>

        <div class="c-header__language">
            <select class="c-language">
                <option value="En" default>En</option>
                <option value="Fr">Fr</option>
                <option value="Es">Es</option>
            </select>
        </div>

    </div>
</header>
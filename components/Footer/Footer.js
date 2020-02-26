import Container from "@material-ui/core/Container";
import React from "react";
export default () => (<Container>
    {(typeof window !== 'undefined') && (<>
    <p>Сайт недавно запущен. Разработка продолжается. Отзывы, предложения, пожелания присылайте в Telegram: @vvmspace</p>
    <p><a href="//www.liveinternet.ru/click" target="_blank">
        <img
            src={`//counter.yadro.ru/hit?t11.15;r${(typeof window !== 'undefined')
            && (escape(document.referrer)+((typeof(screen)=='undefined')?'':
                ';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?
                screen.colorDepth:screen.pixelDepth))+';u'+escape(document.URL)+
            ';h'+escape(document.title.substring(0,150))+';'+Math.random()) || ''}`}
            alt=""
            title="LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня"
            border="0" width="88" height="31" />
    </a></p>
    </>)}
</Container>);
